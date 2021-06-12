namespace L10_Virus {

    export class Corona extends Moveable {

        radius: number = 10;
    
        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(20, 30);
        }

        draw(): void {
            // console.log("draw Corona");

            let spikeslength: number = 2;
            let spikesnumber: number = 15;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 1, 0, 0, this.radius);

            // crc2.restore();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.moveTo(0, 0 - this.radius);
            for (let i: number = 0; i < spikesnumber; i++) {
                crc2.rotate(Math.PI / spikesnumber);
                crc2.lineTo(0, 0 - (this.radius * spikeslength));
                crc2.rotate(Math.PI / spikesnumber);
                crc2.lineTo(0, 0 - this.radius);

            }
            crc2.closePath();
            gradient.addColorStop(0, "HSLA(130, 77%,100%, 0.5)");
            gradient.addColorStop(0.5, "HSLA(130, 77%,70%, 0.8)");
            gradient.addColorStop(1, "HSLA(130, 90%,40%, 0.8)");


            crc2.fillStyle = gradient;
            crc2.lineWidth = 1;
            crc2.strokeStyle = "HSL(130, 90%,30%)";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
            crc2.restore();
        }

        move(_timeslice: number): void {
      
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += (crc2.canvas.width);

            if (this.position.x > (crc2.canvas.width))
                this.position.x -= (crc2.canvas.width);

            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;


        }
    }


}