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
            // super.move(_newBallpos);
            let difference: Vector = Vector.getDifference(_newBallpos, this.position);
            if (difference.length < 40)
                return;
            difference = difference.norm(difference);
            //  let length: number = Math.abs(Math.sqrt((Math.pow(difference.x, 2) + (Math.pow(difference.y, 2)))));
            difference.scale(this.speed / 50); //  difference.scale(this.speed); ?
            this.position.add(difference);
        }

    }
}
