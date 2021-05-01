"use strict";
var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        // console.log(_event);
        // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(drink.value);
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            //console.log(entry);
            let amount = Number(formData.get("Amount"));
            console.log(amount);
            let item = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(item.getAttribute("price"));
            console.log(price);
            let total = 0;
            let totalSum = 0;
            if (item.classList.contains("drinks")) {
                total = price * amount;
                //  console.log(total = price, amount);
                order.innerHTML += entry[1] + ": " + amount + " L" + " = " + total + " Euro" + "<br>";
                totalSum += total;
            }
            else {
                console.log("test");
                order.innerHTML += entry[1] + " " + price + " Euro" + "<br>";
                totalSum += price;
            }
        }
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map