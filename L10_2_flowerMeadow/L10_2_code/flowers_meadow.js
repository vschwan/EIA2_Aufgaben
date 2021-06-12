"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Flower {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_2_FlowerMeadow.Vector(0, 0);
        }
        drawRoundFlower() {
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            let stem = new Path2D();
            stem.rect(0, 0, 5, 30);
            L10_2_FlowerMeadow.crc2.fillStyle = "HSL(89, 59%, 66%)";
            L10_2_FlowerMeadow.crc2.shadowBlur = 2;
            L10_2_FlowerMeadow.crc2.shadowOffsetX = 0;
            L10_2_FlowerMeadow.crc2.shadowOffsetY = 2;
            L10_2_FlowerMeadow.crc2.shadowColor = "hsl(141, 10%, 40%)";
            L10_2_FlowerMeadow.crc2.fill(stem);
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.restore();
            //drawPetal
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x + 2, this.position.y);
            let radiusFlower = 10;
            let roundFlower = new Path2D();
            let gradientfl = L10_2_FlowerMeadow.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusFlower);
            roundFlower.arc(0, 0, radiusFlower, 0, 2 * Math.PI);
            gradientfl.addColorStop(0.5, "HSL(69,100%,50%)");
            gradientfl.addColorStop(1, "HSL(290,69%,53%)");
            L10_2_FlowerMeadow.crc2.shadowBlur = 2;
            L10_2_FlowerMeadow.crc2.shadowOffsetX = 1;
            L10_2_FlowerMeadow.crc2.shadowOffsetY = 2;
            L10_2_FlowerMeadow.crc2.shadowColor = "hsl(141, 20%, 30%)";
            L10_2_FlowerMeadow.crc2.fillStyle = gradientfl;
            L10_2_FlowerMeadow.crc2.fill(roundFlower);
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.restore();
        }
        drawOvalFlower() {
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            let stem = new Path2D();
            stem.rect(0, 0, 5, 30);
            L10_2_FlowerMeadow.crc2.fillStyle = "HSL(89, 59%, 66%)";
            L10_2_FlowerMeadow.crc2.shadowBlur = 2;
            L10_2_FlowerMeadow.crc2.shadowOffsetX = 0;
            L10_2_FlowerMeadow.crc2.shadowOffsetY = 2;
            L10_2_FlowerMeadow.crc2.shadowColor = "hsl(141, 10%, 40%)";
            L10_2_FlowerMeadow.crc2.fill(stem);
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.restore();
            //drawPetal
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x + 2, this.position.y);
            let ovalFlower = new Path2D();
            let gradientfl = L10_2_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, 10);
            ovalFlower.ellipse(0, 0, 8, 15, 0, 0, Math.PI * 2);
            gradientfl.addColorStop(0.1, "hsl(319, 75%, 70%)");
            gradientfl.addColorStop(0.6, "hsl(319, 61%, 57%)");
            gradientfl.addColorStop(1, "hsl(319, 100%, 30%)");
            L10_2_FlowerMeadow.crc2.shadowBlur = 2;
            L10_2_FlowerMeadow.crc2.shadowOffsetX = 1;
            L10_2_FlowerMeadow.crc2.shadowOffsetY = 2;
            L10_2_FlowerMeadow.crc2.shadowColor = "hsl(141, 20%, 30%)";
            L10_2_FlowerMeadow.crc2.fillStyle = gradientfl;
            L10_2_FlowerMeadow.crc2.fill(ovalFlower);
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.restore();
        }
        drawDropFlower() {
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            let stem = new Path2D();
            stem.rect(0, 0, 5, 30);
            L10_2_FlowerMeadow.crc2.fillStyle = "HSL(89, 59%, 66%)";
            L10_2_FlowerMeadow.crc2.shadowBlur = 2;
            L10_2_FlowerMeadow.crc2.shadowOffsetX = 0;
            L10_2_FlowerMeadow.crc2.shadowOffsetY = 2;
            L10_2_FlowerMeadow.crc2.shadowColor = "hsl(141, 10%, 40%)";
            L10_2_FlowerMeadow.crc2.fill(stem);
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.restore();
            //drawPetal
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x + 2, this.position.y);
            let heartFlower = new Path2D();
            let gradientfl = L10_2_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, -10);
            heartFlower.moveTo(0, 0);
            heartFlower.bezierCurveTo(0, 0, -30, -5, 0, -25);
            heartFlower.bezierCurveTo(0, -25, 30, 5, 0, 0);
            heartFlower.closePath();
            gradientfl.addColorStop(0.1, "hsl(188, 100%, 30%)");
            gradientfl.addColorStop(0.5, "hsl(188, 61%, 57%)");
            gradientfl.addColorStop(1, "hsl(188, 75%, 70%)");
            L10_2_FlowerMeadow.crc2.shadowBlur = 2;
            L10_2_FlowerMeadow.crc2.shadowOffsetX = 1;
            L10_2_FlowerMeadow.crc2.shadowOffsetY = 2;
            L10_2_FlowerMeadow.crc2.shadowColor = "hsl(141, 20%, 30%)";
            L10_2_FlowerMeadow.crc2.fillStyle = gradientfl;
            L10_2_FlowerMeadow.crc2.fill(heartFlower);
            //crc2.stroke();
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.restore();
        }
    }
    L10_2_FlowerMeadow.Flower = Flower;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {}));
//# sourceMappingURL=flowers_meadow.js.map