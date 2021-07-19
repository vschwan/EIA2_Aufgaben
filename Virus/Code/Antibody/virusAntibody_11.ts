namespace L11_Virus {

    export class Antibody extends Moveable {

        private rotation: number;

        public constructor(_position: Vector) {
            super(_position);

            this.velocity = Vector.getRandom(2, 5);
            this.rotation = (Math.random() * 360);
        }

        public draw(): void {
            // console.log("drawAntibody");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.rotate(this.rotation);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 25);

            crc2.strokeStyle = "HSL(250,20%,40%)";
            crc2.lineWidth = 2;

            crc2.moveTo(0, 25);
            crc2.lineTo(15, 40);
            crc2.moveTo(0, 25);
            crc2.lineTo(-15, 40);

            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            crc2.restore();
        }

        public move(_timeslice: number): void {
            // if (this.infected == true) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += (crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > (crc2.canvas.width))
                this.position.x -= (crc2.canvas.width);
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

    }
}