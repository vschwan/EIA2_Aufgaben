"use strict";
var footballSimulation;
(function (footballSimulation) {
    class Ball extends footballSimulation.Moveables {
        constructor() {
            //  friction: number = 1;
            super(...arguments);
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
            //  this.speed= idk, maybe account with speed
            super.move(_newBallpos);
            if (this.position.x < 10 || this.position.x > (footballSimulation.canvas.width - 10)) {
                this.draw();
            }
            if (this.position.y < 10 || this.position.y > (footballSimulation.canvas.height - 10)) {
                this.draw();
                let difference = footballSimulation.Vector.getDifference(_newBallpos, this.position);
                // let length: number = Math.abs(Math.sqrt((Math.pow(difference.x, 2) + (Math.pow(difference.y, 2)))));
                // difference.scale(this.speed / length);// controls ball speed
                difference.scale(1 / 30);
                this.position.add(difference);
                /*
                // ball needs to go towards clicked position (but depending on distance of destination and precision of shooting player (as PARAMETERS?))
    
                //
                let difference: Vector = new Vector(_event.offsetX - this.position.x, _event.offsetY - this.position.y);
                difference.scale(1 / 30); // controls ball speed
                this.position.add(difference);
                    
                this.draw(); */
            }
        }
    }
    footballSimulation.Ball = Ball;
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=ball.js.map