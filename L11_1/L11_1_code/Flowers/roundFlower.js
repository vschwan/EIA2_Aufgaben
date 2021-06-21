"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class RoundFlower extends L11_1_FlowerMeadow.Flower {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            let stem = new Path2D();
            stem.rect(0, 0, 5, 30);
            L11_1_FlowerMeadow.crc2.fillStyle = "HSL(89, 59%, 66%)";
            L11_1_FlowerMeadow.crc2.shadowBlur = 2;
            L11_1_FlowerMeadow.crc2.shadowOffsetX = 0;
            L11_1_FlowerMeadow.crc2.shadowOffsetY = 2;
            L11_1_FlowerMeadow.crc2.shadowColor = "hsl(141, 10%, 40%)";
            L11_1_FlowerMeadow.crc2.fill(stem);
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.restore();
            //drawPetal
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x + 2, this.position.y);
            let radiusFlower = 10;
            let roundFlower = new Path2D();
            let gradientfl = L11_1_FlowerMeadow.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusFlower);
            roundFlower.arc(0, 0, radiusFlower, 0, 2 * Math.PI);
            gradientfl.addColorStop(0.5, "HSL(69,100%,50%)");
            gradientfl.addColorStop(1, "HSL(290,69%,53%)");
            L11_1_FlowerMeadow.crc2.shadowBlur = 2;
            L11_1_FlowerMeadow.crc2.shadowOffsetX = 1;
            L11_1_FlowerMeadow.crc2.shadowOffsetY = 2;
            L11_1_FlowerMeadow.crc2.shadowColor = "hsl(141, 20%, 30%)";
            L11_1_FlowerMeadow.crc2.fillStyle = gradientfl;
            L11_1_FlowerMeadow.crc2.fill(roundFlower);
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.restore();
        }
    }
    L11_1_FlowerMeadow.RoundFlower = RoundFlower;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {}));
//# sourceMappingURL=roundFlower.js.map