"use strict";
var test;
(function (test) {
    window.addEventListener("DOMContentLoaded", handleLoad);
    function handleLoad(_event) {
        console.log(_event);
        console.log("window load");
    }
    let v1;
    let v2;
    v1 = 2;
    v2 = v1;
    console.log(v1, v2);
    v1 = 3;
    console.log(v1, v2);
    let a1;
    let a2;
    a1 = [2, 3, 4];
    a2 = a1;
    console.log(a1, a2);
    a1[1] = 9;
    console.log(a1, a2);
})(test || (test = {}));
//# sourceMappingURL=test.js.map