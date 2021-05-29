"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    class Cloud extends L09_2_FlowerMeadow.Moveable {
        constructor(_position, _size) {
            super(_position);
            this.velocity.random(40, 70);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L09_2_FlowerMeadow.Vector(0, 0);
            if (_size)
                this.size = _size.copy();
            else
                this.size = new L09_2_FlowerMeadow.Vector(0, 0);
        }
        draw() {
            console.log("drawCloud", this.position.x);
            let nPArticles = 40;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = L09_2_FlowerMeadow.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.1)");
            L09_2_FlowerMeadow.crc2.save();
            L09_2_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L09_2_FlowerMeadow.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nPArticles; drawn++) {
                L09_2_FlowerMeadow.crc2.save();
                // Math.random() -0.5 gibt wert zwischen -0,5 und 0,5
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                L09_2_FlowerMeadow.crc2.translate(x, y);
                L09_2_FlowerMeadow.crc2.fill(particle);
                L09_2_FlowerMeadow.crc2.restore();
                L09_2_FlowerMeadow.crc2.restore();
            }
        }
        move(_timeslice) {
            super.move(_timeslice);
            let offset = this.velocity.copy();
            offset.x *= _timeslice * 3;
            offset.y *= _timeslice * 0.2;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L09_2_FlowerMeadow.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L09_2_FlowerMeadow.crc2.canvas.height;
            if (this.position.x > (L09_2_FlowerMeadow.crc2.canvas.width))
                this.position.x -= (L09_2_FlowerMeadow.crc2.canvas.width);
            if (this.position.y > L09_2_FlowerMeadow.crc2.canvas.height)
                this.position.y -= L09_2_FlowerMeadow.crc2.canvas.height;
        }
    }
    L09_2_FlowerMeadow.Cloud = Cloud;
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {}));
//# sourceMappingURL=cloud_meadow.js.map