"use strict";
var L11_Virus;
(function (L11_Virus) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            // Differenz zweier Vektoren wird berechnet und liefert den resultierenden Vektor
            /* let vector: Vector = new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
             return vector*/
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        static getRandom(_min, _max) {
            let vector = new Vector(0, 0); //neuer Vektor um ihm die folgenden Komponenten zu geben (set, scale)
            let length = _min + Math.random() * (_max - _min);
            let direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        get length() {
            return Math.hypot(this.x, this.y);
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
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    L11_Virus.Vector = Vector;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=virusVector_11.js.map