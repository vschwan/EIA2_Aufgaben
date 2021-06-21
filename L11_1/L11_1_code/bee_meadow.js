"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Bee extends L11_1_FlowerMeadow.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity.random(40, 100);
        }
        draw() {
            //  console.log("drawBee", this.position.x, this.position.y);
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            let gradient = L11_1_FlowerMeadow.crc2.createLinearGradient(0, 0, 10, 0);
            gradient.addColorStop(0.1, "hsl(56, 94%, 56%)");
            gradient.addColorStop(0.2, "hsl(56, 94%, 8%)");
            gradient.addColorStop(0.3, "hsl(56, 94%, 56%)");
            gradient.addColorStop(0.4, "hsl(56, 94%, 8%)");
            gradient.addColorStop(0.5, "hsl(56, 94%, 56%)");
            gradient.addColorStop(0.6, "hsl(56, 94%, 8%)");
            gradient.addColorStop(0.7, "hsl(56, 94%, 56%)");
            gradient.addColorStop(0.8, "hsl(56, 94%, 8%)");
            gradient.addColorStop(0.9, "hsl(56, 94%, 56%)");
            gradient.addColorStop(1, "hsl(56, 94%, 8%)");
            L11_1_FlowerMeadow.crc2.fillStyle = gradient;
            L11_1_FlowerMeadow.crc2.beginPath();
            L11_1_FlowerMeadow.crc2.ellipse(0, 0, 10, 7, 0, 0, 2 * Math.PI);
            L11_1_FlowerMeadow.crc2.fill();
            L11_1_FlowerMeadow.crc2.stroke();
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            let offset = this.velocity.copy();
            offset.x *= _timeslice * 3;
            offset.y *= _timeslice * 0.2;
            this.position.add(offset);
        }
    }
    L11_1_FlowerMeadow.Bee = Bee;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {}));
//# sourceMappingURL=bee_meadow.js.map