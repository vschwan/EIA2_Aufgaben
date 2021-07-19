
namespace footballSimulation {

    export class Ball extends Moveables {


        //  friction: number = 1;

        radius: number = 8;


        draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.arc(0, 0, 6, 0, 2 * Math.PI);
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.fill();

            crc2.restore();
        }

        public move(_newBallpos: Vector): void {
            //  this.speed= idk, maybe account with speed

            //   //  super.move(_newBallpos);
            //     if (this.position.x < 10 || this.position.x > (canvas.width - 10)) {
            //         this.draw();
            //     }
            //     if (this.position.y < 10 || this.position.y > (canvas.height - 10)) {
            //         this.draw();

            //         let difference: Vector = Vector.getDifference(_newBallpos, this.position);
            //         // let length: number = Math.abs(Math.sqrt((Math.pow(difference.x, 2) + (Math.pow(difference.y, 2)))));
            //         // difference.scale(this.speed / length);// controls ball speed
            //         difference.scale(1 / 20);
            //         this.position.add(difference);

            // if (_newBallpos.x == this.position.x && _newBallpos.y == this.position.y)
            // return;
            // let difference: Vector = Vector.getDifference(_newBallpos, this.position);
            // difference = difference.norm(difference);
            // //  let length: number = Math.abs(Math.sqrt((Math.pow(difference.x, 2) + (Math.pow(difference.y, 2)))));
            // difference.scale(this.speed / 50); //  difference.scale(this.speed); ?
            // this.position.add(difference);

            // if (_newBallpos.x == this.position.x && _newBallpos.y == this.position.y)
            // return;
            // let distance: Vector = Vector.getDifference(this.newBallPos, this.position);
            // distance.scale(0.01);
            // this.position.add(distance);
            // this.draw();
  
        }
    }
}