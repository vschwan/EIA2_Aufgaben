"use strict";
var L10_Virus;
(function (L10_Virus) {
    class Moveable {
        constructor(_position) {
            // this.position = _position;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Virus.Vector(0, 0);
            this.velocity = new L10_Virus.Vector(0, 0);
        }
        draw() {
            //console.log("drawmoveable");
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    L10_Virus.Moveable = Moveable;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=virusMoveable_10.js.map