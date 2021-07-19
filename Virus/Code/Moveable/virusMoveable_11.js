"use strict";
var L11_Virus;
(function (L11_Virus) {
    class Moveable {
        constructor(_position) {
            this.hitRadius = 0;
            // this.position = _position;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_Virus.Vector(0, 0);
            this.velocity = new L11_Virus.Vector(0, 0);
        }
        isHitBy(_partner) {
            //let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            let difference = L11_Virus.Vector.getDifference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false;
            return true;
        }
        hit() {
            console.log("Hit", this);
            // this.expendable = true;
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    L11_Virus.Moveable = Moveable;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=virusMoveable_11.js.map