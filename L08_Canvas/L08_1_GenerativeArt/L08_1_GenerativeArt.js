"use strict";
var L08_1_GenerativeArt;
(function (L08_1_GenerativeArt) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    let x;
    let y;
    let nRectangles = 10;
    let nParticles = 100;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        resizeCanvas();
        drawBackground();
        createElements();
        animate();
    }
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.setAttribute("width", canvas.width + "px");
        canvas.height = window.innerHeight;
        canvas.setAttribute("height", canvas.height + "px");
        let backgroundGradient = crc2.createLinearGradient(0, 0, 0, canvas.height);
        backgroundGradient.addColorStop(0, "#d99bb0");
        backgroundGradient.addColorStop(0.2, "#f183a0");
        backgroundGradient.addColorStop(1, "#f1ec83");
        crc2.fillStyle = backgroundGradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function drawBackground() {
        //create curves with beziercurves
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.bezierCurveTo(200, 400, 200, 200, 400, 300);
        crc2.bezierCurveTo(600, 400, 700, 500, 800, 400);
        crc2.bezierCurveTo(1000, 200, 1000, 300, canvas.width, 300);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.lineTo(0, canvas.height);
        crc2.fillStyle = "HSLA(0, 88%, 80%, 0.5)";
        crc2.strokeStyle = "HSLA(0, 88%, 70%, 0.5)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(0, 450);
        crc2.bezierCurveTo(200, 500, 200, 400, 500, 300);
        crc2.bezierCurveTo(700, 250, 700, 400, 900, 400);
        crc2.bezierCurveTo(1000, 400, 1000, 300, canvas.width, 350);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.lineTo(0, canvas.height);
        crc2.fillStyle = "HSLA(346, 88%, 80%, 0.5)";
        crc2.strokeStyle = "HSLA(346, 88%, 70%, 0.5)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    function createElements() {
        for (let i = 0; i < nRectangles; i++) {
            x = (Math.random() * canvas.width);
            y = (Math.random() * canvas.height);
            drawRectangles(x, y);
        }
        for (let i = 0; i < nParticles; i++) {
            x = (Math.random() * canvas.width);
            y = (Math.random() * canvas.height);
            drawParticles(x, y);
        }
    }
    function drawRectangles(_x, _y) {
        // let randomcolor: string;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                crc2.fillStyle = 'rgb(' + 255 + ', ' +
                    Math.floor(255 - 42.5 * j) + "," + Math.floor(255 - 42.5 * i) + ")";
                crc2.fillRect(j * _x, i * _y, 40, 40);
            }
        }
        crc2.fillStyle = 'rgb(' + 255 + ', ' +
            Math.floor(255 - Math.random() * 255) + "," + Math.floor(255 - Math.random() * 255) + ")";
        crc2.fillRect(_x, _y, 80, 80);
        // let hexCode = "0123456789ABCDEF";
        // let Color = "#";
        // for (let i = 0; i < 6; i++)
        //     Color += hexCode[Math.floor(Math.random() * 16)];
        // console.log(Color);
        // let hexCode: string = "0123456789ABCDEF";
        // let color: string = "#ff";
        // for (let i: number = 0; i < 4; i++)
        //     color += hexCode[Math.floor(Math.random() * 16)];
        // console.log(color);
        // let randomgradient: CanvasGradient = crc2.createRadialGradient(_x + (_x / 2), _y + (_y / 2), 10, _x + (_x / 2), _y + (_y / 2), 35);
        // randomgradient.addColorStop(0, color);
        // randomgradient.addColorStop(0.5, )
        // //colour palette
        // for (let i: number = 0; i < 6; i++) {
        //     for (let j: number = 0; j < 6; j++) {
        //         // crc2.fillStyle = 'rgb(' + 255 + ', ' +
        //         //     Math.floor(255 - 42.5 * j) + "," + Math.floor(255 - 42.5 * i) + ")";
        //         console.log('rgb(' + 255 + ', ' +
        //             Math.floor(255 - 42.5 * j) + "," + Math.floor(255 - 42.5 * i) + ")");
        //       //  crc2.fillRect(j * 25, i * 25, 25, 25);
        //     }
        // }
    }
    function drawParticles(_x, _y) {
        let radius = (Math.random() * 5) + 1;
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
        crc2.save();
        crc2.translate(_x, _y);
        crc2.beginPath();
        crc2.arc(0, 0, radius, 0, 2 * Math.PI);
        crc2.closePath();
        gradient.addColorStop(0, "HSLA(290, 90%,90%, 0.6)");
        gradient.addColorStop(0.8, "HSLA(300, 100%,100%, 0.05)");
        crc2.fillStyle = gradient;
        crc2.save();
        crc2.fill();
        crc2.restore();
        crc2.restore();
    }
    function animate() {
    }
})(L08_1_GenerativeArt || (L08_1_GenerativeArt = {}));
//# sourceMappingURL=L08_1_GenerativeArt.js.map