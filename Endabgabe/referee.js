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
            // referee can move anywhere within the outer lines (except goal area)
            if (this.position.x < 75 || this.position.x > 925)
                this.velocity.x = -this.velocity.x;
            if (this.position.y < 25 || this.position.y > 625)
                this.velocity.y = -this.velocity.y;
            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;
        }
    }
    footballSimulation.Referee = Referee;
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=referee.js.map