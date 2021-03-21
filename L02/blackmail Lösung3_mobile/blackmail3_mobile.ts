namespace L02_BlackmailerCompanion_mobile {
    console.log("Start");

    let mail: HTMLDivElement;
    let keyboard: HTMLDivElement;
    let chosenCharacter: string = "A";
    let alphabet: string[] = [..."abcdefghijklmnopqrstuvwxyz"];
    
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        mail = <HTMLDivElement>document.querySelector("div#mail");
        mail.addEventListener("click", handleClick);
        document.addEventListener("keydown", chooseCharacter);  //mehrere Objekte mit gleichem Namen ändern: F2

        // generate keyboard
        keyboard = <HTMLDivElement>document.querySelector("div#keyboard");
        for (let k: number = 0; k < alphabet.length; k++) {
            let span: HTMLSpanElement = document.createElement("span");
            span.className = "letterkeyb";
            let letterkeyb: string = "";
            letterkeyb += alphabet[k];
            span.textContent = letterkeyb;
            keyboard.appendChild(span);
        }

    }
    



    function handleClick(_event: MouseEvent): void {
        let target: Node = <Node>_event.target;
        console.log(target);
        if (target == mail) {
            placeLetter(_event);
        }
        else {
            deleteLetter(_event);
        }
    }


    //Handler geben meist keinen wert zurück --> typ: void
    function placeLetter(_event: MouseEvent): void {
        console.log(_event);

        //offset x und offset y --> position bezogen auf Elternelement (hier: div)
        //Elternelement muss positionierung tragen 
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;
        mail = <HTMLDivElement>_event.target;
        let letter: HTMLSpanElement = document.createElement("span");
        letter.className = "letter";
        mail.appendChild(letter);

        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";




    }

    // Strg+# für ausklammern
    function chooseCharacter(_event: KeyboardEvent): void {
        // console.log(_event);
        chosenCharacter = _event.key;
        console.log(chosenCharacter);

    }

    function deleteLetter(_event: MouseEvent): void {
        let target: Node = <Node>_event.target;
        let parent: Node = <Node>target.parentNode;
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

}