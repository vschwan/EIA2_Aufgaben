namespace L11_Virus {

    export class Background {
        private static position: Vector;

        public constructor(_position?: Vector) {

            //this.position = _position;
             if (_position)
                Background.position = _position.copy();
            else
                Background.position = new Vector(0, 0);
        }


        public drawBloodpipe(): void {
            // console.log("drawBloodpipe");
            //unten
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(Background.position.x - 10, canvas.height / 1.5); //startpoint (links oben)
            crc2.bezierCurveTo(200, 500, 200, 0, canvas.width, 400); //controlpoint(neigung und höhe von berg1), controlpoint(tal), endpoint(rechtsoben)
            crc2.lineTo(canvas.width, 500); //rechts unten

            crc2.bezierCurveTo(200, 100, 300, 600, -50, canvas.height / 1.2);
            crc2.lineTo(Background.position.x - 10, canvas.height);

            crc2.closePath();

            crc2.lineWidth = 15;
            crc2.strokeStyle = "HSL(350, 90%, 80%)";
            crc2.fillStyle = "HSL(350, 90%, 60%)";

            crc2.stroke();
            crc2.fill();
            crc2.restore();
            crc2.restore();

            //oben
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(Background.position.x - 10, Background.position.y + 50); //startpoint (links oben)
            crc2.bezierCurveTo(250, 100, 50, -400, canvas.width, 50); //controlpoint(neigung und höhe von berg1), controlpoint(tal), endpoint(rechtsoben)
            crc2.lineTo(canvas.width, 180); //rechts unten

            crc2.bezierCurveTo(150, -200, 200, 300, -50, 100);
            crc2.lineTo(Background.position.x - 10, Background.position.y - 550); //links unten

            crc2.closePath();

            crc2.lineWidth = 15;
            crc2.strokeStyle = "HSL(350, 90%, 80%)";
            crc2.fillStyle = "HSL(350, 90%, 60%)";

            crc2.stroke();
            crc2.fill();
            crc2.restore();
            crc2.restore();


        }
        public drawPattern(): void {
            //    console.log("drawpattern");
                crc2.save();
    
                let patternCanvas: HTMLCanvasElement | null = document.createElement("canvas");
                let patternContext: CanvasRenderingContext2D = <CanvasRenderingContext2D>patternCanvas.getContext("2d");
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
                crc2.save();
                crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(patternContext.canvas, "repeat");
                crc2.fillRect(0, 0, canvas.width, canvas.height);
                crc2.restore();
                crc2.restore();
            }
    }
}
