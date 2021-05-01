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
        displayOrder;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + "  € " + price;
        }
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
    function displayOrder() {
        //delete previous Order
        let order = document.querySelector("#order");
        order.innerHTML = "";
        //get values of form
        let formData = new FormData(document.forms[0]);
        let total = 0;
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]); //item
            console.log("value: " + entry[1]); //price - Typ: FormDataEntryValue --> muss ggf. in string konvertiert werden 
            //item = getNextItemData
            //price = getItemPrice
            //printRow (item, price)
            //wenn item ==drink --> get value(amount) of slider und dann mit mit value of drink multiplizieren --> total += amount*price
            //total += amount*price
            //printsum
        }
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map