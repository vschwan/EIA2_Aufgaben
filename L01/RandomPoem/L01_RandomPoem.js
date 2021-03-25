"use strict";
var RandomPoet_L02;
(function (RandomPoet_L02) {
    //console.log("Hallo, du oller Hobbit");
    let subject = ["Gandalf", "Bilbo", "Legolas", "Gimli", "Gollum", "Aragorn"];
    let predicate = ["sucht", "verzaubert", "liebt", "hasst", "verflucht", "vernichtet"];
    let object = ["den Ring", "den Schicksalsberg", "Elben", "Sauron", "Mordor", "die Adler"];
    // console.log(subject, predicate, object);
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
        let calc = Math.floor(Math.random() * _subject.length);
        verse = _subject.splice(calc, 1) + " "
            + _predicate.splice(calc, 1) + " "
            + _object.splice(calc, 1) + "!";
        return verse;
    }
})(RandomPoet_L02 || (RandomPoet_L02 = {}));
//# sourceMappingURL=L01_RandomPoem.js.map