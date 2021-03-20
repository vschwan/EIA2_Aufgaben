namespace übungenL01 {


    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {
        let v: number = 1;
        v = v + 1;
        console.log(v);

        let s = {
            "zahl": 7,
            "wahr": true,
            text: "Hallo"
        };

        console.log(s);
        console.log(s["text"]);

        /*
        s[4] = [1001, 102];
        console.log(s[4]);
        console.log(s);
        console.log(s["4"]);*/



        //Um assoziative Arrays stringenter zu strukturieren, stellt TypeScript interfaces zur Verfügung
        interface MapStringToBoolean {
            [key: string]: boolean;
        }
        let a: MapStringToBoolean = { "wert1": true, "wert2": false };
        console.log(a);

        //hier sind die Schlüssel vordefiniert und die zugeordneten Werte müssen von bestimmten Typen sein

        interface VectorWithMeaning {
            x: number;
            y: number;
            meaning: string;
        }
        let vector: VectorWithMeaning = { x: 12.4, y: -7.2, meaning: "Ortsvektor" };
        console.log(vector);


        let v1: number = 12;
        let v2: number = v1;
        v1 = 13;
        console.log(v1, v2);

        let k1: VectorWithMeaning = { x: 1, y: 8, meaning: "test" };
        let k2: VectorWithMeaning = k1;
        k1 = { x: 3, y: 8, meaning: "test" };
        console.log(k1, k2);

    }
}
