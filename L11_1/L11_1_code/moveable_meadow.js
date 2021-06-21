"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Moveable {
        constructor(_position) {
            // this.position = _position;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_1_FlowerMeadow.Vector(0, 0);
            this.velocity = new L11_1_FlowerMeadow.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L11_1_FlowerMeadow.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L11_1_FlowerMeadow.crc2.canvas.height;
            if (this.position.x > (L11_1_FlowerMeadow.crc2.canvas.width))
                this.position.x -= (L11_1_FlowerMeadow.crc2.canvas.width);
            if (this.position.y > L11_1_FlowerMeadow.crc2.canvas.height)
                this.position.y -= L11_1_FlowerMeadow.crc2.canvas.height;
        }
    }
    L11_1_FlowerMeadow.Moveable = Moveable;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {}));
//# sourceMappingURL=moveable_meadow.js.map