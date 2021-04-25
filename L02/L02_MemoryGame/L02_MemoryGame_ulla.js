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
        playingCardsTwo = playingCardsOne.slice(0, playingCardsOne.length);
    }
    function startTimer() {
        // let timer = setInterval(s)
    }
    function displayCards(_playingCardsOne, _playingCardsTwo) {
        for (let index = playingCardsOne.length; index > 0; index--) {
            let x = Math.floor(Math.random() * _playingCardsOne.length);
            let oneCard1 = _playingCardsOne.splice(x, 1);
            let card1 = document.createElement("span");
            document.body.appendChild(card1);
            card1.innerHTML = oneCard1[0];
            card1.id = card1.innerHTML;
            card1.addEventListener("click", controlCard);
        }
    }
    function controlCard() {
    }
})(L02_MemoryGame || (L02_MemoryGame = {}));
//# sourceMappingURL=L02_MemoryGame_ulla.js.map