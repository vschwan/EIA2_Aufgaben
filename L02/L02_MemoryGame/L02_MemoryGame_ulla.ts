namespace L02_MemoryGame {

    window.addEventListener("load", handleLoad);
    let allCards: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let pairsInput: string;
    let playingCardsOne: string[];
    let playingCardsTwo: string[];
    let clickedFirst: string;
    let clickedSecond: string;




    function handleLoad(): void {

        let pairsInput: string = <string>window.prompt("Welcome to my Memory-Game <br> Choose how many matching pairs you want to have:", "5");
        if (pairsInput != null) {
            getCards();
            startTimer();

        }




    }

    function getCards(): void {
        let amountPairs: number = parseInt(pairsInput);
        playingCardsOne = allCards.slice(0, amountPairs);
        playingCardsTwo = playingCardsOne.slice(0, playingCardsOne.length);
    }

    function startTimer(): void {
        // let timer = setInterval(s)

    }

    function displayCards(_playingCardsOne: string[], _playingCardsTwo: string[]): void {

        for (let index: number = playingCardsOne.length; index > 0; index--) {
            let x: number = Math.floor(Math.random() * _playingCardsOne.length);

            let oneCard1: string[] = _playingCardsOne.splice(x, 1);
            let card1: HTMLSpanElement = <HTMLSpanElement>document.createElement("span");
            document.body.appendChild(card1);
            card1.innerHTML = oneCard1[0];
            card1.id = card1.innerHTML;
            card1.addEventListener("click", controlCard);




        }
    }

    function controlCard(): void {

    }

}

