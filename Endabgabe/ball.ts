
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
            console.log(_newBallpos);

            let difference: Vector = Vector.getDifference(_newBallpos, this.position);
      
            difference.scale(this.speed / 1000);
            this.position.add(difference);
            //this.draw();
        }
    }
}