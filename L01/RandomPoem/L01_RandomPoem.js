"use strict";
var RandomPoet_L02;
(function (RandomPoet_L02) {
    //console.log("Hallo, du oller Hobbit");
    let subject = ["Gandalf", "Bilbo", "Legolas", "Gimli", "Gollum", "Aragorn"];
    let predicate = ["sucht", "verzaubert", "liebt", "hasst", "verflucht", "vernichtet"];
    let object = ["den Ring", "den Schicksalsberg", "Elben", "Sauron", "Mordor", "die Adler"];
    for (let i = object.length; i <= object.length; i--) {
        if (i == 0) {
            break;
        }
        // console.log(i);
        let output = getVerse(subject, predicate, object);
        console.log(output);
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let nSubject = Math.floor(Math.random() * _subject.length);
        let nPredicate = Math.floor(Math.random() * _predicate.length);
        let nObject = Math.floor(Math.random() * _object.length);
        verse = _subject.splice(nSubject, 1) + " "
            + _predicate.splice(nPredicate, 1) + " "
            + _object.splice(nObject, 1) + "!";
        // console.log(verse);
        return verse;
    }
})(RandomPoet_L02 || (RandomPoet_L02 = {}));
//# sourceMappingURL=L01_RandomPoem.js.map