"use strict";
var footballSimulation;
(function (footballSimulation) {
    class Playfield {
        constructor() {
            this.margin = 20;
        }
        draw() {
            footballSimulation.crc2.save();
            let fieldWidth = footballSimulation.crc2.canvas.width;
            let fieldHeight = footballSimulation.crc2.canvas.height;
            footballSimulation.crc2.fillStyle = "green";
            footballSimulation.crc2.fillRect(0, 0, fieldWidth, fieldHeight);
            footballSimulation.crc2.strokeStyle = "white";
            footballSimulation.crc2.fillStyle = "White";
            footballSimulation.crc2.lineWidth = 2;
            //outer big rect
            footballSimulation.crc2.rect(this.margin, this.margin, fieldWidth - this.margin * 2, fieldHeight - this.margin * 2);
            //small rect/middle line
            footballSimulation.crc2.rect(this.margin, this.margin, fieldWidth / 2 - this.margin, fieldHeight - this.margin * 2);
            //left gate
            footballSimulation.crc2.rect(this.margin, fieldHeight / 3 - this.margin, fieldWidth / 10, fieldHeight / 3 + this.margin);
            //right gate
            footballSimulation.crc2.rect(fieldWidth - this.margin, fieldHeight / 3 - this.margin, -(fieldWidth / 10), fieldHeight / 3 + this.margin);
            footballSimulation.crc2.stroke();
            //circle in middle
            footballSimulation.crc2.beginPath();
            footballSimulation.crc2.arc(fieldWidth / 2, fieldHeight / 2, fieldHeight / 10, 0, 2 * Math.PI);
            footballSimulation.crc2.closePath();
            footballSimulation.crc2.stroke();
            footballSimulation.crc2.restore();
        }
    }
    footballSimulation.Playfield = Playfield;
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=background.js.map