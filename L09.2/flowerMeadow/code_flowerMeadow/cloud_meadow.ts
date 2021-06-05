namespace L09_2_FlowerMeadow {

    export class Cloud extends Moveable {
        size: Vector;

        constructor(_position: Vector, _size?: Vector) {
            super(_position);
         
            this.velocity.random(40, 70);

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);


            if (_size)
                this.size = _size.copy();
            else
                this.size = new Vector(0, 0);
        }



        draw(): void {
            crc2.restore();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            console.log("drawCloud", this.position.x);

            let nPArticles: number = 40;
            let radiusParticle: number = 20;
            let particle: Path2D = new Path2D();

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.1)");

            crc2.save();
          

            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nPArticles; drawn++) {

                crc2.save();
                // Math.random() -0.5 gibt wert zwischen -0,5 und 0,5
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = -(Math.random() * this.size.y);

                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            
            }
            crc2.restore();

        }


        move(_timeslice: number): void {

            super.move(_timeslice);


            let offset: Vector = this.velocity.copy();
            offset.x *= _timeslice * 1;
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



