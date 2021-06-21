namespace test11 {

    window.addEventListener("load", handleLoad);


    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;


    function handleLoad(): void {

        move();

    }


    function move(): void {
        let i: number = 0;
        if (i == 0) {
            i = 1;
            let progress: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            progress.id = "progress";
            document.body.appendChild(progress);
            let bar: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            bar.id = "bar";
            progress.appendChild(bar);

            let width: number = 10;
            let id: number = setInterval(frame, 10);
            function frame(): void {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    bar.style.width = width + "%";
                    bar.innerHTML = width + "%";
                }
            }
        }
    }

}

