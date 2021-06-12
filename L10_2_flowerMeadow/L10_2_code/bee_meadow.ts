namespace L10_2_FlowerMeadow {

    export class Bee extends Moveable {
    

        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(40, 70);
        }

        draw(): void {
          //  console.log("drawBee", this.position.x, this.position.y);

            crc2.restore();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 10, 0);
            gradient.addColorStop(0.1, "hsl(56, 94%, 56%)");
            gradient.addColorStop(0.2, "hsl(56, 94%, 8%)");
            gradient.addColorStop(0.3, "hsl(56, 94%, 56%)");
            gradient.addColorStop(0.4, "hsl(56, 94%, 8%)");
            gradient.addColorStop(0.5, "hsl(56, 94%, 56%)");
            gradient.addColorStop(0.6, "hsl(56, 94%, 8%)");
            gradient.addColorStop(0.7, "hsl(56, 94%, 56%)");
            gradient.addColorStop(0.8, "hsl(56, 94%, 8%)");
            gradient.addColorStop(0.9, "hsl(56, 94%, 56%)");
            gradient.addColorStop(1, "hsl(56, 94%, 8%)");
            crc2.fillStyle = gradient;

           
            crc2.beginPath();
            crc2.ellipse(0, 0, 10, 7, 0, 0, 2 * Math.PI);

            crc2.fill();
       
            crc2.stroke();
        
            crc2.save();
            crc2.restore();
          


        }

        move(_timeslice: number): void {

            super.move(_timeslice);

            
            let offset: Vector = this.velocity.copy();
            offset.x *= _timeslice * 3; 
            offset.y *= _timeslice * 0.2;
            this.position.add(offset); 

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