namespace L11_1_FlowerMeadow {

    window.addEventListener("load", handleLoad);


    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];
    let background: ImageData;
    let flowers: Flower[] = [];



    function handleLoad(): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        handleClouds();
        handleBees();

        window.setInterval(animate, 20);
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

        let posMountain1: Vector = new Vector(0, horizon);
        let mountain1: Background = new Background(posMountain1);
        mountain1.drawMountain(70, 200, "HSL(216, 50%, 17%)", "HSL(216, 90%, 90%)");

        let mountain2: Background = new Background(posMountain1);
        mountain2.drawMountain(50, 150, "HSL(216, 15%, 17%)", "HSL(216, 22%, 58%)");

        let posTrees: Vector = new Vector(canvas.width / 2 - 5, 255);
        let sizeTrees: Vector = new Vector(canvas.width, 10);
        let trees: Background = new Background(posTrees, sizeTrees);
        trees.drawTrees();

        let poshills: Vector = new Vector(0, horizon);
        let hills: Background = new Background(poshills);
        hills.drawHills();

        handleFlowers();
        drawHive();

        background = crc2.getImageData(0, 0, canvas.width, canvas.height);

    }

    function handleClouds(): void {

        let k: number = 3;

        for (let i: number = 0; i < k; i++) {

            let xPos: number = (Math.random() * canvas.width);
            let yPos: number = ((Math.random() * 170) + 35);

            let xSize: number = ((Math.random() * 150) + 90);
            let ySize: number = ((Math.random() * 30) + 20);

            let posCloud: Vector = new Vector(xPos, yPos);
            let sizeCloud: Vector = new Vector(xSize, ySize);
            let cloud: Cloud = new Cloud(posCloud, sizeCloud);

            moveables.push(cloud);
        }
    }

    function handleFlowers(): void {
        let nFlowers: number = 10;

        for (let i: number = 0; i < nFlowers; i++) {

            let x: number = (Math.random() * canvas.width);
            let y: number = (320 + Math.random() * canvas.height / 4);


            let posFlower: Vector = new Vector(x, y);
            let ovalFlower: OvalFlower = new OvalFlower(posFlower);
            flowers.push(ovalFlower);
            ovalFlower.drawnectar();
        }


        for (let i: number = 0; i < nFlowers; i++) {

            let x: number = (Math.random() * canvas.width);
            let y: number = (320 + Math.random() * canvas.height / 4);


            let posFlower: Vector = new Vector(x, y);
            let dropFlower: DropFlower = new DropFlower(posFlower);
            flowers.push(dropFlower);
            dropFlower.drawnectar();
        }


        for (let i: number = 0; i < nFlowers; i++) {

            let x: number = (Math.random() * canvas.width);
            let y: number = (320 + Math.random() * canvas.height / 4);


            let posFlower: Vector = new Vector(x, y);
            let roundFlower: RoundFlower = new RoundFlower(posFlower);
            flowers.push(roundFlower);
            roundFlower.drawnectar();
        }

        for (let flower of flowers) {
            flower.draw();

        }



    }


    function handleBees(): void {

        let nBees: number = 10;
        for (let i: number = 0; i < nBees; i++) {

            let x: number = (Math.random() * canvas.width);
            let y: number = (Math.random() * canvas.height);

            let position: Vector = new Vector(x, y);
            let bee: Bee = new Bee(position);
            moveables.push(bee);
        }
    }

    function animate(): void {

        crc2.putImageData(background, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        for (let flower of flowers) {

            let nectarFillLevel: number = ((Math.random() * 30) + 1);
            let randomNumber: number = (Math.random() * 0.002);
            //console.log(randomNumber);
            if (nectarFillLevel <= 30) {
                nectarFillLevel += randomNumber;
                // console.log(nectarFillLevel);
                flower.fillnectar(nectarFillLevel);

            } else {
                nectarFillLevel = 30;
                flower.fillnectar(nectarFillLevel);
            } //hab mich an dem orientiert was Marcel Ritter gemacht hat, aber 
            //dann offenschtlich nciht hinbekommen :D immer gut 
        }



    }
    function drawHive(): void {
        //bleh
    }


}
