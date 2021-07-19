"use strict";
var L11_Virus;
(function (L11_Virus) {
    class Particle extends L11_Virus.Moveable {
        constructor(_position) {
            super(_position);
            this.radius = (Math.random() * 15) + 1;
            this.velocity = L11_Virus.Vector.getRandom(40, 70);
        }
        draw() {
            // console.log("draw Particle");
            let gradient = L11_Virus.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            L11_Virus.crc2.closePath();
            gradient.addColorStop(0, "HSLA(290, 90%,90%, 0.6)");
            gradient.addColorStop(0.8, "HSLA(300, 100%,100%, 0.05)");
            L11_Virus.crc2.fillStyle = gradient;
            L11_Virus.crc2.save();
            L11_Virus.crc2.fill();
            L11_Virus.crc2.restore();
            L11_Virus.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            let offset = this.velocity.copy();
            offset.x *= _timeslice * 5;
            offset.y *= _timeslice * 0.5;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L11_Virus.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L11_Virus.crc2.canvas.height;
            if (this.position.x > (L11_Virus.crc2.canvas.width))
                this.position.x -= (L11_Virus.crc2.canvas.width);
            if (this.position.y > L11_Virus.crc2.canvas.height)
                this.position.y -= L11_Virus.crc2.canvas.height;
        }
    }
    L11_Virus.Particle = Particle;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=virusParticle_11.js.map