"use strict";
var footballSimulation;
(function (footballSimulation) {
    class Moveables {
        // public followBall: Vector;
        constructor(_position, _velocity) {
            if (_velocity)
                this.velocity = _velocity.copy();
            if (_position)
                this.position = _position.copy();
        }
        move(_newBallpos) {
        }
    }
    footballSimulation.Moveables = Moveables;
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=moveables.js.map