"use strict";
var L10_Virus;
(function (L10_Virus) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let background;
    function handleLoad(_event) {
        L10_Virus.canvas = document.querySelector("canvas");
        if (!L10_Virus.canvas) {
            return;
        }
        L10_Virus.crc2 = L10_Virus.canvas.getContext("2d");
        resizeCanvas();
        createBackground();
        createCells();
        window.setInterval(animate, 20);
    }
    function resizeCanvas() {
        L10_Virus.canvas.width = window.innerWidth;
        L10_Virus.canvas.setAttribute("width", L10_Virus.canvas.width + "px");
        L10_Virus.canvas.height = window.innerHeight;
        L10_Virus.canvas.setAttribute("height", L10_Virus.canvas.height + "px");
        L10_Virus.crc2.fillRect(0, 0, L10_Virus.canvas.width, L10_Virus.canvas.height);
    }
    function createBackground() {
        //let x: number = 0;
        //let y: number = 0;
        // let position: Vector = new Vector(x, y);
        let pattern = new L10_Virus.Background();
        pattern.drawPattern();
        let bloodpipe = new L10_Virus.Background();
        bloodpipe.drawBloodpipe();
        background = L10_Virus.crc2.getImageData(0, 0, L10_Virus.canvas.width, L10_Virus.canvas.height);
    }
    function createCells() {
        let x;
        let y;
        let nParticles = 100;
        let nCells = 25;
        let nAntibodies = 20;
        //Particles
        for (let i = 0; i < nParticles; i++) {
            x = (Math.random() * L10_Virus.canvas.width);
            y = (Math.random() * L10_Virus.canvas.height);
            let position = new L10_Virus.Vector(x, y);
            let particle = new L10_Virus.Particle(position);
            particle.draw();
            moveables.push(particle);
        }
        //HumanCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L10_Virus.canvas.width);
            y = (100 + Math.random() * L10_Virus.canvas.height / 1.5);
            // console.log(x, y);
            let position = new L10_Virus.Vector(x, y);
            let humancell = new L10_Virus.HumanCell(position);
            humancell.draw();
            moveables.push(humancell);
        }
        //KillerCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L10_Virus.canvas.width);
            y = (100 + Math.random() * L10_Virus.canvas.height / 1.5);
            let position = new L10_Virus.Vector(x, y);
            let killercell = new L10_Virus.KillerCell(position);
            killercell.draw();
            moveables.push(killercell);
        }
        //Antibodies
        for (let i = 0; i < nAntibodies; i++) {
            x = (Math.random() * L10_Virus.canvas.width);
            y = (100 + Math.random() * L10_Virus.canvas.height / 1.5);
            let position = new L10_Virus.Vector(x, y);
            let antibody = new L10_Virus.Antibody(position);
            antibody.draw();
            moveables.push(antibody);
        }
        //coroniii
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L10_Virus.canvas.width);
            y = (100 + Math.random() * L10_Virus.canvas.height / 1.5);
            let position = new L10_Virus.Vector(x, y);
            let corona = new L10_Virus.Corona(position);
            corona.draw();
            moveables.push(corona);
        }
    }
    function animate() {
        L10_Virus.crc2.putImageData(background, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        colliding();
    }
    function colliding() {
        for (let moveable of moveables) {
            if (moveable instanceof L10_Virus.Corona) {
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
            if (moveable instanceof L10_Virus.HumanCell && moveable.checkifHit(_positionvirus, _radiusvirus))
                return moveable;
        }
        return null;
    }
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=virusMain_10.js.map