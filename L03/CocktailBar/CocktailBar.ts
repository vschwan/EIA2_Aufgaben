namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }

    function handleChange(_event: Event): void {
        // console.log(_event);
        // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(drink.value);

        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);



        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            //console.log(entry);
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));

            order.innerHTML += item.name + "  € " + price;
        }

        displayOrder;
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }




    function displayOrder(): void {
        // //delete previous Order
        // let order: HTMLDivElement = <HTMLDivElement>document.querySelector("#order");
        // order.innerHTML = "";

        // //get values of form
        // let formData: FormData = new FormData(document.forms[0]);
        // let total: number = 0;

        // for (let entry of formData) {
        //     console.log(entry);
        //     console.log("name: " + entry[0]); //item
        //     console.log("value: " + entry[1]); //price - Typ: FormDataEntryValue --> muss ggf. in string konvertiert werden 


        //     //item = getNextItemData
        //     //price = getItemPrice
        //     //printRow (item, price)
        //     //wenn item ==drink --> get value(amount) of slider und dann mit mit value of drink multiplizieren --> total += amount*price
        //     //total += amount*price
        //     //printsum

        // }

    }
}