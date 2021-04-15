"use strict";
var L02_BlackmailerCompanion_L3;
(function (L02_BlackmailerCompanion_L3) {
    console.log("Start");
    let mail;
    let chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        mail = document.querySelector("div#mail");
        mail.addEventListener("click", handleClick);
        document.addEventListener("keydown", chooseCharacter); //mehrere Objekte mit gleichem Namen ändern: F2
    }
    function handleClick(_event) {
        let target = _event.target;
        console.log(target);
        if (target == mail) {
            placeLetter(_event);
        }
        else {
            deleteLetter(_event);
        }
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
    //Problem: durch die Bubble Phase bei klick auf letter wird auch dei funktion placeLetter getriggert 
    // und ein Buchstabe wird an den bereits gelöschten Buchstaben gehängt
    // Lösungen:
    //1. _event.stopPropagation();
    //2. fragen ob target und currenttarget gleich sind --> nur dann letter platzieren
    //3. wenn div#mail geklickt wird --> ist target div#mail oder letter? 
    // --> dann entscheiden: soll place oder deleteletter aufgerufen werden`?
    //
})(L02_BlackmailerCompanion_L3 || (L02_BlackmailerCompanion_L3 = {}));
//# sourceMappingURL=blackmail3.js.map