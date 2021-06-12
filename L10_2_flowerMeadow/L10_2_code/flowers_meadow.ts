namespace L10_2_FlowerMeadow {

    export class Flower {
        position: Vector;

        constructor(_position: Vector) {

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

        }

        drawRoundFlower(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            let stem: Path2D = new Path2D();
            stem.rect(0, 0, 5, 30);
            crc2.fillStyle = "HSL(89, 59%, 66%)";


            crc2.shadowBlur = 2;
            crc2.shadowOffsetX = 0;
            crc2.shadowOffsetY = 2;
            crc2.shadowColor = "hsl(141, 10%, 40%)";

            crc2.fill(stem);
            crc2.restore();
            crc2.restore();


            //drawPetal
            crc2.restore();
            crc2.save();
            crc2.translate(this.position.x + 2, this.position.y);
            let radiusFlower: number = 10;

            let roundFlower: Path2D = new Path2D();
            let gradientfl: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusFlower);
            roundFlower.arc(0, 0, radiusFlower, 0, 2 * Math.PI);
            gradientfl.addColorStop(0.5, "HSL(69,100%,50%)");
            gradientfl.addColorStop(1, "HSL(290,69%,53%)");

            crc2.shadowBlur = 2;
            crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 2;
            crc2.shadowColor = "hsl(141, 20%, 30%)";

            crc2.fillStyle = gradientfl;
            crc2.fill(roundFlower);
            crc2.save();
            crc2.restore();
            crc2.restore();
        }

        drawOvalFlower(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            let stem: Path2D = new Path2D();
            stem.rect(0, 0, 5, 30);

            crc2.fillStyle = "HSL(89, 59%, 66%)";

            crc2.shadowBlur = 2;
            crc2.shadowOffsetX = 0;
            crc2.shadowOffsetY = 2;
            crc2.shadowColor = "hsl(141, 10%, 40%)";

            crc2.fill(stem);
            crc2.restore();
            crc2.restore();

            //drawPetal
            crc2.restore();
            crc2.save();
            crc2.translate(this.position.x + 2, this.position.y);

            let ovalFlower: Path2D = new Path2D();
            let gradientfl: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 10);
            ovalFlower.ellipse(0, 0, 8, 15, 0, 0, Math.PI * 2);

            gradientfl.addColorStop(0.1, "hsl(319, 75%, 70%)");
            gradientfl.addColorStop(0.6, "hsl(319, 61%, 57%)");
            gradientfl.addColorStop(1, "hsl(319, 100%, 30%)");
            
            crc2.shadowBlur = 2;
            crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 2;
            crc2.shadowColor = "hsl(141, 20%, 30%)";

            crc2.fillStyle = gradientfl;
            crc2.fill(ovalFlower);
            crc2.save();
            crc2.restore();
            crc2.restore();
        }

        drawDropFlower(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            let stem: Path2D = new Path2D();
            stem.rect(0, 0, 5, 30);

            crc2.fillStyle = "HSL(89, 59%, 66%)";

            crc2.shadowBlur = 2;
            crc2.shadowOffsetX = 0;
            crc2.shadowOffsetY = 2;
            crc2.shadowColor = "hsl(141, 10%, 40%)";

            crc2.fill(stem);
            crc2.restore();
            crc2.restore();


            //drawPetal
            crc2.restore();
            crc2.save();
            crc2.translate(this.position.x + 2, this.position.y);

            let heartFlower: Path2D = new Path2D();
            let gradientfl: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -10);
            heartFlower.moveTo(0, 0);
            heartFlower.bezierCurveTo(0, 0, -30, -5, 0, -25);
            heartFlower.bezierCurveTo(0, -25, 30, 5, 0, 0);
            heartFlower.closePath();

            gradientfl.addColorStop(0.1, "hsl(188, 100%, 30%)");
            gradientfl.addColorStop(0.5, "hsl(188, 61%, 57%)");
            gradientfl.addColorStop(1, "hsl(188, 75%, 70%)");
         
            crc2.shadowBlur = 2;
            crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 2;
            crc2.shadowColor = "hsl(141, 20%, 30%)";

            crc2.fillStyle = gradientfl;
            crc2.fill(heartFlower);
            //crc2.stroke();
            crc2.save();
            crc2.restore();
            crc2.restore();
        }



    }











}