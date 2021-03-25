namespace RandomPoet_L02 {
    //console.log("Hallo, du oller Hobbit");

    let subject: string[] = ["Gandalf", "Bilbo", "Legolas", "Gimli", "Gollum", "Aragorn"];
    let predicate: string[] = ["sucht", "verzaubert", "liebt", "hasst", "verflucht", "vernichtet"];
    let object: string[] = ["den Ring", "den Schicksalsberg", "Elben", "Sauron", "Mordor", "die Adler"];


    // console.log(subject, predicate, object);

    for (let i: number = object.length; i <= object.length; i--) {
        if (i == 0) {
            break;
        }
        // console.log(i);
        let output: string = getVerse(subject, predicate, object);
        console.log(output);

    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
        let verse: string = "";
        let calc: number = Math.floor(Math.random() * _subject.length);

        verse = _subject.splice(calc, 1) + " " 
                + _predicate.splice(calc, 1) + " " 
                + _object.splice(calc, 1) + "!";
       
        return verse;

    }


}

