"use strict";
var L10_2_FlowerMeadow;
(function (L10_2_FlowerMeadow) {
    class Cloud extends L10_2_FlowerMeadow.Moveable {
        constructor(_position, _size) {
            super(_position);
            this.velocity.add(new L10_2_FlowerMeadow.Vector(20, 0));
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_2_FlowerMeadow.Vector(0, 0);
            if (_size)
                this.size = _size.copy();
            else
                this.size = new L10_2_FlowerMeadow.Vector(0, 0);
        }
        draw() {
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            // console.log("drawCloud", this.position.x);
            let nPArticles = ((Math.random() * 80) + 40);
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = L10_2_FlowerMeadow.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.1)");
            L10_2_FlowerMeadow.crc2.save();
            L10_2_FlowerMeadow.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nPArticles; drawn++) {
                L10_2_FlowerMeadow.crc2.save();
                // Math.random() -0.5 gibt wert zwischen -0,5 und 0,5
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                L10_2_FlowerMeadow.crc2.translate(x, y);
                L10_2_FlowerMeadow.crc2.fill(particle);
                L10_2_FlowerMeadow.crc2.restore();
            }
            L10_2_FlowerMeadow.crc2.restore();
            L10_2_FlowerMeadow.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            let offset = this.velocity.copy();
            offset.x *= _timeslice * 1;
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
    L10_2_FlowerMeadow.Cloud = Cloud;
})(L10_2_FlowerMeadow || (L10_2_FlowerMeadow = {}));
//# sourceMappingURL=cloud_meadow.js.map