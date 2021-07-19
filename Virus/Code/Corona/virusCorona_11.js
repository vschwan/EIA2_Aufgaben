"use strict";
var L11_Virus;
(function (L11_Virus) {
    class Corona extends L11_Virus.Moveable {
        constructor(_position) {
            super(_position);
            this.radius = 10;
            this.velocity = L11_Virus.Vector.getRandom(20, 30);
        }
        draw() {
            // console.log("draw Corona");
            let spikeslength = 2;
            let spikesnumber = 15;
            let gradient = L11_Virus.crc2.createRadialGradient(0, 0, 1, 0, 0, this.radius);
            // crc2.restore();
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.moveTo(0, 0 - this.radius);
            for (let i = 0; i < spikesnumber; i++) {
                L11_Virus.crc2.rotate(Math.PI / spikesnumber);
                L11_Virus.crc2.lineTo(0, 0 - (this.radius * spikeslength));
                L11_Virus.crc2.rotate(Math.PI / spikesnumber);
                L11_Virus.crc2.lineTo(0, 0 - this.radius);
            }
            L11_Virus.crc2.closePath();
            gradient.addColorStop(0, "HSLA(130, 77%,100%, 0.5)");
            gradient.addColorStop(0.5, "HSLA(130, 77%,70%, 0.8)");
            gradient.addColorStop(1, "HSLA(130, 90%,40%, 0.8)");
            L11_Virus.crc2.fillStyle = gradient;
            L11_Virus.crc2.lineWidth = 1;
            L11_Virus.crc2.strokeStyle = "HSL(130, 90%,30%)";
            L11_Virus.crc2.fill();
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.restore();
            L11_Virus.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += (L11_Virus.crc2.canvas.width);
            if (this.position.x > (L11_Virus.crc2.canvas.width))
                this.position.x -= (L11_Virus.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L11_Virus.crc2.canvas.height;
            if (this.position.y > L11_Virus.crc2.canvas.height)
                this.position.y -= L11_Virus.crc2.canvas.height;
        }
    }
    L11_Virus.Corona = Corona;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=virusCorona_11.js.map