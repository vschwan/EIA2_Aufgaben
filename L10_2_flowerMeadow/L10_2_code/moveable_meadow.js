"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Moveable {
        constructor(_position) {
            // this.position = _position;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_2_FlowerMeadow.Vector(0, 0);
            this.velocity = new L10_2_FlowerMeadow.Vector(0, 0);
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
    L10_2_FlowerMeadow.Moveable = Moveable;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {}));
//# sourceMappingURL=moveable_meadow.js.map