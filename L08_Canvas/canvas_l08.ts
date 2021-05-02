namespace L08_Canvas {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        //getRenderingContext
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.height = 400;
        canvas.width = 600;
        crc2.fillStyle = "#ff9ac4";
        //fillRect --> Methode
        //fillRect, clearRect, strokeRect geben sofrt sichtbares Ergebnis, andere Formen werden mit Pfad-Objekt definiert
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

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





        // // Create gradient
        // let grd = crc2.createLinearGradient(0, 80, 100, 0);
        // grd.addColorStop(0, "red");
        // grd.addColorStop(1, "white");

        // // Fill with gradient
        // crc2.fillStyle = grd;
        // crc2.fillRect(10, 10, 150, 80);



    }

}