"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Flower {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_1_FlowerMeadow.Vector(0, 0);
        }
        drawnectar() {
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.save();
            let nectar = new Path2D();
            L11_1_FlowerMeadow.crc2.fillStyle = "HSL(63, 100%, 79%)";
            L11_1_FlowerMeadow.crc2.strokeStyle = "HSL(63, 100%, 30%)";
            L11_1_FlowerMeadow.crc2.lineWidth = 1;
            L11_1_FlowerMeadow.crc2.translate(this.position.x + 20, this.position.y);
            nectar.rect(0, 0, 10, 30);
            L11_1_FlowerMeadow.crc2.fill(nectar);
            L11_1_FlowerMeadow.crc2.stroke(nectar);
            L11_1_FlowerMeadow.crc2.restore();
        }
        fillnectar(_nectarFillLevel) {
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.save();
            let fillNectar = new Path2D();
            L11_1_FlowerMeadow.crc2.fillStyle = "HSL(63, 100%, 30%)";
            L11_1_FlowerMeadow.crc2.strokeStyle = "HSL(63, 100%, 30%)";
            L11_1_FlowerMeadow.crc2.lineWidth = 1;
            L11_1_FlowerMeadow.crc2.translate(this.position.x + 20, this.position.y);
            L11_1_FlowerMeadow.crc2.rect(0, 0, 10, _nectarFillLevel);
            L11_1_FlowerMeadow.crc2.fill(fillNectar);
            L11_1_FlowerMeadow.crc2.stroke(fillNectar);
            L11_1_FlowerMeadow.crc2.restore();
        }
    }
    L11_1_FlowerMeadow.Flower = Flower;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {}));
//# sourceMappingURL=flowers.js.map