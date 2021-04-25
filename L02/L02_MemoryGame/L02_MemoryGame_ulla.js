"use strict";
var L02_MemoryGame;
(function (L02_MemoryGame) {
    window.addEventListener("load", handleLoad);
    let allCards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let pairsInput;
    let playingCardsOne;
    let playingCardsTwo;
    let clickedFirst;
    let clickedSecond;
    function handleLoad() {
        let pairsInput = window.prompt("Welcome to my Memory-Game <br> Choose how many matching pairs you want to have:", "5");
        if (pairsInput != null) {
            getCards();
            startTimer();
        }
    }
    function getCards() {
        let amountPairs = parseInt(pairsInput);
        playingCardsOne = allCards.slice(0, amountPairs);
    }
    function startTimer() {
    }
})(L02_MemoryGame || (L02_MemoryGame = {}));
//# sourceMappingURL=L02_MemoryGame_ulla.js.map