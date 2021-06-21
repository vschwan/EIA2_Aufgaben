namespace L11_1_FlowerMeadow {

    export abstract class Flower {

        protected position: Vector;

        constructor(_position: Vector) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);
        }

        public abstract draw(): void;

        public drawnectar(): void {

            crc2.restore();
            crc2.save();
            let nectar: Path2D = new Path2D();

            crc2.fillStyle = "HSL(63, 100%, 79%)";
            crc2.strokeStyle = "HSL(63, 100%, 30%)";
            crc2.lineWidth = 1;

            crc2.translate(this.position.x + 20, this.position.y);
            nectar.rect(0, 0, 10, 30);

            crc2.fill(nectar);
            crc2.stroke(nectar);
       
            crc2.restore();
        }

        public fillnectar(_nectarFillLevel: number): void {
            crc2.restore();
            crc2.save();

            let fillNectar: Path2D = new Path2D();
            crc2.fillStyle = "HSL(63, 100%, 30%)";
            crc2.strokeStyle = "HSL(63, 100%, 30%)";
            crc2.lineWidth = 1;

            crc2.translate(this.position.x + 20, this.position.y);
            crc2.rect(0, 0, 10, _nectarFillLevel);

            crc2.fill(fillNectar);
            crc2.stroke(fillNectar);
            crc2.restore();
        }
    }

}