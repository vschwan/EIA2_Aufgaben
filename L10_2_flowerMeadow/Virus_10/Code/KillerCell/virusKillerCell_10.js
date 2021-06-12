"use strict";
var L10_Virus;
(function (L10_Virus) {
    class KillerCell extends L10_Virus.Moveable {
        constructor(_position) {
            super(_position);
            this.rotation = (Math.random() * 90);
            this.velocity.random(5, 10);
        }
        draw() {
            //console.log("KillerCells");
            let radius = 20;
            let gradient = L10_Virus.crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
            L10_Virus.crc2.save();
            L10_Virus.crc2.translate(this.position.x, this.position.y);
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.rotate(this.rotation);
            L10_Virus.crc2.moveTo(0, 0);
            // particle.arc(0, 0, radiusParticle, -Math.PI / 3, Math.PI / 48, true); //anticlockwise
            L10_Virus.crc2.arc(0, 0, radius, 0, Math.PI * 1.6);
            L10_Virus.crc2.lineTo(0, 0);
            L10_Virus.crc2.closePath();
            gradient.addColorStop(0, "HSLA(43, 87%,60%,1)");
            gradient.addColorStop(1, "HSLA(43, 87%,80%,0.5)");
            L10_Virus.crc2.fillStyle = gradient;
            L10_Virus.crc2.lineWidth = 2;
            L10_Virus.crc2.strokeStyle = "HSL(43, 87%, 60%)";
            L10_Virus.crc2.save();
            // crc2.translate(_position.x, _position.y);
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.fill();
            L10_Virus.crc2.restore();
            L10_Virus.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += (L10_Virus.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L10_Virus.crc2.canvas.height;
            if (this.position.x > (L10_Virus.crc2.canvas.width))
                this.position.x -= (L10_Virus.crc2.canvas.width);
            if (this.position.y > L10_Virus.crc2.canvas.height)
                this.position.y -= L10_Virus.crc2.canvas.height;
        }
    }
    L10_Virus.KillerCell = KillerCell;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=virusKillerCell_10.js.map