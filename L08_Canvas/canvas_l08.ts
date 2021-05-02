namespace L08_Canvas {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        //getRenderingContext
        //CanvasRenderingContext arbeitet im Immediate Mode != retained Mode
        //nachfolgende Zeichenkommandos können die Wirkung vorangegangener überschreiben: Das Bild muss von hinten aufgebaut werden
        //--> Maleralgorithmus
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.height = 400;
        canvas.width = 600;
        crc2.fillStyle = "#ff9ac4";
        //fillRect --> Methode
        //fillRect, clearRect, strokeRect geben sofrt sichtbares Ergebnis, andere Formen werden mit Pfad-Objekt definiert
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //Bei Verwendung der Pfad-Methoden direkt auf dem RenderingContext, 
        //wird ein globales Pfadobjekt manipuliert. Mit beginPath() wird der darin enthaltene alte Pfad gelöscht 
        //und ein neuer angelegt. --> später nciht mehr wiederverwendbar --> new Path2D(): erzeugt individuelle Pfadobjekte

        //kreiiis 
        crc2.beginPath();
        crc2.fillStyle = "#c383ac";
        crc2.strokeStyle = "#f0eaac";
        crc2.arc(100, 100, 90, 0, 1.5 * Math.PI);
        crc2.fill();

        crc2.closePath();
        crc2.stroke();

        //ellipse
        crc2.beginPath();
        crc2.fillStyle = "#c38cac";
        crc2.ellipse(300, 200, 50, 99, Math.PI / 3, 2, 2 * Math.PI);
        crc2.fill();

        crc2.closePath();
        crc2.stroke();

        //dreieck
        crc2.beginPath();
        crc2.fillStyle = "#668cac";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(20, 80);
        crc2.lineTo(20, 300);
        crc2.lineTo(200, 190);
        crc2.fill();

        crc2.closePath();
        crc2.stroke();


        let gradient: CanvasGradient = crc2.createLinearGradient(350, 100, 400, 100);
        crc2.font = "20px Impact";
        gradient.addColorStop(0, "#c06d7a");
        gradient.addColorStop(0.5, "#636a9d");
        gradient.addColorStop(1, "#add49d");
        crc2.fillStyle = gradient;
        crc2.fillText("Ich bin eine Biene lol", 300, 100);
        crc2.strokeText("hallo", 100, 300);

        let path: Path2D = new Path2D();
        path.arc(500, 300, 50, 0, 2 * Math.PI);
        crc2.stroke(path);



/*
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "#fec";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height); */



        // (0.5,0.5) = ersten sichtbaren Pixel; (canvas.width-0.5, canvas.height -0.5)
        // Treppen-Efekt: Aliasing --> Farbverteilung: Anti-Aliasing


        //zu transform
        //es exisitiert nur EINE Transformationsmatrix
        //die wird jedes mal verändert wenn translate, rotate, scale usw aufgerufen werden
        //immer wiederkehrende Trransformationsaufrufe kumulieren(häufen sich an) in der Matrix

        //Lösung:
        //resetTransform(); bringt Gesamtmatrix auf Ursprung
        //save(); aktuellen Zustand der MAtrix speichern (auch syles usw) und später mit 
        //restore() herstellen (fall mehrmals gesaved wurde, 
        //werden bei restore die Zustände (state) in umgekehrter Reihenfolge hergestellt) (wie bei einem Ablagestapel)
        //get Transform() ; den aktuellen Zusatnd der Matrix speichern und einer Variable vom Typ DOMMatrix zuweisen
        //mit setTransform(...) und der Variable als Paramater wird der Zustand wiederhergestellt







    }

}