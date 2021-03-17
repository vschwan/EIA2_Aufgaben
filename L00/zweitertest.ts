
let var1: number = 5;
let var2: number = 10;
console.log(var2 + var1);



let helpbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#helpb");

helpbutton.addEventListener("click", handleChange);
console.log("hallo");


function handleChange (): void {
    let h1: HTMLElement = <HTMLElement>document.querySelector("h1");
    console.log("hello?");
    h1.innerHTML = "NICEHEAD";
}


