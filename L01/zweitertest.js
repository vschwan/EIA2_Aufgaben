"use strict";
window.addEventListener("load", handleLoad);
let var1 = 5;
let var2 = 10;
console.log(var2 + var1);
function handleLoad(_event) {
    let helpbutton = document.querySelector("#helpb");
    helpbutton.addEventListener("click", handleChange);
    console.log("hallo");
}
function handleChange() {
    let h1 = document.querySelector("h1");
    console.log("hello?");
    h1.innerHTML = "NICEHEAD";
}
//# sourceMappingURL=zweitertest.js.map