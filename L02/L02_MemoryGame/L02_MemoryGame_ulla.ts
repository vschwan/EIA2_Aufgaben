namespace L02_MemoryGame {

    window.addEventListener("load", handleLoad);
    let allCards: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let pairsInput: string;
    let playingCardsOne: string[];
    let playingCardsTwo: string[];
    let clickedFirst: string;
    let clickedSecond: string;




    function handleLoad(): void {

        let prompt: string = <string>window.prompt("Welcome to my Memory-Game <br> Choose how many matching pairs you want to have:", "5");
        if (prompt != null) {
            getCards();
            startTimer();

        }




    }

    function getCards(): void {

    }

    function startTimer(): void {

    }

}

