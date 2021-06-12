"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Bee extends L10_2_FlowerMeadow.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity.random(40, 100);
        }
        draw() {
            //  console.log("drawBee", this.position.x, this.position.y);
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            let gradient = L10_2_FlowerMeadow.crc2.createLinearGradient(0, 0, 10, 0);
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
            L10_2_FlowerMeadow.crc2.fillStyle = gradient;
            L10_2_FlowerMeadow.crc2.beginPath();
            L10_2_FlowerMeadow.crc2.ellipse(0, 0, 10, 7, 0, 0, 2 * Math.PI);
            L10_2_FlowerMeadow.crc2.fill();
            L10_2_FlowerMeadow.crc2.stroke();
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            let offset = this.velocity.copy();
            offset.x *= _timeslice * 3;
            offset.y *= _timeslice * 0.2;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L10_2_FlowerMeadow.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L10_2_FlowerMeadow.crc2.canvas.height;
            if (this.position.x > (L10_2_FlowerMeadow.crc2.canvas.width))
                this.position.x -= (L10_2_FlowerMeadow.crc2.canvas.width);
            if (this.position.y > L10_2_FlowerMeadow.crc2.canvas.height)
                this.position.y -= L10_2_FlowerMeadow.crc2.canvas.height;
        }
    }
    L10_2_FlowerMeadow.Bee = Bee;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {}));
//# sourceMappingURL=bee_meadow.js.map