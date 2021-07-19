namespace footballSimulation {

    export class AssistantReferee extends Moveables {

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);


            crc2.beginPath();
            crc2.fillStyle = "#00ff00";
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);

            crc2.stroke();
            crc2.fill();

            crc2.restore();


        }

        move(_newBallpos: Vector): void {

            if (this.position.x < 20 || this.position.x > canvas.width - 20)
                this.velocity.x = -this.velocity.x;

            this.position.x += this.velocity.x;
            //    this.draw();

        }
    }



}