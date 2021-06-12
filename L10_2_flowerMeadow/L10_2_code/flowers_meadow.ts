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

            crc2.fillStyle = gradientfl;
            crc2.fill(ovalFlower);
            crc2.save();
            crc2.restore();
            crc2.restore();

        }

    }











}