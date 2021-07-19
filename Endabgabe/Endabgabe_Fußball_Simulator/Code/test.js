"use strict";
// function animate(): void { // roughly based on Asteroids code
//     // if (/**/ )  hier abfragen ob gerade ein Spieler am Ball ist - wenn nein, dann animieren, 
//     // wenn doch dann Animation aussetzen und stattdessen auf Klick warten (click listener installieren?)
//     // währenddessen alle Objekte weiter an ihrer Position malen?
//     // oder Moveables.velocity = 0,0 ?
//     requestAnimationFrame(animate);
//     crc2.clearRect(0, 0, canvas.width, canvas.height);
//     ball.draw();
//     // canvas.addEventListener("click", shoot);
//     for (let allPeople of people) {
//         allPeople.move();
//     }
//     imageData = crc2.getImageData(0, 0, canvas.width, canvas.height); // aktuellen Stand speichern, um während Schuss anzuzeigen
// }
// function shoot(_event: MouseEvent): void {
//     clicked = false; // wenn player.position = ball.position --> clicked = true;
//     // // reguläre Animation stoppt NOCH NICHT
//     // // requestAnimationFrame(shoot); -> geht nicht wegen _event
//     // // update(_timeslice??) mit setInterval
//     // // cancelAnimationFrame();
//     // crc2.clearRect(0, 0, canvas.width, canvas.height);
//     // crc2.putImageData(imageData, 0, 0);
//     // ball.move(_event);
//     // // animate();
// }
// function getInfo(): void {
//     // bei click und shift
//     // check welcher Player gerade angeklickt wurde s. Asteroids Code (durch allPeople Array Positions durch)
// }
// // random number between a minimum and a maximum input
// export function randomNumber(_min: number, _max: number): number {
//     return Math.random() * (_max - _min) + _min;
// }
//# sourceMappingURL=test.js.map