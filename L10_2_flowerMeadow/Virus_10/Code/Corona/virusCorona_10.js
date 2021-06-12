"use strict";
var L10_Virus;
(function (L10_Virus) {
    class Corona extends L10_Virus.Moveable {
        constructor(_position) {
            super(_position);
            this.radius = 10;
            this.velocity.random(20, 30);
        }
        draw() {
            // console.log("draw Corona");
            let spikeslength = 2;
            let spikesnumber = 15;
            let gradient = L10_Virus.crc2.createRadialGradient(0, 0, 1, 0, 0, this.radius);
            // crc2.restore();
            L10_Virus.crc2.save();
            L10_Virus.crc2.translate(this.position.x, this.position.y);
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.moveTo(0, 0 - this.radius);
            for (let i = 0; i < spikesnumber; i++) {
                L10_Virus.crc2.rotate(Math.PI / spikesnumber);
                L10_Virus.crc2.lineTo(0, 0 - (this.radius * spikeslength));
                L10_Virus.crc2.rotate(Math.PI / spikesnumber);
                L10_Virus.crc2.lineTo(0, 0 - this.radius);
            }
            L10_Virus.crc2.closePath();
            gradient.addColorStop(0, "HSLA(130, 77%,100%, 0.5)");
            gradient.addColorStop(0.5, "HSLA(130, 77%,70%, 0.8)");
            gradient.addColorStop(1, "HSLA(130, 90%,40%, 0.8)");
            L10_Virus.crc2.fillStyle = gradient;
            L10_Virus.crc2.lineWidth = 1;
            L10_Virus.crc2.strokeStyle = "HSL(130, 90%,30%)";
            L10_Virus.crc2.fill();
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.restore();
            L10_Virus.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += (L10_Virus.crc2.canvas.width);
            if (this.position.x > (L10_Virus.crc2.canvas.width))
                this.position.x -= (L10_Virus.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L10_Virus.crc2.canvas.height;
            if (this.position.y > L10_Virus.crc2.canvas.height)
                this.position.y -= L10_Virus.crc2.canvas.height;
        }
    }
    L10_Virus.Corona = Corona;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=virusCorona_10.js.map