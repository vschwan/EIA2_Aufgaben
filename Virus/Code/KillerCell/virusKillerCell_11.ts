namespace L11_Virus {

    export class KillerCell extends Moveable {

        private rotation: number;

        public constructor(_position: Vector) {
            super(_position);

            this.rotation = (Math.random() * 90);
            this.velocity = Vector.getRandom(5, 10);
        }

        public draw(): void {
            //console.log("KillerCells");
            let radius: number = 20;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radius);

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.rotate(this.rotation);
            crc2.moveTo(0, 0);
            // particle.arc(0, 0, radiusParticle, -Math.PI / 3, Math.PI / 48, true); //anticlockwise
            crc2.arc(0, 0, radius, 0, Math.PI * 1.6);
            crc2.lineTo(0, 0);
            crc2.closePath();
            gradient.addColorStop(0, "HSLA(43, 87%,60%,1)");
            gradient.addColorStop(1, "HSLA(43, 87%,80%,0.5)");
            crc2.fillStyle = gradient;
            crc2.lineWidth = 2;
            crc2.strokeStyle = "HSL(43, 87%, 60%)";

            crc2.save();
            // crc2.translate(_position.x, _position.y);
            crc2.stroke();
            crc2.fill();
            crc2.restore();
            crc2.restore();


        }

        public move(_timeslice: number): void {
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