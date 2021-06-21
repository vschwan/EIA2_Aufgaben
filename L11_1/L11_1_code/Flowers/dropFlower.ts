namespace L11_1_FlowerMeadow {

    export class DropFlower extends Flower {

        constructor(_position: Vector) {
            super(_position);

        }

        public draw(): void {
            crc2.restore();
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

            let dropFlower: Path2D = new Path2D();
            let gradientfl: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -10);
            dropFlower.moveTo(0, 0);
            dropFlower.bezierCurveTo(0, 0, -30, -5, 0, -25);
            dropFlower.bezierCurveTo(0, -25, 30, 5, 0, 0);
            dropFlower.closePath();

            gradientfl.addColorStop(0.1, "hsl(188, 100%, 30%)");
            gradientfl.addColorStop(0.5, "hsl(188, 61%, 57%)");
            gradientfl.addColorStop(1, "hsl(188, 75%, 70%)");

            crc2.shadowBlur = 2;
            crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 2;
            crc2.shadowColor = "hsl(141, 20%, 30%)";

            crc2.fillStyle = gradientfl;
            crc2.fill(dropFlower);
            //crc2.stroke();

            crc2.save();

            crc2.restore();
            crc2.restore();



        }

    }

}