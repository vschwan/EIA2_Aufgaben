"use strict";
var footballSimulation;
(function (footballSimulation) {
    class AssistantReferee extends footballSimulation.Moveables {
        draw() {
            footballSimulation.crc2.save();
            footballSimulation.crc2.translate(this.position.x, this.position.y);
            footballSimulation.crc2.beginPath();
            footballSimulation.crc2.fillStyle = "#00ff00";
            footballSimulation.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            footballSimulation.crc2.stroke();
            footballSimulation.crc2.fill();
            footballSimulation.crc2.restore();
        }
        move(_newBallpos) {
            if (this.position.x < 20 || this.position.x > footballSimulation.canvas.width - 20)
                this.velocity.x = -this.velocity.x;
            this.position.x += this.velocity.x;
            //    this.draw();
        }
    }
    footballSimulation.AssistantReferee = AssistantReferee;
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=assistantReferee.js.map