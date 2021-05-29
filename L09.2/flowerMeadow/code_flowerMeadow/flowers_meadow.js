"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    class Flower {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L09_2_FlowerMeadow.Vector(0, 0);
        }
        drawRoundFlower() {
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            let stem = new Path2D();
            stem.rect(0, 0, 5, 30);
            L09_2_FlowerMeadow.crc2.fillStyle = "HSL(89, 59%, 66%)";
            L09_2_FlowerMeadow.crc2.fill(stem);
            L09_2_FlowerMeadow.crc2.restore();
            L09_2_FlowerMeadow.crc2.restore();
            //drawPetal
            L09_2_FlowerMeadow.crc2.restore();
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(this.position.x + 2, this.position.y);
            let radiusFlower = 10;
            let roundFlower = new Path2D();
            let gradientfl = L09_2_FlowerMeadow.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusFlower);
            roundFlower.arc(0, 0, radiusFlower, 0, 2 * Math.PI);
            gradientfl.addColorStop(0.5, "HSL(69,100%,50%)");
            gradientfl.addColorStop(1, "HSL(290,69%,53%)");
            L09_2_FlowerMeadow.crc2.fillStyle = gradientfl;
            L09_2_FlowerMeadow.crc2.fill(roundFlower);
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.restore();
            L09_2_FlowerMeadow.crc2.restore();
        }
    }
    L09_2_FlowerMeadow.Flower = Flower;
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {}));
//# sourceMappingURL=flowers_meadow.js.map