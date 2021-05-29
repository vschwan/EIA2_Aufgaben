"use strict";
var L09_2_FlowerMeadow;
(function (L09_2_FlowerMeadow) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let background;
    function handleLoad() {
        L09_2_FlowerMeadow.canvas = document.querySelector("canvas");
        L09_2_FlowerMeadow.crc2 = L09_2_FlowerMeadow.canvas.getContext("2d");
        drawBackground();
        handleBees();
        window.setInterval(animate, 20);
        //  drawSun({ x: 400, y: 180 });
        //  drawCloud({ x: 650, y: 100 }, { x: 200, y: 30 });
        //  drawMountains(posMountains, 70, 200, "HSL(216, 50%, 17%)", "HSL(216, 90%, 90%)");
        // drawCloud({ x: 150, y: 180 }, { x: 100, y: 20 });
        // drawMountains({ x: 0, y: horizon }, 50, 150, "HSL(216, 15%, 17%)", "HSL(216, 22%, 58%)");
        // drawCloud({ x: 300, y: 120 }, { x: 180, y: 30 });
        // drawTree({ x: canvas.width / 2 - 5, y: 255 }, { x: canvas.width, y: 10 });
        // drawHills({ x: 0, y: horizon });
    }
    function drawBackground() {
        console.log("drawBackground");
        let horizon = L09_2_FlowerMeadow.crc2.canvas.height * 0.45;
        L09_2_FlowerMeadow.crc2.save();
        let gradient = L09_2_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, L09_2_FlowerMeadow.crc2.canvas.height / 1.5);
        gradient.addColorStop(0, "#91cddd");
        gradient.addColorStop(0.5, "#f19b9c");
        gradient.addColorStop(1, "#f4c585");
        L09_2_FlowerMeadow.crc2.fillStyle = gradient;
        L09_2_FlowerMeadow.crc2.fillRect(0, 0, L09_2_FlowerMeadow.canvas.width, L09_2_FlowerMeadow.canvas.height / 1.5);
        L09_2_FlowerMeadow.crc2.restore();
        let posSun = new L09_2_FlowerMeadow.Vector(400, 180);
        let sun = new L09_2_FlowerMeadow.Background(posSun);
        sun.drawSun();
        let posCloud1 = new L09_2_FlowerMeadow.Vector(650, 100);
        let sizeCloud1 = new L09_2_FlowerMeadow.Vector(200, 30);
        let cloud1 = new L09_2_FlowerMeadow.Cloud(posCloud1, sizeCloud1);
        cloud1.draw();
        let posMountain1 = new L09_2_FlowerMeadow.Vector(0, horizon);
        let mountain1 = new L09_2_FlowerMeadow.Background(posMountain1);
        mountain1.drawMountain(70, 200, "HSL(216, 50%, 17%)", "HSL(216, 90%, 90%)");
        let posCloud2 = new L09_2_FlowerMeadow.Vector(150, 180);
        let sizeCloud2 = new L09_2_FlowerMeadow.Vector(100, 20);
        let cloud2 = new L09_2_FlowerMeadow.Cloud(posCloud2, sizeCloud2);
        cloud2.draw();
        let mountain2 = new L09_2_FlowerMeadow.Background(posMountain1);
        mountain2.drawMountain(50, 150, "HSL(216, 15%, 17%)", "HSL(216, 22%, 58%)");
        let posCloud3 = new L09_2_FlowerMeadow.Vector(300, 120);
        let sizeCloud3 = new L09_2_FlowerMeadow.Vector(180, 30);
        let cloud3 = new L09_2_FlowerMeadow.Cloud(posCloud3, sizeCloud3);
        cloud3.draw();
        let posTrees = new L09_2_FlowerMeadow.Vector(L09_2_FlowerMeadow.canvas.width / 2 - 5, 255);
        let sizeTrees = new L09_2_FlowerMeadow.Vector(L09_2_FlowerMeadow.canvas.width, 10);
        let trees = new L09_2_FlowerMeadow.Background(posTrees, sizeTrees);
        trees.drawTrees();
        let poshills = new L09_2_FlowerMeadow.Vector(0, horizon);
        let hills = new L09_2_FlowerMeadow.Background(poshills);
        hills.drawHills();
        handleFlowers();
        background = L09_2_FlowerMeadow.crc2.getImageData(0, 0, L09_2_FlowerMeadow.canvas.width, L09_2_FlowerMeadow.canvas.height);
    }
    function handleFlowers() {
        let nFlowers = 10;
        for (let i = 0; i < nFlowers; i++) {
            let x = (Math.random() * L09_2_FlowerMeadow.canvas.width);
            let y = (320 + Math.random() * L09_2_FlowerMeadow.canvas.height / 4);
            let posFlower = new L09_2_FlowerMeadow.Vector(x, y);
            let flower = new L09_2_FlowerMeadow.Flower(posFlower);
            flower.drawRoundFlower();
        }
    }
    function handleBees() {
        let nBees = 10;
        for (let i = 0; i < nBees; i++) {
            let x = (Math.random() * L09_2_FlowerMeadow.canvas.width);
            let y = (Math.random() * L09_2_FlowerMeadow.canvas.height);
            let position = new L09_2_FlowerMeadow.Vector(x, y);
            let bee = new L09_2_FlowerMeadow.Bee(position);
            bee.draw();
            moveables.push(bee);
        }
    }
    function animate() {
        L09_2_FlowerMeadow.crc2.putImageData(background, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(L09_2_FlowerMeadow || (L09_2_FlowerMeadow = {}));
//# sourceMappingURL=main.js.map