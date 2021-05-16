// namespace L03_MemorySettings {


//     //Note: Ich hab mit dem Code von Ulla weitergemacht, der auf meinem Konzept aufbaute. 

//     let allcards: string[] = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E",
//         "F", "F", "G", "G", "H", "H", "I", "I", "J", "J",
//         "K", "K", "L", "L", "M", "M", "N", "N", "O", "O",
//         "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T",
//         "U", "U", "V", "V", "W", "W", "X", "X"];

//     let playcards: string[] = [];
//     let chosenCards: string[] = [];
//     let matches: string[] = []; 

//     let card1: HTMLElement;
//     let card2: HTMLElement;

//     let backgroundColor: HTMLInputElement;
//     let cBackgroundColor: string = "";
//     let quantity: HTMLInputElement;
//     let nPairs: number = 0;
//     let cardsize: HTMLInputElement;
//     let nCardsize: number = 0;
//     let backsideCard: HTMLInputElement;
//     let cBacksideCard: string = "";
//     let fontcolor: HTMLInputElement;
//     let cFontcolor: string = "";
//     let font: HTMLInputElement;
//     let vFont: string = "";

//     let container: HTMLDivElement;
//     let startButton: HTMLButtonElement;

//     let form: HTMLFormElement;
//     let info: HTMLParagraphElement;

//     window.addEventListener("load", handleLoad);




//     function handleLoad(): void {

//         info = <HTMLParagraphElement>document.querySelector("p#info");
//         container = <HTMLDivElement>document.getElementById("container");
//         form = <HTMLFormElement>document.querySelector("form");
//         startButton = <HTMLButtonElement>document.getElementById("startbtn");

//         //startButton.addEventListener("click", handleForm);
//         startButton.addEventListener("click", generateContent);
//     }


//     function generateContent(): void {

//         let formData: FormData = new FormData(document.forms[0]);
//         for (let entry of formData) {
//             console.log(entry);
//             //console.log("name: " + entry[0]);
//             //console.log("value: " + entry[1]);

//             switch (entry[0]) {
//                 case "Quantity":
//                     quantity = <HTMLInputElement>document.querySelector("[name='" + entry[0] + "']");
//                     nPairs = parseFloat(quantity.value);
//                     // console.log(nPairs);
//                     break;

//                 case "SizeCards":
//                     cardsize = <HTMLInputElement>document.querySelector("[name='" + entry[0] + "']");
//                     nCardsize = Number(cardsize.value);
//                     //console.log(nCardsize);
//                     break;

//                 case "Backgroundcolor":
//                     backgroundColor = <HTMLInputElement>document.querySelector("[name='" + entry[0] + "']");
//                     cBackgroundColor = String(backgroundColor.value);
//                     //console.log(cBackgroundColor);
//                     break;

//                 case "BacksideCard":
//                     backsideCard = <HTMLInputElement>document.querySelector("[name='" + entry[0] + "']");
//                     cBacksideCard = String(backsideCard.value);
//                     //  console.log(cBacksideCard);
//                     break;

//                 case "Fontcolor":
//                     fontcolor = <HTMLInputElement>document.querySelector("[name='" + entry[0] + "']");
//                     cFontcolor = String(fontcolor.value);
//                     break;

//                 case "Fonts":
//                     font = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
//                     vFont = String(font.value);
//                     //   console.log(vFont);
//                     break;
//                 default:
//                     break;

//             }
//         }
 
//         let amountCards: number = nPairs * 2;
 
//         for (let i: number = 0; i < amountCards; i++) {
//             let oneLetterArray: string[] = allcards.slice(i, i + 1);
//             let oneLetter: string = oneLetterArray.toString();
//             playcards.push(oneLetter);
//             //  console.log(playcards);
//         }
//         shuffle(playcards);
//         // console.log(playcards);


//         startButton.remove();
//         form.remove();
//         info.remove();


//         // formData
//         //display cards
//         for (let k: number = 0; k < playcards.length; k++) {
//             let div: HTMLDivElement = document.createElement("div");
//             div.classList.add("cardContainer");
//             div.style.backgroundColor = cBacksideCard;
//             div.style.fontFamily = vFont;

//             div.style.width = cardsize + "px";
//             div.style.height = cardsize + "px";

//             container.style.backgroundColor = cBackgroundColor;

//             let span: HTMLSpanElement = document.createElement("span");
//             span.innerHTML = playcards[k];
//             span.classList.add("unhidden");
//             span.style.color = cFontcolor;

//             let checkIfSecondLetter: HTMLElement = <HTMLElement>document.getElementById(playcards[k] + "1");
//             if (checkIfSecondLetter == null) {
//                 span.id = playcards[k] + "1";
//             } else {
//                 span.id = playcards[k] + "2";
//             }

//             span.addEventListener("click", showLetters);
//             div.appendChild(span);
//             container.appendChild(div);

//             let width: number = span.offsetWidth;
//             let restWidth: number = 100 - width;
//             let paddingLeft: number = restWidth / 2;
//             let paddingRight: number = restWidth / 2;
//             span.style.paddingLeft = paddingLeft + "px";
//             span.style.paddingRight = paddingRight + "px";
//         }

//         setTimeout(hideAllLetters, 3000);
//     }

//     function hideAllLetters(): void {

//         let allSpan: NodeListOf<HTMLSpanElement> = document.querySelectorAll("span");
//         for (let i: number = 0; i < allSpan.length; i++) {

//             if (allSpan[i].classList.contains("unhidden")) {
//                 allSpan[i].classList.remove("unhidden");
//                 allSpan[i].classList.add("hidden");
//                 allSpan[i].style.color = cBacksideCard;
//             }
//         }
//     }

//     function showLetters(_event: Event): void {

//         let targetSpan: EventTarget = <EventTarget>_event.target;
//         let targetID1: string = targetSpan.id;                                //Help!!!! wie geht das ohne das der Linter mich gleich erhängt
//         // let targetID2: string = _event.target.id;   
//         // let targetID3: string = this.id;                    // alle drei Methoden funktionieren, aber das kann ja nicht die richtige Lösung sein...? oder ?

//         // console.log(targetSpan, targetID1, targetID2, targetID3);

//         targetSpan.classList.remove("hidden");
//         targetSpan.classList.add("unhidden");
//         targetSpan.style.color = cFontcolor;


//         let onlyLetter: string = targetID1.slice(0, 1);
//         chosenCards.push(onlyLetter);

//         if (chosenCards.length == 1) {
//             card1 = <HTMLElement>document.getElementById(targetID1);
//             console.log(card1);
//         } else if (chosenCards.length == 2) {
//             card2 = <HTMLElement>document.getElementById(targetID1);
//             console.log(card2);
//             setTimeout(checkForMatch, 500);
//         }
//     }

//     function checkForMatch(): void {


//         if (chosenCards[0] == chosenCards[1]) {
//             alert("it's a match!");

//             card1.style.background = "slategrey";
//             card2.style.background = "slategrey";
//             let cardOneArray: string[] = chosenCards.splice(0, 1);
//             let cardOne: string = cardOneArray.toString();
//             matches.push(cardOne);
//             let cardTwoArray: string[] = chosenCards.splice(1, 1);
//             let cardTwo: string = cardTwoArray.toString();
//             matches.push(cardTwo);

//         } else {

//             card1.classList.remove("unhidden");
//             card1.classList.add("hidden");
//             card1.style.color = cBacksideCard;

//             card2.classList.remove("unhidden");
//             card2.classList.add("hidden");
//             card2.style.color = cBacksideCard;
//         }

//         chosenCards = [];

//         if (matches.length == playcards.length) {
//             alert("you won!!!");
//         }
//     }

//     // basierend auf Fisher-Yates Shuffle
//     function shuffle(_array: string[]): string[] {

//         let currentIndex: number = _array.length;
//         let temporaryValue: string;
//         let randomIndex: number;

//         // Solange noch Elemente vorhanden sind ...
//         while (0 !== currentIndex) {

//             // ein vorhandenes Element auswählen und ...
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex -= 1;

//             // mit dem Aktuellen tauschen.
//             temporaryValue = _array[currentIndex];
//             _array[currentIndex] = _array[randomIndex];
//             _array[randomIndex] = temporaryValue;
//         }
//         return _array;
//     }
// }