"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    class Cloud extends L11_1_FlowerMeadow.Moveable {
        constructor(_position, _size) {
            super(_position);
            this.velocity.add(new L11_1_FlowerMeadow.Vector(15, 0));
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_1_FlowerMeadow.Vector(0, 0);
            if (_size)
                this.size = _size.copy();
            else
                this.size = new L11_1_FlowerMeadow.Vector(0, 0);
        }
        draw() {
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            // console.log("drawCloud", this.position.x);
            let nPArticles = ((Math.random() * 80) + 50);
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = L11_1_FlowerMeadow.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.1)");
            L11_1_FlowerMeadow.crc2.save();
            L11_1_FlowerMeadow.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nPArticles; drawn++) {
                L11_1_FlowerMeadow.crc2.save();
                // Math.random() -0.5 gibt wert zwischen -0,5 und 0,5
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                L11_1_FlowerMeadow.crc2.translate(x, y);
                L11_1_FlowerMeadow.crc2.fill(particle);
                L11_1_FlowerMeadow.crc2.restore();
            }
            L11_1_FlowerMeadow.crc2.restore();
            L11_1_FlowerMeadow.crc2.restore();
        }
    }
    L11_1_FlowerMeadow.Cloud = Cloud;
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {}));
//# sourceMappingURL=cloud_meadow.js.map