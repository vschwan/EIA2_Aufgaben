"use strict";
var footballSimulation;
(function (footballSimulation) {
    class Referee extends footballSimulation.Moveables {
        draw() {
            footballSimulation.crc2.save();
            footballSimulation.crc2.translate(this.position.x, this.position.y);
            footballSimulation.crc2.beginPath();
            footballSimulation.crc2.fillStyle = "#ffff00";
            footballSimulation.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            footballSimulation.crc2.stroke();
            footballSimulation.crc2.fill();
            footballSimulation.crc2.restore();
        }
        move(_newBallpos) {
            // super.move(_newBallpos);
            let difference = footballSimulation.Vector.getDifference(_newBallpos, this.position);
            if (difference.length < 40)
                return;
            difference = difference.norm(difference);
            //  let length: number = Math.abs(Math.sqrt((Math.pow(difference.x, 2) + (Math.pow(difference.y, 2)))));
            difference.scale(this.speed / 50); //  difference.scale(this.speed); ?
            this.position.add(difference);
        }
    }
    footballSimulation.Referee = Referee;
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=referee.js.map