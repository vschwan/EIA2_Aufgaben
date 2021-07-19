"use strict";
var L11_1_FlowerMeadow;
(function (L11_1_FlowerMeadow) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let background;
    let flowers = [];
    function handleLoad() {
        L11_1_FlowerMeadow.canvas = document.querySelector("canvas");
        L11_1_FlowerMeadow.crc2 = L11_1_FlowerMeadow.canvas.getContext("2d");
        drawBackground();
        handleClouds();
        handleBees();
        window.setInterval(animate, 20);
    }
    function drawBackground() {
        console.log("drawBackground");
        let horizon = L11_1_FlowerMeadow.crc2.canvas.height * 0.45;
        L11_1_FlowerMeadow.crc2.save();
        let gradient = L11_1_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, L11_1_FlowerMeadow.crc2.canvas.height / 1.5);
        gradient.addColorStop(0, "#91cddd");
        gradient.addColorStop(0.5, "#f19b9c");
        gradient.addColorStop(1, "#f4c585");
        L11_1_FlowerMeadow.crc2.fillStyle = gradient;
        L11_1_FlowerMeadow.crc2.fillRect(0, 0, L11_1_FlowerMeadow.canvas.width, L11_1_FlowerMeadow.canvas.height / 1.5);
        L11_1_FlowerMeadow.crc2.restore();
        let posSun = new L11_1_FlowerMeadow.Vector(400, 180);
        let sun = new L11_1_FlowerMeadow.Background(posSun);
        sun.drawSun();
        let posMountain1 = new L11_1_FlowerMeadow.Vector(0, horizon);
        let mountain1 = new L11_1_FlowerMeadow.Background(posMountain1);
        mountain1.drawMountain(70, 200, "HSL(216, 50%, 17%)", "HSL(216, 90%, 90%)");
        let mountain2 = new L11_1_FlowerMeadow.Background(posMountain1);
        mountain2.drawMountain(50, 150, "HSL(216, 15%, 17%)", "HSL(216, 22%, 58%)");
        let posTrees = new L11_1_FlowerMeadow.Vector(L11_1_FlowerMeadow.canvas.width / 2 - 5, 255);
        let sizeTrees = new L11_1_FlowerMeadow.Vector(L11_1_FlowerMeadow.canvas.width, 10);
        let trees = new L11_1_FlowerMeadow.Background(posTrees, sizeTrees);
        trees.drawTrees();
        let poshills = new L11_1_FlowerMeadow.Vector(0, horizon);
        let hills = new L11_1_FlowerMeadow.Background(poshills);
        hills.drawHills();
        handleFlowers();
        drawHive();
        background = L11_1_FlowerMeadow.crc2.getImageData(0, 0, L11_1_FlowerMeadow.canvas.width, L11_1_FlowerMeadow.canvas.height);
    }
    function handleClouds() {
        let k = 3;
        for (let i = 0; i < k; i++) {
            let xPos = (Math.random() * L11_1_FlowerMeadow.canvas.width);
            let yPos = ((Math.random() * 170) + 35);
            let xSize = ((Math.random() * 150) + 90);
            let ySize = ((Math.random() * 30) + 20);
            let posCloud = new L11_1_FlowerMeadow.Vector(xPos, yPos);
            let sizeCloud = new L11_1_FlowerMeadow.Vector(xSize, ySize);
            let cloud = new L11_1_FlowerMeadow.Cloud(posCloud, sizeCloud);
            moveables.push(cloud);
        }
    }
    function handleFlowers() {
        let nFlowers = 10;
        for (let i = 0; i < nFlowers; i++) {
            let x = (Math.random() * L11_1_FlowerMeadow.canvas.width);
            let y = (320 + Math.random() * L11_1_FlowerMeadow.canvas.height / 4);
            let posFlower = new L11_1_FlowerMeadow.Vector(x, y);
            let ovalFlower = new L11_1_FlowerMeadow.OvalFlower(posFlower);
            flowers.push(ovalFlower);
            ovalFlower.drawnectar();
        }
        for (let i = 0; i < nFlowers; i++) {
            let x = (Math.random() * L11_1_FlowerMeadow.canvas.width);
            let y = (320 + Math.random() * L11_1_FlowerMeadow.canvas.height / 4);
            let posFlower = new L11_1_FlowerMeadow.Vector(x, y);
            let dropFlower = new L11_1_FlowerMeadow.DropFlower(posFlower);
            flowers.push(dropFlower);
            dropFlower.drawnectar();
        }
        for (let i = 0; i < nFlowers; i++) {
            let x = (Math.random() * L11_1_FlowerMeadow.canvas.width);
            let y = (320 + Math.random() * L11_1_FlowerMeadow.canvas.height / 4);
            let posFlower = new L11_1_FlowerMeadow.Vector(x, y);
            let roundFlower = new L11_1_FlowerMeadow.RoundFlower(posFlower);
            flowers.push(roundFlower);
            roundFlower.drawnectar();
        }
        for (let flower of flowers) {
            flower.draw();
        }
    }
    function handleBees() {
        let nBees = 10;
        for (let i = 0; i < nBees; i++) {
            let x = (Math.random() * L11_1_FlowerMeadow.canvas.width);
            let y = (Math.random() * L11_1_FlowerMeadow.canvas.height);
            let position = new L11_1_FlowerMeadow.Vector(x, y);
            let bee = new L11_1_FlowerMeadow.Bee(position);
            moveables.push(bee);
        }
    }
    function animate() {
        L11_1_FlowerMeadow.crc2.putImageData(background, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        for (let flower of flowers) {
            let nectarFillLevel = ((Math.random() * 30) + 1);
            let randomNumber = (Math.random() * 0.002);
            //console.log(randomNumber);
            if (nectarFillLevel <= 30) {
                nectarFillLevel += randomNumber;
                // console.log(nectarFillLevel);
                flower.fillnectar(nectarFillLevel);
            }
            else {
                nectarFillLevel = 30;
                flower.fillnectar(nectarFillLevel);
            } //hab mich an dem orientiert was Marcel Ritter gemacht hat, aber 
            //dann offenschtlich nciht hinbekommen :D immer gut 
        }
    }
    function drawHive() {
        //bleh
    }
})(L11_1_FlowerMeadow || (L11_1_FlowerMeadow = {}));
//# sourceMappingURL=main.js.map