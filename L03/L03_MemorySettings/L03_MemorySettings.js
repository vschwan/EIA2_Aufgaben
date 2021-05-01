"use strict";
var L03_MemorySettings;
(function (L03_MemorySettings) {
    //Note: Ich hab mit dem Code von Ulla weitergemacht, der auf meinem Konzept aufbaute. 
    let allcards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E",
        "F", "F", "G", "G", "H", "H", "I", "I", "J", "J",
        "K", "K", "L", "L", "M", "M", "N", "N", "O", "O",
        "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T",
        "U", "U", "V", "V", "W", "W", "X", "X"];
    let playcards = [];
    let chosenCards = [];
    let matches = [];
    let card1;
    let card2;
    let backgroundColor;
    let cBackgroundColor = "";
    let quantity;
    let nPairs = 0;
    let cardsize;
    let nCardsize = 0;
    let backsideCard;
    let cBacksideCard = "";
    let fontcolor;
    let cFontcolor = "";
    let font;
    let vFont = "";
    let container;
    let startButton;
    let form;
    let info;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        info = document.querySelector("p#info");
        container = document.getElementById("container");
        form = document.querySelector("form");
        startButton = document.getElementById("startbtn");
        //startButton.addEventListener("click", handleForm);
        startButton.addEventListener("click", generateContent);
    }
    function generateContent() {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            console.log(entry);
            //console.log("name: " + entry[0]);
            //console.log("value: " + entry[1]);
            switch (entry[0]) {
                case "Quantity":
                    quantity = document.querySelector("[name='" + entry[0] + "']");
                    nPairs = parseFloat(quantity.value);
                    // console.log(nPairs);
                    break;
                case "SizeCards":
                    cardsize = document.querySelector("[name='" + entry[0] + "']");
                    nCardsize = Number(cardsize.value);
                    //console.log(nCardsize);
                    break;
                case "Backgroundcolor":
                    backgroundColor = document.querySelector("[name='" + entry[0] + "']");
                    cBackgroundColor = String(backgroundColor.value);
                    //console.log(cBackgroundColor);
                    break;
                case "BacksideCard":
                    backsideCard = document.querySelector("[name='" + entry[0] + "']");
                    cBacksideCard = String(backsideCard.value);
                    //  console.log(cBacksideCard);
                    break;
                case "Fontcolor":
                    fontcolor = document.querySelector("[name='" + entry[0] + "']");
                    cFontcolor = String(fontcolor.value);
                    break;
                case "Fonts":
                    font = document.querySelector("[value='" + entry[1] + "']");
                    vFont = String(font.value);
                    //   console.log(vFont);
                    break;
                default:
                    break;
            }
        }
        let amountCards = nPairs * 2;
        for (let i = 0; i < amountCards; i++) {
            let oneLetterArray = allcards.slice(i, i + 1);
            let oneLetter = oneLetterArray.toString();
            playcards.push(oneLetter);
            //  console.log(playcards);
        }
        shuffle(playcards);
        // console.log(playcards);
        startButton.remove();
        form.remove();
        info.remove();
        // formData
        //display cards
        for (let k = 0; k < playcards.length; k++) {
            let div = document.createElement("div");
            div.classList.add("cardContainer");
            div.style.backgroundColor = cBacksideCard;
            div.style.fontFamily = vFont;
            div.style.width = cardsize + "px";
            div.style.height = cardsize + "px";
            container.style.backgroundColor = cBackgroundColor;
            let span = document.createElement("span");
            span.innerHTML = playcards[k];
            span.classList.add("unhidden");
            span.style.color = cFontcolor;
            let checkIfSecondLetter = document.getElementById(playcards[k] + "1");
            if (checkIfSecondLetter == null) {
                span.id = playcards[k] + "1";
            }
            else {
                span.id = playcards[k] + "2";
            }
            span.addEventListener("click", showLetters);
            div.appendChild(span);
            container.appendChild(div);
            let width = span.offsetWidth;
            let restWidth = 100 - width;
            let paddingLeft = restWidth / 2;
            let paddingRight = restWidth / 2;
            span.style.paddingLeft = paddingLeft + "px";
            span.style.paddingRight = paddingRight + "px";
        }
        setTimeout(hideAllLetters, 3000);
    }
    function hideAllLetters() {
        let allSpan = document.querySelectorAll("span");
        for (let i = 0; i < allSpan.length; i++) {
            if (allSpan[i].classList.contains("unhidden")) {
                allSpan[i].classList.remove("unhidden");
                allSpan[i].classList.add("hidden");
                allSpan[i].style.color = cBacksideCard;
            }
        }
    }
    function showLetters(_event) {
        let targetSpan = _event.target;
        let targetID1 = targetSpan.id; //Help!!!! wie geht das ohne das der Linter mich gleich erhängt
        // let targetID2: string = _event.target.id;   
        // let targetID3: string = this.id;                    // alle drei Methoden funktionieren, aber das kann ja nicht die richtige Lösung sein...? oder ?
        // console.log(targetSpan, targetID1, targetID2, targetID3);
        targetSpan.classList.remove("hidden");
        targetSpan.classList.add("unhidden");
        targetSpan.style.color = cFontcolor;
        let onlyLetter = targetID1.slice(0, 1);
        chosenCards.push(onlyLetter);
        if (chosenCards.length == 1) {
            card1 = document.getElementById(targetID1);
            console.log(card1);
        }
        else if (chosenCards.length == 2) {
            card2 = document.getElementById(targetID1);
            console.log(card2);
            setTimeout(checkForMatch, 500);
        }
    }
    function checkForMatch() {
        if (chosenCards[0] == chosenCards[1]) {
            alert("it's a match!");
            card1.style.background = "slategrey";
            card2.style.background = "slategrey";
            let cardOneArray = chosenCards.splice(0, 1);
            let cardOne = cardOneArray.toString();
            matches.push(cardOne);
            let cardTwoArray = chosenCards.splice(1, 1);
            let cardTwo = cardTwoArray.toString();
            matches.push(cardTwo);
        }
        else {
            card1.classList.remove("unhidden");
            card1.classList.add("hidden");
            card1.style.color = cBacksideCard;
            card2.classList.remove("unhidden");
            card2.classList.add("hidden");
            card2.style.color = cBacksideCard;
        }
        chosenCards = [];
        if (matches.length == playcards.length) {
            alert("you won!!!");
        }
    }
    // basierend auf Fisher-Yates Shuffle
    function shuffle(_array) {
        let currentIndex = _array.length;
        let temporaryValue;
        let randomIndex;
        // Solange noch Elemente vorhanden sind ...
        while (0 !== currentIndex) {
            // ein vorhandenes Element auswählen und ...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // mit dem Aktuellen tauschen.
            temporaryValue = _array[currentIndex];
            _array[currentIndex] = _array[randomIndex];
            _array[randomIndex] = temporaryValue;
        }
        return _array;
    }
})(L03_MemorySettings || (L03_MemorySettings = {}));
//# sourceMappingURL=L03_MemorySettings.js.map