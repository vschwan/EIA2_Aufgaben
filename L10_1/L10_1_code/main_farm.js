"use strict";
var L10_1_Farm;
(function (L10_1_Farm) {
    window.addEventListener("load", handleLoad);
    let lyrics;
    let specialAction;
    let foodInventory;
    let bird;
    let dog;
    function handleLoad() {
        lyrics = document.createElement("div");
        lyrics.innerHTML = "";
        document.body.appendChild(lyrics);
        specialAction = document.createElement("div");
        specialAction.innerHTML = "";
        document.body.appendChild(specialAction);
        foodInventory = document.createElement("div");
        foodInventory.innerHTML = "";
        document.body.appendChild(foodInventory);
        showSongSnippets();
        updateFoodInventory();
        doSpecialAction();
    }
    function showSongSnippets() {
        bird = new L10_1_Farm.Bird();
        dog = new L10_1_Farm.Dog();
        lyrics.innerHTML = bird.sing();
        lyrics.innerHTML += "<br>" + dog.sing();
    }
    function updateFoodInventory() {
        foodInventory.innerHTML = "<br>" + bird.eat();
        foodInventory.innerHTML += "<br> " + dog.eat();
    }
    function doSpecialAction() {
        specialAction.innerHTML = "<br>" + bird.doSpecialAction();
        specialAction.innerHTML += "<br> " + dog.doSpecialAction();
    }
})(L10_1_Farm || (L10_1_Farm = {}));
//# sourceMappingURL=main_farm.js.map