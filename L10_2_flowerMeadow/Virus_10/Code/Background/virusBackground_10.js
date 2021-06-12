"use strict";
var L10_Virus;
(function (L10_Virus) {
    class Background {
        constructor(_position) {
            //this.position = _position;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Virus.Vector(0, 0);
        }
        drawBloodpipe() {
            // console.log("drawBloodpipe");
            //unten
            L10_Virus.crc2.save();
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.moveTo(this.position.x - 10, L10_Virus.canvas.height / 1.5); //startpoint (links oben)
            L10_Virus.crc2.bezierCurveTo(200, 500, 200, 0, L10_Virus.canvas.width, 400); //controlpoint(neigung und höhe von berg1), controlpoint(tal), endpoint(rechtsoben)
            L10_Virus.crc2.lineTo(L10_Virus.canvas.width, 500); //rechts unten
            L10_Virus.crc2.bezierCurveTo(200, 100, 300, 600, -50, L10_Virus.canvas.height / 1.2);
            L10_Virus.crc2.lineTo(this.position.x - 10, L10_Virus.canvas.height);
            L10_Virus.crc2.closePath();
            L10_Virus.crc2.lineWidth = 15;
            L10_Virus.crc2.strokeStyle = "HSL(350, 90%, 80%)";
            L10_Virus.crc2.fillStyle = "HSL(350, 90%, 60%)";
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.fill();
            L10_Virus.crc2.restore();
            L10_Virus.crc2.restore();
            //oben
            L10_Virus.crc2.save();
            L10_Virus.crc2.beginPath();
            L10_Virus.crc2.moveTo(this.position.x - 10, this.position.y + 50); //startpoint (links oben)
            L10_Virus.crc2.bezierCurveTo(250, 100, 50, -400, L10_Virus.canvas.width, 50); //controlpoint(neigung und höhe von berg1), controlpoint(tal), endpoint(rechtsoben)
            L10_Virus.crc2.lineTo(L10_Virus.canvas.width, 180); //rechts unten
            L10_Virus.crc2.bezierCurveTo(150, -200, 200, 300, -50, 100);
            L10_Virus.crc2.lineTo(this.position.x - 10, this.position.y - 550); //links unten
            L10_Virus.crc2.closePath();
            L10_Virus.crc2.lineWidth = 15;
            L10_Virus.crc2.strokeStyle = "HSL(350, 90%, 80%)";
            L10_Virus.crc2.fillStyle = "HSL(350, 90%, 60%)";
            L10_Virus.crc2.stroke();
            L10_Virus.crc2.fill();
            L10_Virus.crc2.restore();
            L10_Virus.crc2.restore();
        }
        drawPattern() {
            //    console.log("drawpattern");
            L10_Virus.crc2.save();
            let patternCanvas = document.createElement("canvas");
            let patternContext = patternCanvas.getContext("2d");
            // Give the pattern a width and height of 30
            patternCanvas.width = 30;
            patternCanvas.height = 30;
            // Give the pattern a background color and draw it
            patternContext.lineWidth = 2;
            patternContext.strokeStyle = "HSL(2,90%,85%)";
            patternContext.fillStyle = "HSL(2,90%,90%)";
            patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
            patternContext.moveTo(0, 10);
            patternContext.lineTo(5, 2);
            patternContext.lineTo(15, 5);
            patternContext.lineTo(25, 15);
            patternContext.lineTo(30, 25);
            patternContext.lineTo(25, 30);
            patternContext.lineTo(15, 28);
            patternContext.lineTo(5, 20);
            patternContext.lineTo(0, 10);
            patternContext.stroke();
            // fill primary canvas with pattern
            L10_Virus.crc2.save();
            L10_Virus.crc2.fillStyle = L10_Virus.crc2.createPattern(patternContext.canvas, "repeat");
            L10_Virus.crc2.fillRect(0, 0, L10_Virus.canvas.width, L10_Virus.canvas.height);
            L10_Virus.crc2.restore();
            L10_Virus.crc2.restore();
        }
    }
    L10_Virus.Background = Background;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=virusBackground_10.js.map