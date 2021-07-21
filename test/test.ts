namespace test {

    window.addEventListener("DOMContentLoaded", handleLoad);
    function handleLoad(_event: Event): void {
        console.log(_event);
        console.log("window load");
    }

    let v1: number;
    let v2: number;

    v1 = 2;
    v2 = v1;
    console.log(v1, v2);
    v1 = 3;
    console.log(v1, v2);


    let a1: number[];
    let a2: number[];

    a1 = [2, 3, 4];
    a2 = a1;
    console.log(a1, a2);
    a1[1] = 9;
    console.log(a1, a2);



}