namespace L09_2_FlowerMeadow {

    export class Background {
        position: Vector;
        size: Vector;

        constructor(_position: Vector, _size?: Vector) {

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);


            if (_size)
                this.size = _size.copy();
            else
                this.size = new Vector(0, 0);


        }


        drawSun(): void {
            console.log("drawSun", this.position.x);
            let r1: number = 30;
            let r2: number = 150;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0.1, "HSLA(56, 100%, 90%, 1)");
            gradient.addColorStop(0.5, "HSLA(56, 100%, 52%, 0.5)");
            gradient.addColorStop(1, "HSLA(56, 100%, 52%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }


        drawMountain(_min: number, _max: number, _colorLow: string, _colorHigh: string): void {
          crc2.restore();
            console.log("drawMountains");
            let stepMin: number = 90;
            let stepMax: number = 100;
            let x: number = 0; //added steps

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

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
            crc2.shadowBlur = 5;
            crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 1;
            crc2.shadowColor = "hsl(61, 92%, 76%)";

            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.restore();
        }

        drawTrees(): void {

            let ntreetops: number = 300;
            crc2.restore();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            let treetop: Path2D = new Path2D();
            treetop.moveTo(0, 0);
            treetop.lineTo(10, -30);
            treetop.lineTo(20, 0);
            treetop.lineTo(12, 0);
            treetop.lineTo(12, 20);
            treetop.lineTo(8, 20);
            treetop.lineTo(8, 0);
            treetop.closePath();


            crc2.shadowBlur = 2;
            crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 1;
            crc2.shadowColor = "rgb(45, 38, 54)";


            for (let drawn: number = 0; drawn < ntreetops; drawn++) {
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -10);


                crc2.save();
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = -(Math.random() * this.size.y);

                gradient.addColorStop(0, "hsl(0, 17%, 14%)");
                gradient.addColorStop(0.1, "rgb(" + Math.floor(62 - Math.random() * 62) + "," +
                    Math.floor(73 - Math.random() * 15) +
                    "," + Math.floor(38 - Math.random() * 38) + ")");

                crc2.fillStyle = gradient;
                crc2.translate(x, y);


                crc2.fill(treetop);
                crc2.restore();
            }
            crc2.restore();
        }


        drawHills(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
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
            crc2.translate(this.position.x, this.position.y);

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


       





    }


}

