"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class DropFlower extends L11_1_FlowerMeadow.Flower {
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
            let dropFlower = new Path2D();
            let gradientfl = L11_1_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, -10);
            dropFlower.moveTo(0, 0);
            dropFlower.bezierCurveTo(0, 0, -30, -5, 0, -25);
            dropFlower.bezierCurveTo(0, -25, 30, 5, 0, 0);
            dropFlower.closePath();
            gradientfl.addColorStop(0.1, "hsl(188, 100%, 30%)");
            gradientfl.addColorStop(0.5, "hsl(188, 61%, 57%)");
            gradientfl.addColorStop(1, "hsl(188, 75%, 70%)");
            L11_1_FlowerMeadow.crc2.shadowBlur = 2;
            L11_1_FlowerMeadow.crc2.shadowOffsetX = 1;
            L11_1_FlowerMeadow.crc2.shadowOffsetY = 2;
            L11_1_FlowerMeadow.crc2.shadowColor = "hsl(141, 20%, 30%)";
            L11_1_FlowerMeadow.crc2.fillStyle = gradientfl;
            L11_1_FlowerMeadow.crc2.fill(dropFlower);
            //crc2.stroke();
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.restore();
        }
    }
    L11_1_FlowerMeadow.DropFlower = DropFlower;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {}));
//# sourceMappingURL=dropFlower.js.map