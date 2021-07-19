"use strict";
var L11_Virus;
(function (L11_Virus) {
    class Antibody extends L11_Virus.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity = L11_Virus.Vector.getRandom(2, 5);
            this.rotation = (Math.random() * 360);
        }
        draw() {
            // console.log("drawAntibody");
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.rotate(this.rotation);
            L11_Virus.crc2.moveTo(0, 0);
            L11_Virus.crc2.lineTo(0, 25);
            L11_Virus.crc2.strokeStyle = "HSL(250,20%,40%)";
            L11_Virus.crc2.lineWidth = 2;
            L11_Virus.crc2.moveTo(0, 25);
            L11_Virus.crc2.lineTo(15, 40);
            L11_Virus.crc2.moveTo(0, 25);
            L11_Virus.crc2.lineTo(-15, 40);
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.closePath();
            L11_Virus.crc2.restore();
            L11_Virus.crc2.restore();
        }
        move(_timeslice) {
            // if (this.infected == true) {
            super.move(_timeslice);
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
    L11_Virus.Antibody = Antibody;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=virusAntibody_11.js.map