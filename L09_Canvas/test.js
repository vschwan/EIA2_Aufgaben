"use strict";
var L09_Test;
(function (L09_Test) {
    class Vector {
        constructor(_x, _y) {
            this.y = 0;
            this.x = 0;
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    let v1 = new Vector(2, 2); //v1 = object //mit new Vector wird eine Instanz der Klasse geschaffen= Instanzierung 
    v1.scale(2);
    console.log(v1);
})(L09_Test || (L09_Test = {}));
//# sourceMappingURL=test.js.map