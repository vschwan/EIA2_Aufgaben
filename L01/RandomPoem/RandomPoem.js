"use strict";
var RandomPoet_L02;
(function (RandomPoet_L02) {
    console.log("Hallo, du Muggel");
    let subject = ["Gandalf", "Bilbo", "Legolas", "Gimli", "Gollum", "Aragorn"];
    let predicate = ["sucht", "findet", "liebt", "hasst", "singt", "vernichtet"];
    let object = ["den Ring", "den Schicksalsberg", "Elben", "Sauron", "Mittelerde", "die Adler"];
    let verse = "Elbengeflüster";
    console.log(subject, predicate, object);
    for (let i = 6; i <= object.length; i--) {
        if (i == 0) {
            break;
        }
        console.log(i);
        getVerse(subject, predicate, object, verse);
    }
    function getVerse(_subject, _predicate, _object, _verse) {
        console.log(_verse);
        return _verse;
    }
})(RandomPoet_L02 || (RandomPoet_L02 = {}));
//# sourceMappingURL=RandomPoem.js.map