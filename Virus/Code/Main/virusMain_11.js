"use strict";
var L11_Virus;
(function (L11_Virus) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let background;
    function handleLoad(_event) {
        L11_Virus.canvas = document.querySelector("canvas");
        if (!L11_Virus.canvas) {
            return;
        }
        L11_Virus.crc2 = L11_Virus.canvas.getContext("2d");
        resizeCanvas();
        createBackground();
        createCells();
        window.setInterval(animate, 20);
    }
    function resizeCanvas() {
        L11_Virus.canvas.width = window.innerWidth;
        L11_Virus.canvas.setAttribute("width", L11_Virus.canvas.width + "px");
        L11_Virus.canvas.height = window.innerHeight;
        L11_Virus.canvas.setAttribute("height", L11_Virus.canvas.height + "px");
        L11_Virus.crc2.fillRect(0, 0, L11_Virus.canvas.width, L11_Virus.canvas.height);
    }
    function createBackground() {
        //let x: number = 0;
        //let y: number = 0;
        // let position: Vector = new Vector(x, y);
        let pattern = new L11_Virus.Background();
        pattern.drawPattern();
        let bloodpipe = new L11_Virus.Background();
        bloodpipe.drawBloodpipe();
        background = L11_Virus.crc2.getImageData(0, 0, L11_Virus.canvas.width, L11_Virus.canvas.height);
    }
    function createCells() {
        let x;
        let y;
        let nParticles = 100;
        let nCells = 25;
        let nAntibodies = 20;
        //Particles
        for (let i = 0; i < nParticles; i++) {
            x = (Math.random() * L11_Virus.canvas.width);
            y = (Math.random() * L11_Virus.canvas.height);
            let position = new L11_Virus.Vector(x, y);
            let particle = new L11_Virus.Particle(position);
            particle.draw();
            moveables.push(particle);
        }
        //HumanCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L11_Virus.canvas.width);
            y = (100 + Math.random() * L11_Virus.canvas.height / 1.5);
            // console.log(x, y);
            let position = new L11_Virus.Vector(x, y);
            let humancell = new L11_Virus.HumanCell(position);
            humancell.draw();
            moveables.push(humancell);
        }
        //KillerCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L11_Virus.canvas.width);
            y = (100 + Math.random() * L11_Virus.canvas.height / 1.5);
            let position = new L11_Virus.Vector(x, y);
            let killercell = new L11_Virus.KillerCell(position);
            killercell.draw();
            moveables.push(killercell);
        }
        //Antibodies
        for (let i = 0; i < nAntibodies; i++) {
            x = (Math.random() * L11_Virus.canvas.width);
            y = (100 + Math.random() * L11_Virus.canvas.height / 1.5);
            let position = new L11_Virus.Vector(x, y);
            let antibody = new L11_Virus.Antibody(position);
            antibody.draw();
            moveables.push(antibody);
        }
        //coroniii
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L11_Virus.canvas.width);
            y = (100 + Math.random() * L11_Virus.canvas.height / 1.5);
            let position = new L11_Virus.Vector(x, y);
            let corona = new L11_Virus.Corona(position);
            corona.draw();
            moveables.push(corona);
        }
    }
    function animate() {
        L11_Virus.crc2.putImageData(background, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        colliding();
        // handleCollisions();
    }
    function colliding() {
        for (let moveable of moveables) {
            if (moveable instanceof L11_Virus.Corona) {
                let radiusvirus = moveable.radius;
                let positionvirus = moveable.position;
                let cellHit = getcellHit(positionvirus, radiusvirus);
                if (cellHit) {
                    cellHit.infected = true;
                }
            }
        }
    }
    function getcellHit(_positionvirus, _radiusvirus) {
        for (let moveable of moveables) {
            if (moveable instanceof L11_Virus.HumanCell && moveable.checkifHit(_positionvirus, _radiusvirus))
                return moveable;
            // createmorecoroni(_positionvirus);
        }
        return null;
    }
    /* function createmorecoroni(_positionvirus: Vector): void {
         for (let moveable of moveables) {
             if (moveable instanceof HumanCell && moveable.infected == true) {
                 let newcoroni: Corona = new Corona(_positionvirus);
                 
                 moveables.push(newcoroni);
             }
         }
     }*/
    /* function handleCollisions(): void {
         //nicht mit for of, da man genau wissen muss welches moveable gerade geprüft wird
         for (let i: number = 0; i < moveables.length; i++) {//alle moveables durchprüfen
             let a: Moveable = moveables[i];
             for (let j: number = i + 1; j < moveables.length; j++) {//zweite schleife, die gegen alle moveables nach der
                 //in der ersten schleife geprüften moveable kommen
                 let b: Moveable = moveables[j];
 
 
                 if (a instanceof Corona && b instanceof HumanCell) {
                     if (b.isHitBy(a)) {
                         a.hit(); //neue methode --> objekt wurde getroffen und in der jewiligen klasse wird entschieden was dann passiert
                         b.hit();
                     }
                 }
                 if (a instanceof HumanCell && b instanceof Corona) {
                     if (a.isHitBy(b)) {
                         a.hit();
                         b.hit();
                     }
                 }
 
             }
 
         }
     }*/
    /* function trackHumanCell() {
         //iterate trough the coronacells and get the humancell that is nearest to each one
         for (let moveable of moveables) {
             if (moveable instanceof Corona) {
               let posCorona = moveable.position;
               for (let moveable of moveables)
    
                     }
                 }
             }
         }
     }*/
})(L11_Virus || (L11_Virus = {}));
//# sourceMappingURL=virusMain_11.js.map