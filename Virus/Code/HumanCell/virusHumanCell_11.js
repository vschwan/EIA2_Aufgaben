"use strict";
var L11_Virus;
(function (L11_Virus) {
    class HumanCell extends L11_Virus.Moveable {
        constructor(_position) {
            super(_position);
            this.infected = false;
            HumanCell.radius = 40;
            this.velocity = L11_Virus.Vector.getRandom(10, 30);
        }
        checkifHit(_posvirus, _radiusvirus) {
            let distX = this.position.x - _posvirus.x;
            let distY = this.position.y - _posvirus.y;
            let rSum = _radiusvirus + HumanCell.radius + 10;
            let distance = (distX * distX) + (distY * distY);
            if (distance <= rSum * rSum) {
                return true;
            }
            else {
                return false;
            }
        }
        move(_timeslice) {
            // if (this.infected == true) {
            if (this.infected == true) {
                super.move(_timeslice * 0);
            }
            else {
                super.move(_timeslice);
                /*   let offset: Vector = this.velocity.copy();
                   offset.x *= _timeslice * 5; //multiplizieren des ganzes Vektors mit der zeit
                   offset.y *= _timeslice * 0.5;
                   this.position.add(offset); //Verschiebung auf Position verschieben
   */
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
        draw() {
            if (this.infected == true) {
                this.drawinfected();
            }
            else {
                this.drawhealthy();
            }
        }
        drawinfected() {
            //  console.log("drawCHANGEDHumanCell");
            let gradient = L11_Virus.crc2.createRadialGradient(0, 0, 3, 0, 0, HumanCell.radius);
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.arc(0, 0, HumanCell.radius - 10, 0, 2 * Math.PI);
            L11_Virus.crc2.closePath();
            gradient.addColorStop(0, "HSLA(360, 21%,70%, 0.5)");
            gradient.addColorStop(0.1, "HSLA(360, 21%,50%, 0.9)");
            gradient.addColorStop(1, "HSLA(360, 21%,40%, 0.5)");
            L11_Virus.crc2.fillStyle = gradient;
            L11_Virus.crc2.lineWidth = 2;
            L11_Virus.crc2.strokeStyle = "HSL(360, 21%,40%)";
            L11_Virus.crc2.save();
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.fill();
            L11_Virus.crc2.restore();
            L11_Virus.crc2.restore();
        }
        drawhealthy() {
            //  console.log("drawHumanCell");
            let gradient = L11_Virus.crc2.createRadialGradient(0, 0, 3, 0, 0, HumanCell.radius);
            L11_Virus.crc2.save();
            L11_Virus.crc2.translate(this.position.x, this.position.y);
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.arc(0, 0, HumanCell.radius, 0, 2 * Math.PI);
            L11_Virus.crc2.closePath();
            gradient.addColorStop(0, "HSLA(40, 100%,100%, 0.9)");
            gradient.addColorStop(0.1, "HSLA(60, 100%,70%, 0.5)");
            gradient.addColorStop(0.2, "HSLA(90, 100%,70%, 0.5)");
            gradient.addColorStop(0.3, "HSLA(120, 100%,70%, 0.5)");
            gradient.addColorStop(0.4, "HSLA(150, 100%,70%, 0.5)");
            gradient.addColorStop(0.5, "HSLA(180, 100%,70%, 0.5)");
            gradient.addColorStop(0.6, "HSLA(210, 100%,70%, 0.6)");
            gradient.addColorStop(0.8, "HSLA(240, 100%,65%, 0.7)");
            gradient.addColorStop(0.9, "HSLA(270, 100%,50%, 0.8)");
            gradient.addColorStop(1, "HSLA(300, 77%,40%, 0.9)");
            L11_Virus.crc2.fillStyle = gradient;
            L11_Virus.crc2.lineWidth = 2;
            L11_Virus.crc2.strokeStyle = "HSL(300, 77%,40%)";
            L11_Virus.crc2.save();
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.fill();
            L11_Virus.crc2.restore();
            L11_Virus.crc2.restore();
        }
    }
    L11_Virus.HumanCell = HumanCell;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=virusHumanCell_11.js.map