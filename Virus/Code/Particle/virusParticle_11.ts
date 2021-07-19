namespace L11_Virus {


    export class Particle extends Moveable {
      
       private radius: number = (Math.random() * 15) + 1;
    

       public constructor(_position: Vector) {
            super(_position);

            this.velocity = Vector.getRandom(40, 70);


        }

       public draw(): void {
            // console.log("draw Particle");

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);

            crc2.closePath();

            gradient.addColorStop(0, "HSLA(290, 90%,90%, 0.6)");
            gradient.addColorStop(0.8, "HSLA(300, 100%,100%, 0.05)");

            crc2.fillStyle = gradient;
            crc2.save();


            crc2.fill();
            crc2.restore();
            crc2.restore();

        }

     
       public move(_timeslice: number): void {
            super.move(_timeslice );

            let offset: Vector = this.velocity.copy();
            offset.x *= _timeslice * 5; 
            offset.y *= _timeslice * 0.5;
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
