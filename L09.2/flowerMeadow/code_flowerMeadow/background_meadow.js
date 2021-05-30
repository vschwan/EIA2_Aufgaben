"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    class Background {
        constructor(_position, _size) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L09_2_FlowerMeadow.Vector(0, 0);
            if (_size)
                this.size = _size.copy();
            else
                this.size = new L09_2_FlowerMeadow.Vector(0, 0);
        }
        drawSun() {
            console.log("drawSun", this.position.x);
            let r1 = 30;
            let r2 = 150;
            let gradient = L09_2_FlowerMeadow.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0.1, "HSLA(56, 100%, 90%, 1)");
            gradient.addColorStop(0.5, "HSLA(56, 100%, 52%, 0.5)");
            gradient.addColorStop(1, "HSLA(56, 100%, 52%, 0)");
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L09_2_FlowerMeadow.crc2.fillStyle = gradient;
            L09_2_FlowerMeadow.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L09_2_FlowerMeadow.crc2.fill();
            L09_2_FlowerMeadow.crc2.restore();
        }
        drawMountain(_min, _max, _colorLow, _colorHigh) {
            L09_2_FlowerMeadow.crc2.restore();
            console.log("drawMountains");
            let stepMin = 90;
            let stepMax = 100;
            let x = 0; //added steps
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.moveTo(0, 0);
            L09_2_FlowerMeadow.crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                L09_2_FlowerMeadow.crc2.lineTo(x, y);
            } while (x < L09_2_FlowerMeadow.crc2.canvas.width);
            L09_2_FlowerMeadow.crc2.lineTo(x, 0);
            L09_2_FlowerMeadow.crc2.closePath();
            let gradient = L09_2_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.9, _colorHigh);
            L09_2_FlowerMeadow.crc2.shadowBlur = 5;
            L09_2_FlowerMeadow.crc2.shadowOffsetX = 1;
            L09_2_FlowerMeadow.crc2.shadowOffsetY = 1;
            L09_2_FlowerMeadow.crc2.shadowColor = "hsl(61, 92%, 76%)";
            L09_2_FlowerMeadow.crc2.fillStyle = gradient;
            L09_2_FlowerMeadow.crc2.fill();
            L09_2_FlowerMeadow.crc2.restore();
        }
        drawTrees() {
            let ntreetops = 300;
            L09_2_FlowerMeadow.crc2.restore();
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            let treetop = new Path2D();
            treetop.moveTo(0, 0);
            treetop.lineTo(10, -30);
            treetop.lineTo(20, 0);
            treetop.lineTo(12, 0);
            treetop.lineTo(12, 20);
            treetop.lineTo(8, 20);
            treetop.lineTo(8, 0);
            treetop.closePath();
            L09_2_FlowerMeadow.crc2.shadowBlur = 2;
            L09_2_FlowerMeadow.crc2.shadowOffsetX = 1;
            L09_2_FlowerMeadow.crc2.shadowOffsetY = 1;
            L09_2_FlowerMeadow.crc2.shadowColor = "rgb(45, 38, 54)";
            for (let drawn = 0; drawn < ntreetops; drawn++) {
                let gradient = L09_2_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, -10);
                L09_2_FlowerMeadow.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                gradient.addColorStop(0, "hsl(0, 17%, 14%)");
                gradient.addColorStop(0.1, "rgb(" + Math.floor(62 - Math.random() * 62) + "," +
                    Math.floor(73 - Math.random() * 15) +
                    "," + Math.floor(38 - Math.random() * 38) + ")");
                L09_2_FlowerMeadow.crc2.fillStyle = gradient;
                L09_2_FlowerMeadow.crc2.translate(x, y);
                L09_2_FlowerMeadow.crc2.fill(treetop);
                L09_2_FlowerMeadow.crc2.restore();
            }
            L09_2_FlowerMeadow.crc2.restore();
        }
        drawHills() {
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.moveTo(0, -30);
            L09_2_FlowerMeadow.crc2.bezierCurveTo(100, -50, 200, -50, L09_2_FlowerMeadow.crc2.canvas.width / 2, 0);
            L09_2_FlowerMeadow.crc2.lineTo(L09_2_FlowerMeadow.crc2.canvas.width, L09_2_FlowerMeadow.crc2.canvas.height * 0.3);
            L09_2_FlowerMeadow.crc2.lineTo(L09_2_FlowerMeadow.crc2.canvas.width, L09_2_FlowerMeadow.crc2.canvas.height / 2);
            L09_2_FlowerMeadow.crc2.lineTo(0, L09_2_FlowerMeadow.crc2.canvas.height / 2);
            let gradient1 = L09_2_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, L09_2_FlowerMeadow.crc2.canvas.height / 2);
            gradient1.addColorStop(0, "HSL(104, 18%, 50%)");
            gradient1.addColorStop(1, "HSL(104, 47%, 67%)");
            L09_2_FlowerMeadow.crc2.fillStyle = gradient1;
            L09_2_FlowerMeadow.crc2.fill();
            L09_2_FlowerMeadow.crc2.stroke();
            L09_2_FlowerMeadow.crc2.closePath();
            L09_2_FlowerMeadow.crc2.restore();
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L09_2_FlowerMeadow.crc2.beginPath();
            L09_2_FlowerMeadow.crc2.moveTo(L09_2_FlowerMeadow.crc2.canvas.width * 0.0, 100);
            L09_2_FlowerMeadow.crc2.bezierCurveTo(500, -10, 600, -100, L09_2_FlowerMeadow.crc2.canvas.width, 0);
            L09_2_FlowerMeadow.crc2.lineTo(L09_2_FlowerMeadow.crc2.canvas.width, L09_2_FlowerMeadow.crc2.canvas.height / 2);
            L09_2_FlowerMeadow.crc2.lineTo(0, L09_2_FlowerMeadow.crc2.canvas.height / 2);
            let gradient2 = L09_2_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, L09_2_FlowerMeadow.crc2.canvas.height / 2);
            gradient2.addColorStop(0, "HSL(63, 20%, 50%)");
            gradient2.addColorStop(1, "HSL(63, 41%, 72%)");
            L09_2_FlowerMeadow.crc2.fillStyle = gradient2;
            L09_2_FlowerMeadow.crc2.fill();
            L09_2_FlowerMeadow.crc2.stroke();
            L09_2_FlowerMeadow.crc2.closePath();
            L09_2_FlowerMeadow.crc2.restore();
        }
    }
    L09_2_FlowerMeadow.Background = Background;
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {}));
//# sourceMappingURL=background_meadow.js.map