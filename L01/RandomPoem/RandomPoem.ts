namespace RandomPoet_L02 {
    console.log("Hallo, du Muggel");

    let subject: string[] = ["Gandalf", "Bilbo", "Legolas", "Gimli", "Gollum", "Aragorn"];
    let predicate: string[] = ["sucht", "findet", "liebt", "hasst", "singt", "vernichtet"];
    let object: string[] = ["den Ring", "den Schicksalsberg", "Elben", "Sauron", "Mittelerde", "die Adler"];
    let verse: string = "Elbengeflüster";

    console.log(subject, predicate, object);

    for (let i: number = 6; i <= object.length; i--) {
        if (i == 0) {
            break;
        }
        console.log(i);
        getVerse(subject, predicate, object, verse);
    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[], _verse: string): string {

        console.log(_verse);
        return _verse;
 
    }

}