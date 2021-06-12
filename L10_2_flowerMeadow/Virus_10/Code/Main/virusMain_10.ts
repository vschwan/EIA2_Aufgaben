namespace L10_Virus {

    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];
    let background: ImageData;




    function handleLoad(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        resizeCanvas();
        createBackground();
        createCells();

        window.setInterval(animate, 20);

    }


    function resizeCanvas(): void {

        canvas.width = window.innerWidth;
        canvas.setAttribute("width", canvas.width + "px");
        canvas.height = window.innerHeight;
        canvas.setAttribute("height", canvas.height + "px");

        crc2.fillRect(0, 0, canvas.width, canvas.height);

    }

    function createBackground(): void {
        //let x: number = 0;
        //let y: number = 0;
        // let position: Vector = new Vector(x, y);
        let pattern: Background = new Background();
        pattern.drawPattern();

        let bloodpipe: Background = new Background();
        bloodpipe.drawBloodpipe();

        background = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }

    function createCells(): void {
        let x: number;
        let y: number;
        let nParticles: number = 100;
        let nCells: number = 25;
        let nAntibodies: number = 20;


        //Particles
        for (let i: number = 0; i < nParticles; i++) {

            x = (Math.random() * canvas.width);
            y = (Math.random() * canvas.height);

            let position: Vector = new Vector(x, y);
            let particle: Particle = new Particle(position);
            particle.draw();
            moveables.push(particle);
        }

        //HumanCells
        for (let i: number = 0; i < nCells; i++) {
            x = (Math.random() * canvas.width);
            y = (100 + Math.random() * canvas.height / 1.5);
            // console.log(x, y);
            let position: Vector = new Vector(x, y);
            let humancell: HumanCell = new HumanCell(position);
            humancell.draw();
            moveables.push(humancell);
        }

        //KillerCells
        for (let i: number = 0; i < nCells; i++) {
            x = (Math.random() * canvas.width);
            y = (100 + Math.random() * canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let killercell: KillerCell = new KillerCell(position);
            killercell.draw();
            moveables.push(killercell);
        }

        //Antibodies
        for (let i: number = 0; i < nAntibodies; i++) {
            x = (Math.random() * canvas.width);
            y = (100 + Math.random() * canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let antibody: Antibody = new Antibody(position);
            antibody.draw();
            moveables.push(antibody);
        }

        //coroniii
        for (let i: number = 0; i < nCells; i++) {
            x = (Math.random() * canvas.width);
            y = (100 + Math.random() * canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let corona: Corona = new Corona(position);
            corona.draw();
            moveables.push(corona);
        }

    }

    function animate(): void {

        crc2.putImageData(background, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        colliding();

    }


    function colliding(): void {
        for (let moveable of moveables) {
            if (moveable instanceof Corona) {
                let radiusvirus: number = moveable.radius;
                let positionvirus: Vector = moveable.position;

                let cellHit: HumanCell | null = getcellHit(positionvirus, radiusvirus);
                if (cellHit) {
                    cellHit.infected = true;
                }
            }
        }
    }

    function getcellHit(_positionvirus: Vector, _radiusvirus: number): HumanCell | null {
        for (let moveable of moveables) {
            if (moveable instanceof HumanCell && moveable.checkifHit(_positionvirus, _radiusvirus))
                return moveable;
        }
        return null;
    }

}



