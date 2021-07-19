"use strict";
var L11_Virus;
(function (L11_Virus) {
    class Background {
        constructor(_position) {
            //this.position = _position;
            if (_position)
                Background.position = _position.copy();
            else
                Background.position = new L11_Virus.Vector(0, 0);
        }
        drawBloodpipe() {
            // console.log("drawBloodpipe");
            //unten
            L11_Virus.crc2.save();
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.moveTo(Background.position.x - 10, L11_Virus.canvas.height / 1.5); //startpoint (links oben)
            L11_Virus.crc2.bezierCurveTo(200, 500, 200, 0, L11_Virus.canvas.width, 400); //controlpoint(neigung und höhe von berg1), controlpoint(tal), endpoint(rechtsoben)
            L11_Virus.crc2.lineTo(L11_Virus.canvas.width, 500); //rechts unten
            L11_Virus.crc2.bezierCurveTo(200, 100, 300, 600, -50, L11_Virus.canvas.height / 1.2);
            L11_Virus.crc2.lineTo(Background.position.x - 10, L11_Virus.canvas.height);
            L11_Virus.crc2.closePath();
            L11_Virus.crc2.lineWidth = 15;
            L11_Virus.crc2.strokeStyle = "HSL(350, 90%, 80%)";
            L11_Virus.crc2.fillStyle = "HSL(350, 90%, 60%)";
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.fill();
            L11_Virus.crc2.restore();
            L11_Virus.crc2.restore();
            //oben
            L11_Virus.crc2.save();
            L11_Virus.crc2.beginPath();
            L11_Virus.crc2.moveTo(Background.position.x - 10, Background.position.y + 50); //startpoint (links oben)
            L11_Virus.crc2.bezierCurveTo(250, 100, 50, -400, L11_Virus.canvas.width, 50); //controlpoint(neigung und höhe von berg1), controlpoint(tal), endpoint(rechtsoben)
            L11_Virus.crc2.lineTo(L11_Virus.canvas.width, 180); //rechts unten
            L11_Virus.crc2.bezierCurveTo(150, -200, 200, 300, -50, 100);
            L11_Virus.crc2.lineTo(Background.position.x - 10, Background.position.y - 550); //links unten
            L11_Virus.crc2.closePath();
            L11_Virus.crc2.lineWidth = 15;
            L11_Virus.crc2.strokeStyle = "HSL(350, 90%, 80%)";
            L11_Virus.crc2.fillStyle = "HSL(350, 90%, 60%)";
            L11_Virus.crc2.stroke();
            L11_Virus.crc2.fill();
            L11_Virus.crc2.restore();
            L11_Virus.crc2.restore();
        }
        drawPattern() {
            //    console.log("drawpattern");
            L11_Virus.crc2.save();
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
            L11_Virus.crc2.save();
            L11_Virus.crc2.fillStyle = L11_Virus.crc2.createPattern(patternContext.canvas, "repeat");
            L11_Virus.crc2.fillRect(0, 0, L11_Virus.canvas.width, L11_Virus.canvas.height);
            L11_Virus.crc2.restore();
            L11_Virus.crc2.restore();
        }
    }
    L11_Virus.Background = Background;
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=virusBackground_11.js.map