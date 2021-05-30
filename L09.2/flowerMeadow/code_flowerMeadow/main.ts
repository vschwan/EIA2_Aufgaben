namespace L09_2_FlowerMeadow {

    window.addEventListener("load", handleLoad);


    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];
    let background: ImageData;





    function handleLoad(): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        handleBees();


        window.setInterval(animate, 20);

        //  drawSun({ x: 400, y: 180 });
        //  drawCloud({ x: 650, y: 100 }, { x: 200, y: 30 });
        //  drawMountains(posMountains, 70, 200, "HSL(216, 50%, 17%)", "HSL(216, 90%, 90%)");
        // drawCloud({ x: 150, y: 180 }, { x: 100, y: 20 });
        // drawMountains({ x: 0, y: horizon }, 50, 150, "HSL(216, 15%, 17%)", "HSL(216, 22%, 58%)");
        // drawCloud({ x: 300, y: 120 }, { x: 180, y: 30 });
        // drawTree({ x: canvas.width / 2 - 5, y: 255 }, { x: canvas.width, y: 10 });
        // drawHills({ x: 0, y: horizon });
    }

    function drawBackground(): void {
        console.log("drawBackground");
        let horizon: number = crc2.canvas.height * 0.45;

        crc2.save();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height / 1.5);
        gradient.addColorStop(0, "#91cddd");
        gradient.addColorStop(0.5, "#f19b9c");
        gradient.addColorStop(1, "#f4c585");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height / 1.5);

        crc2.restore();

        let posSun: Vector = new Vector(400, 180);
        let sun: Background = new Background(posSun);
        sun.drawSun();

        let posCloud1: Vector = new Vector(650, 100);
        let sizeCloud1: Vector = new Vector(200, 30);
        let cloud1: Cloud = new Cloud(posCloud1, sizeCloud1);
        cloud1.draw();
        moveables.push(cloud1);
       

        let posMountain1: Vector = new Vector(0, horizon);
        let mountain1: Background = new Background(posMountain1);
        mountain1.drawMountain(70, 200, "HSL(216, 50%, 17%)", "HSL(216, 90%, 90%)");

        let posCloud2: Vector = new Vector(150, 180);
        let sizeCloud2: Vector = new Vector(100, 20);
        let cloud2: Cloud = new Cloud(posCloud2, sizeCloud2);
        cloud2.draw();
      

        let mountain2: Background = new Background(posMountain1);
        mountain2.drawMountain(50, 150, "HSL(216, 15%, 17%)", "HSL(216, 22%, 58%)");

        let posCloud3: Vector = new Vector(300, 120);
        let sizeCloud3: Vector = new Vector(180, 30);
        let cloud3: Cloud = new Cloud(posCloud3, sizeCloud3);
        cloud3.draw();
        


        let posTrees: Vector = new Vector(canvas.width / 2 - 5, 255);
        let sizeTrees: Vector = new Vector(canvas.width, 10);
        let trees: Background = new Background(posTrees, sizeTrees);
        trees.drawTrees();

        let poshills: Vector = new Vector(0, horizon);
        let hills: Background = new Background(poshills);
        hills.drawHills();

        handleFlowers();

        background = crc2.getImageData(0, 0, canvas.width, canvas.height);

    }

    function handleFlowers(): void {
        let nFlowers: number = 10;

        for (let i: number = 0; i < nFlowers; i++) {

            let x: number = (Math.random() * canvas.width);
            let y: number = (320 + Math.random() * canvas.height / 4);

            let posFlower: Vector = new Vector(x, y);
            let flower: Flower = new Flower(posFlower);
            flower.drawRoundFlower();

        }

    }

    


    function handleBees(): void {

        let nBees: number = 10;
        for (let i: number = 0; i < nBees; i++) {

            let x: number = (Math.random() * canvas.width);
            let y: number = (Math.random() * canvas.height);

            let position: Vector = new Vector(x, y);
            let bee: Bee = new Bee(position);
            bee.draw();
            moveables.push(bee);
        }


    }



    function animate(): void {

        crc2.putImageData(background, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }


    }



}




