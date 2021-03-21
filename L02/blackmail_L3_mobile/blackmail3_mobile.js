"use strict";
var L02_BlackmailerCompanion_mobile;
(function (L02_BlackmailerCompanion_mobile) {
    console.log("Start");
    let mail;
    let keyboard;
    let chosenCharacter = "A";
    let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    let span;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        mail = document.querySelector("div#mail");
        // mail.addEventListener("click", handleClick);
        document.addEventListener("keydown", chooseCharacter); //mehrere Objekte mit gleichem Namen ändern: F2
        document.addEventListener("click", handleClick);
        // generate keyboard
        keyboard = document.querySelector("div#keyboard");
        for (let k = 0; k < alphabet.length; k++) {
            span = document.createElement("span");
            span.className = "letterkeyb";
            let letterkeyb = "";
            letterkeyb += alphabet[k];
            span.textContent = letterkeyb;
            keyboard.appendChild(span);
        }
    }
    function handleClick(_event) {
        let target = _event.target;
        console.log(target);
        if (target == mail || target == span) {
            placeLetter(_event);
        }
        else {
            deleteLetter(_event);
        }
        // else 
    }
    //Handler geben meist keinen wert zurück --> typ: void
    function placeLetter(_event) {
        console.log(_event);
        //offset x und offset y --> position bezogen auf Elternelement (hier: div)
        //Elternelement muss positionierung tragen 
        let x = _event.offsetX;
        let y = _event.offsetY;
        mail = _event.target;
        let letter = document.createElement("span");
        letter.className = "letter";
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
    }
    // Strg+# für ausklammern
    function chooseCharacter(_event) {
        // console.log(_event);
        chosenCharacter = _event.key;
        console.log(chosenCharacter);
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
        // _event.stopPropagation();
    }
})(L02_BlackmailerCompanion_mobile || (L02_BlackmailerCompanion_mobile = {}));
//# sourceMappingURL=blackmail3_mobile.js.map