namespace L11_1_FlowerMeadow {

    export class OvalFlower extends Flower {

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



    }

}