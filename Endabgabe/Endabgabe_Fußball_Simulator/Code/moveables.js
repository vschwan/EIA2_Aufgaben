"use strict";
var footballSimulation;
(function (footballSimulation) {
    class Moveables {
        constructor(_position, _velocity) {
            if (_velocity)
                this.velocity = _velocity.copy();
            if (_position)
                this.position = _position.copy();
        }
    }
    footballSimulation.Moveables = Moveables;
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=moveables.js.map