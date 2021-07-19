"use strict";
var footballSimulation;
(function (footballSimulation) {
    class Ball extends footballSimulation.Moveables {
        constructor() {
            super(...arguments);
            //  friction: number = 1;
            this.radius = 8;
        }
        draw() {
            footballSimulation.crc2.save();
            footballSimulation.crc2.translate(this.position.x, this.position.y);
            footballSimulation.crc2.fillStyle = "#FFFFFF";
            footballSimulation.crc2.strokeStyle = "#000000";
            footballSimulation.crc2.lineWidth = 3;
            footballSimulation.crc2.beginPath();
            footballSimulation.crc2.arc(0, 0, 6, 0, 2 * Math.PI);
            footballSimulation.crc2.lineWidth = 2;
            footballSimulation.crc2.stroke();
            footballSimulation.crc2.fill();
            footballSimulation.crc2.restore();
        }
        move(_newBallpos) {
            // console.log(_newBallpos);
            let difference = footballSimulation.Vector.getDifference(_newBallpos, this.position);
            difference.scale(this.speed / 1000);
            this.position.add(difference);
            //this.draw();
        }
    }
    footballSimulation.Ball = Ball;
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=ball.js.map