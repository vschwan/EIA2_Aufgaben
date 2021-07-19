namespace footballSimulation {


    export class Referee extends Moveables {

        public draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.fillStyle = "#ffff00";
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

            crc2.restore();
        }

        public move(_newBallpos: Vector): void {



            // this.speed = 10;

            // let difference: Vector = Vector.getDifference(_newBallpos, this.position);
            // let length: number = Math.abs(Math.sqrt((Math.pow(difference.x, 2) + (Math.pow(difference.y, 2)))));
            // difference.scale(this.speed / length); //  difference.scale(this.speed); ?
            // this.position.add(difference);

            // referee can move anywhere within the outer lines (except goal area)
            
            // if (this.position.x < 75 || this.position.x > 925)
            //     this.velocity.x = -this.velocity.x;
            // if (this.position.y < 25 || this.position.y > 625)
            //     this.velocity.y = -this.velocity.y;

            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;

            // this.draw();
        }
    }
}