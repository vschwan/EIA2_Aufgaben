namespace RandomPoet_L02 {
    //console.log("Hallo, du oller Hobbit");

    let subject: string[] = ["Gandalf", "Bilbo", "Legolas", "Gimli", "Gollum", "Aragorn"];
    let predicate: string[] = ["sucht", "verzaubert", "liebt", "hasst", "verflucht", "vernichtet"];
    let object: string[] = ["den Ring", "den Schicksalsberg", "Elben", "Sauron", "Mordor", "die Adler"];

    for (let i: number = object.length; i > 0; i--) {
       // console.log(i);
        let output: string = getVerse(subject, predicate, object);
       
        console.log(output);
    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
        let nSubject: number = Math.floor(Math.random() * _subject.length);
        let nPredicate: number = Math.floor(Math.random() * _predicate.length);
        let nObject: number = Math.floor(Math.random() * _object.length);

        let verse: string = _subject.splice(nSubject, 1) + " "
            + _predicate.splice(nPredicate, 1) + " "
            + _object.splice(nObject, 1) + "!";

        // console.log(verse);
        return verse;

    }


}

