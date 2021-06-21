"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Background {
        constructor(_position, _size) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_1_FlowerMeadow.Vector(0, 0);
            if (_size)
                this.size = _size.copy();
            else
                this.size = new L11_1_FlowerMeadow.Vector(0, 0);
        }
        drawSun() {
            console.log("drawSun", this.position.x);
            let r1 = 30;
            let r2 = 150;
            let gradient = L11_1_FlowerMeadow.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0.1, "HSLA(56, 100%, 90%, 1)");
            gradient.addColorStop(0.5, "HSLA(56, 100%, 52%, 0.5)");
            gradient.addColorStop(1, "HSLA(56, 100%, 52%, 0)");
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_1_FlowerMeadow.crc2.fillStyle = gradient;
            L11_1_FlowerMeadow.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L11_1_FlowerMeadow.crc2.fill();
            L11_1_FlowerMeadow.crc2.restore();
        }
        drawMountain(_min, _max, _colorLow, _colorHigh) {
            L11_1_FlowerMeadow.crc2.restore();
            console.log("drawMountains");
            let stepMin = 90;
            let stepMax = 100;
            let x = 0; //added steps
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_1_FlowerMeadow.crc2.beginPath();
            L11_1_FlowerMeadow.crc2.moveTo(0, 0);
            L11_1_FlowerMeadow.crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                L11_1_FlowerMeadow.crc2.lineTo(x, y);
            } while (x < L11_1_FlowerMeadow.crc2.canvas.width);
            L11_1_FlowerMeadow.crc2.lineTo(x, 0);
            L11_1_FlowerMeadow.crc2.closePath();
            let gradient = L11_1_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.9, _colorHigh);
            L11_1_FlowerMeadow.crc2.shadowBlur = 5;
            L11_1_FlowerMeadow.crc2.shadowOffsetX = 1;
            L11_1_FlowerMeadow.crc2.shadowOffsetY = 1;
            L11_1_FlowerMeadow.crc2.shadowColor = "hsl(61, 92%, 76%)";
            L11_1_FlowerMeadow.crc2.fillStyle = gradient;
            L11_1_FlowerMeadow.crc2.fill();
            L11_1_FlowerMeadow.crc2.restore();
        }
        drawTrees() {
            let ntrees = 300;
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            let tree = new Path2D();
            tree.moveTo(0, 0);
            tree.lineTo(10, -30);
            tree.lineTo(20, 0);
            tree.lineTo(12, 0);
            tree.lineTo(12, 20);
            tree.lineTo(8, 20);
            tree.lineTo(8, 0);
            tree.closePath();
            L11_1_FlowerMeadow.crc2.shadowBlur = 2;
            L11_1_FlowerMeadow.crc2.shadowOffsetX = 1;
            L11_1_FlowerMeadow.crc2.shadowOffsetY = 1;
            L11_1_FlowerMeadow.crc2.shadowColor = "rgb(45, 38, 54)";
            for (let drawn = 0; drawn < ntrees; drawn++) {
                let gradient = L11_1_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, -10);
                L11_1_FlowerMeadow.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                gradient.addColorStop(0, "hsl(0, 17%, 14%)");
                gradient.addColorStop(0.1, "rgb(" + Math.floor(62 - Math.random() * 62) + "," +
                    Math.floor(73 - Math.random() * 15) +
                    "," + Math.floor(38 - Math.random() * 38) + ")");
                L11_1_FlowerMeadow.crc2.fillStyle = gradient;
                L11_1_FlowerMeadow.crc2.translate(x, y);
                L11_1_FlowerMeadow.crc2.fill(tree);
                L11_1_FlowerMeadow.crc2.restore();
            }
            L11_1_FlowerMeadow.crc2.restore();
        }
        drawHills() {
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_1_FlowerMeadow.crc2.beginPath();
            L11_1_FlowerMeadow.crc2.moveTo(0, -30);
            L11_1_FlowerMeadow.crc2.bezierCurveTo(100, -50, 200, -50, L11_1_FlowerMeadow.crc2.canvas.width / 2, 0);
            L11_1_FlowerMeadow.crc2.lineTo(L11_1_FlowerMeadow.crc2.canvas.width, L11_1_FlowerMeadow.crc2.canvas.height * 0.3);
            L11_1_FlowerMeadow.crc2.lineTo(L11_1_FlowerMeadow.crc2.canvas.width, L11_1_FlowerMeadow.crc2.canvas.height / 2);
            L11_1_FlowerMeadow.crc2.lineTo(0, L11_1_FlowerMeadow.crc2.canvas.height / 2);
            let gradient1 = L11_1_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, L11_1_FlowerMeadow.crc2.canvas.height / 2);
            gradient1.addColorStop(0, "HSL(104, 18%, 50%)");
            gradient1.addColorStop(1, "HSL(104, 47%, 67%)");
            L11_1_FlowerMeadow.crc2.fillStyle = gradient1;
            L11_1_FlowerMeadow.crc2.fill();
            L11_1_FlowerMeadow.crc2.stroke();
            L11_1_FlowerMeadow.crc2.closePath();
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L11_1_FlowerMeadow.crc2.beginPath();
            L11_1_FlowerMeadow.crc2.moveTo(L11_1_FlowerMeadow.crc2.canvas.width * 0.0, 100);
            L11_1_FlowerMeadow.crc2.bezierCurveTo(500, -10, 600, -100, L11_1_FlowerMeadow.crc2.canvas.width, 0);
            L11_1_FlowerMeadow.crc2.lineTo(L11_1_FlowerMeadow.crc2.canvas.width, L11_1_FlowerMeadow.crc2.canvas.height / 2);
            L11_1_FlowerMeadow.crc2.lineTo(0, L11_1_FlowerMeadow.crc2.canvas.height / 2);
            let gradient2 = L11_1_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, L11_1_FlowerMeadow.crc2.canvas.height / 2);
            gradient2.addColorStop(0, "HSL(63, 20%, 50%)");
            gradient2.addColorStop(1, "HSL(63, 41%, 72%)");
            L11_1_FlowerMeadow.crc2.fillStyle = gradient2;
            L11_1_FlowerMeadow.crc2.fill();
            L11_1_FlowerMeadow.crc2.stroke();
            L11_1_FlowerMeadow.crc2.closePath();
            L11_1_FlowerMeadow.crc2.restore();
        }
    }
    L11_1_FlowerMeadow.Background = Background;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {}));
//# sourceMappingURL=background_meadow.js.map