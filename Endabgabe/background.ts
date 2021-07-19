namespace footballSimulation {

    export class Playfield {
 
        margin: number = 20;

        public draw(): void {
            crc2.save();
            let fieldWidth: number = crc2.canvas.width;
            let fieldHeight: number = crc2.canvas.height;
            crc2.fillStyle = "green";

            crc2.fillRect(0, 0, fieldWidth, fieldHeight);
            crc2.strokeStyle = "white";
            crc2.fillStyle = "White";
            crc2.lineWidth = 2;
            //outer big rect
            crc2.rect(this.margin, this.margin, fieldWidth - this.margin * 2, fieldHeight - this.margin * 2);
            //small rect/middle line
            crc2.rect(this.margin, this.margin, fieldWidth / 2 - this.margin, fieldHeight - this.margin * 2);
            //left gate
            crc2.rect(this.margin, fieldHeight / 3 - this.margin, fieldWidth / 10, fieldHeight / 3 + this.margin);
            //right gate
            crc2.rect(fieldWidth - this.margin, fieldHeight / 3 - this.margin, -(fieldWidth / 10), fieldHeight / 3 + this.margin);
            crc2.stroke();

            //circle in middle
            crc2.beginPath();
            crc2.arc(fieldWidth / 2, fieldHeight / 2, fieldHeight / 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();

            crc2.restore();


        }
    }
}