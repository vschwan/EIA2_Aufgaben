"use strict";
var test11;
(function (test11) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad() {
        move();
    }
    function move() {
        let i = 0;
        if (i == 0) {
            i = 1;
            let progress = document.createElement("div");
            progress.id = "progress";
            document.body.appendChild(progress);
            let bar = document.createElement("div");
            bar.id = "bar";
            progress.appendChild(bar);
            let width = 10;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                }
                else {
                    width++;
                    bar.style.width = width + "%";
                    bar.innerHTML = width + "%";
                }
            }
        }
    }
})(test11 || (test11 = {}));
//# sourceMappingURL=test.js.map