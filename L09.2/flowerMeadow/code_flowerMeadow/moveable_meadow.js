"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    class Moveable {
        constructor(_position) {
            // this.position = _position;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L09_2_FlowerMeadow.Vector(0, 0);
            this.velocity = new L09_2_FlowerMeadow.Vector(0, 0);
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
    L09_2_FlowerMeadow.Moveable = Moveable;
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {}));
//# sourceMappingURL=moveable_meadow.js.map