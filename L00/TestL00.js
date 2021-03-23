"use strict";
var TestL00;
(function (TestL00) {
    let var1 = 5;
    let var2 = 10;
    console.log(var2 + var1);
    let helpbutton = document.querySelector("#helpb");
    helpbutton.addEventListener("click", handleChange);
    console.log("hallo");
    function handleChange() {
        let h1 = document.querySelector("h1");
        console.log("hello?");
        h1.innerHTML = "NICEHEAD";
    }
})(TestL00 || (TestL00 = {}));
//# sourceMappingURL=TestL00.js.map