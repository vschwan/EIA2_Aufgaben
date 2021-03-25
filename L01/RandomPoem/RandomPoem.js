"use strict";
var RandomPoet_L02;
(function (RandomPoet_L02) {
    console.log("Hallo, du oller Hobbit");
    let subject = ["Gandalf", "Bilbo", "Legolas", "Gimli", "Gollum", "Aragorn"];
    let predicate = ["sucht", "findet", "liebt", "hasst", "verflucht", "vernichtet"];
    let object = ["den Ring", "den Schicksalsberg", "Elben", "Sauron", "Mittelerde", "die Adler"];
    // console.log(subject, predicate, object);
    for (let i = 6; i <= object.length; i--) {
        if (i == 0) {
            break;
        }
        // console.log(i);
        getVerse(subject, predicate, object);
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let nSubject = Math.floor(Math.random() * _subject.length);
        verse += _subject.splice(nSubject, 1) + " ";
        let nPredicate = Math.floor(Math.random() * _subject.length);
        verse += _predicate.splice(nPredicate, 1) + " ";
        let nObject = Math.floor(Math.random() * _subject.length);
        verse += _object.splice(nObject, 1);
        console.log(verse);
        return verse;
    }
})(RandomPoet_L02 || (RandomPoet_L02 = {}));
/*FRAGEN
Schneide mit splice(...) ein Wort aus dem übergebenen Array von Subjekten an der Stelle der Zufallszahl heraus
und addiere es zur deiner Vers-Variablen. Achte darauf, das splice dir immer ein Array
mit den ausgeschnittenen Elementen liefert, Du musst also davon das 0-te nehmen.

Lasse deine Vers-Variable von der Funktion zurück geben, nicht mehr einen literalen Wert

Aktiviere wieder die Ausgabe des Funktionsergebnisses in der Schleife


*/ 
//# sourceMappingURL=RandomPoem.js.map