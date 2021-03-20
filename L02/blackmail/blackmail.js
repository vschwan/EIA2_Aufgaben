"use strict";
var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    console.log("Start");
    let mail;
    let chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter); //mehrere Objekte mit gleichem Namen ändern: F2
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
        letter.addEventListener("click", deleteLetter);
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
    // _event.stopPropagation();
    //fragen ob target und currenttarget gleich sind --> klicke ich auf div#mail, wird placeletter getriggert 
    //--> div#mail ist dann target und nur dann soll ein letter platziert werden
    //wenn div#mail geklickt wird --> ist target div#mail oder letter? 
    // --> dann entscheiden: soll place oder deleteletter aufgerufen werden`?
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
//# sourceMappingURL=blackmail.js.map