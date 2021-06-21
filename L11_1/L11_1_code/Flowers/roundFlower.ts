namespace L11_1_FlowerMeadow {

    export class RoundFlower extends Flower {

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

    }

}