namespace L08_FlowerMeadow {

    window.addEventListener("load", handleLoad);


    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;



    interface Vector {
        x: number;
        y: number;
    }

    let nFlowers: number = 15;


    function handleLoad(): void {


        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * 0.45;

        drawBackground();
        drawSun({ x: 400, y: 180 });
        drawCloud({ x: 650, y: 100 }, { x: 200, y: 30 });
        drawMountains({ x: 0, y: horizon }, 70, 200, "HSL(216, 50%, 17%)", "HSL(216, 90%, 90%)");
        drawCloud({ x: 150, y: 180 }, { x: 100, y: 20 });
        drawMountains({ x: 0, y: horizon }, 50, 150, "HSL(216, 15%, 17%)", "HSL(216, 22%, 58%)");
        drawCloud({ x: 300, y: 120 }, { x: 180, y: 30 });
        drawHills({ x: 0, y: horizon });
        drawTree();






        for (let i: number = 0; i < nFlowers; i++) {

            let x: number = (Math.random() * canvas.width / 2);
            let y: number = (150 + Math.random() * canvas.height / 2);

            drawRoundFlower(x, y);
        }

        for (let i: number = 0; i < nFlowers; i++) {

            let x: number = (Math.random() * canvas.width / 2);
            let y: number = (150 + Math.random() * canvas.height / 2);

            drawCupFlower(x, y);
        }

        // drawBeeHive();
        // drawBees();









        // drawBees();




    }

    function drawBackground(): void {
        console.log("drawBackground");

        crc2.save();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height / 1.5);
        gradient.addColorStop(0, "#91cddd");
        gradient.addColorStop(0.5, "#f19b9c");
        gradient.addColorStop(1, "#f4c585");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height / 1.5);
        crc2.restore();
    }



    function drawSun(_pos: Vector): void {
        console.log("drawSun", _pos);
        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0.1, "HSLA(56, 100%, 90%, 1)");
        gradient.addColorStop(0.5, "HSLA(56, 100%, 52%, 0.5)");
        gradient.addColorStop(1, "HSLA(56, 100%, 52%, 0)");

        crc2.save();
        crc2.translate(_pos.x, _pos.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();


    }



    function drawCloud(_pos: Vector, _size: Vector): void {
        console.log("drawCloud", _pos, _size);

        let nPArticles: number = 40;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);


        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.1)");

        crc2.save();
        crc2.translate(_pos.x, _pos.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nPArticles; drawn++) {

            crc2.save();
            // Math.random() -0.5 gibt wert zwischen -0,5 und 0,5
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);

            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();


        }

        crc2.restore();



    }

    function drawMountains(_pos: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("drawMountains");
        let stepMin: number = 90;
        let stepMax: number = 100;
        let x: number = 0; //added steps

        crc2.save();
        crc2.translate(_pos.x, _pos.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);


        do {

            x += stepMin + Math.random() * (stepMax - stepMin);

            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);

        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();




    }

    function drawHills(_pos: Vector): void {

        crc2.save();
        crc2.translate(_pos.x, _pos.y);
        crc2.beginPath();
        crc2.moveTo(0, -30);
        crc2.bezierCurveTo(100, -50, 200, -50, crc2.canvas.width / 2, 0);

        crc2.lineTo(crc2.canvas.width, crc2.canvas.height * 0.3);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2);
        crc2.lineTo(0, crc2.canvas.height / 2);

        let gradient1: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height / 2);
        gradient1.addColorStop(0, "HSL(104, 18%, 50%)");
        gradient1.addColorStop(1, "HSL(104, 47%, 67%)");
        crc2.fillStyle = gradient1;

        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.restore();


        crc2.save();
        crc2.translate(_pos.x, _pos.y);
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width * 0.0, 100);

        crc2.bezierCurveTo(500, -10, 600, -100, crc2.canvas.width, 0);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2);
        crc2.lineTo(0, crc2.canvas.height / 2);

        let gradient2: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height / 2);
        gradient2.addColorStop(0, "HSL(63, 20%, 50%)");
        gradient2.addColorStop(1, "HSL(63, 41%, 72%)");
        crc2.fillStyle = gradient2;

        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.restore();

    }



    function drawTree(): void {


    }



    function drawRoundFlower(_x: number, _y: number): void {
        //drawStem
        crc2.save();
        crc2.translate(100, 100); //ey, keine ahnung
        let stem: Path2D = new Path2D();
        stem.rect(0, 0, 5, 30);


        crc2.save();
        crc2.translate(_x, _y);
        crc2.fillStyle = "HSL(89, 59%, 66%)";

        crc2.fill(stem);
        crc2.restore();


        //drawPetal
        let radiusFlower: number = 10;
        let roundFlower: Path2D = new Path2D();

        let gradientfl: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusFlower);

        roundFlower.arc(0, 0, radiusFlower, 0, 2 * Math.PI);
        gradientfl.addColorStop(0.5, "HSL(69,100%,50%)");
        gradientfl.addColorStop(1, "HSL(318,59%,57%)");

        crc2.save();
        crc2.translate(_x, _y);
        crc2.fillStyle = gradientfl;
        crc2.fill(roundFlower);
        crc2.restore();

    }


    function drawCupFlower(_x: number, _y: number): void {
        //drawStem
        crc2.save();
        crc2.translate(100, 100);
        let stem: Path2D = new Path2D();
        stem.rect(0, 0, 3, 30);


        crc2.save();
        crc2.translate(_x, _y);
        crc2.fillStyle = "HSL(89, 59%, 66%)";

        crc2.fill(stem);
        crc2.restore();


        //drawPetal
        let cupFlower: Path2D = new Path2D();


        // let gradientfl: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusFlower);

        crc2.beginPath();
        cupFlower.moveTo(100, 100);
        cupFlower.quadraticCurveTo(20, 100, 200, 20);
        cupFlower.closePath();
        crc2.stroke();

        // gradientfl.addColorStop(0.5, "HSL(69,100%,50%)");
        // gradientfl.addColorStop(1, "HSL(318,59%,57%)");

        crc2.save();
        crc2.translate(_x, _y);
        crc2.fillStyle = "HSL(89, 59%, 66%)";
        crc2.fill(cupFlower);
        crc2.restore();

    }



}




