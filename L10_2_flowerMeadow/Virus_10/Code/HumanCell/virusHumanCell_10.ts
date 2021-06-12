namespace L10_Virus {

    export class HumanCell extends Moveable {

        radius: number;
        infected: boolean = false;
      
        constructor(_position: Vector) {
            super(_position);
    
            this.radius = 40;
            this.velocity.random(10, 30);
        }

        draw(): void {
            if (this.infected == true) {
                this.drawinfected();
            } else {
                this.drawhealthy();
            }
        }

        drawinfected(): void {
            //  console.log("drawCHANGEDHumanCell");
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 3, 0, 0, this.radius);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.radius - 10, 0, 2 * Math.PI);
            crc2.closePath();
            gradient.addColorStop(0, "HSLA(360, 21%,70%, 0.5)");
            gradient.addColorStop(0.1, "HSLA(360, 21%,50%, 0.9)");
            gradient.addColorStop(1, "HSLA(360, 21%,40%, 0.5)");

            crc2.fillStyle = gradient;
            crc2.lineWidth = 2;
            crc2.strokeStyle = "HSL(360, 21%,40%)";
            crc2.save();
            crc2.stroke();
            crc2.fill();
            crc2.restore();
            crc2.restore();
        }

        drawhealthy(): void {
            //  console.log("drawHumanCell");
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 3, 0, 0, this.radius);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            gradient.addColorStop(0, "HSLA(40, 100%,100%, 0.9)");

            gradient.addColorStop(0.1, "HSLA(60, 100%,70%, 0.5)");
            gradient.addColorStop(0.2, "HSLA(90, 100%,70%, 0.5)");
            gradient.addColorStop(0.3, "HSLA(120, 100%,70%, 0.5)");
            gradient.addColorStop(0.4, "HSLA(150, 100%,70%, 0.5)");
            gradient.addColorStop(0.5, "HSLA(180, 100%,70%, 0.5)");
            gradient.addColorStop(0.6, "HSLA(210, 100%,70%, 0.6)");
            gradient.addColorStop(0.8, "HSLA(240, 100%,65%, 0.7)");
            gradient.addColorStop(0.9, "HSLA(270, 100%,50%, 0.8)");
            gradient.addColorStop(1, "HSLA(300, 77%,40%, 0.9)");

            crc2.fillStyle = gradient;
            crc2.lineWidth = 2;
            crc2.strokeStyle = "HSL(300, 77%,40%)";
            crc2.save();
            crc2.stroke();
            crc2.fill();
            crc2.restore();
            crc2.restore();
        }

        checkifHit(_posvirus: Vector, _radiusvirus: number): boolean {

            let distX: number = this.position.x - _posvirus.x;
            let distY: number = this.position.y - _posvirus.y;
            let rSum: number = _radiusvirus + this.radius + 10;
            let distance: number = (distX * distX) + (distY * distY);

            if (distance <= rSum * rSum) {
                return true;
            } else {
                return false;
            }

        }
        move(_timeslice: number): void {
            // if (this.infected == true) {
            if (this.infected == true) {
                super.move(_timeslice * 0);
            } else {
                super.move(_timeslice);

             /*   let offset: Vector = this.velocity.copy();
                offset.x *= _timeslice * 5; //multiplizieren des ganzes Vektors mit der zeit
                offset.y *= _timeslice * 0.5;
                this.position.add(offset); //Verschiebung auf Position verschieben
*/
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
}





