namespace L10_1_Farm {

    window.addEventListener("load", handleLoad);

    let lyrics: HTMLDivElement;
    let specialAction: HTMLDivElement;
    let foodInventory: HTMLDivElement;
    let bird: Bird;
    let dog: Dog;

    function handleLoad(): void {

        lyrics = <HTMLDivElement>document.createElement("div");
        lyrics.innerHTML = "";
        document.body.appendChild(lyrics);

        specialAction = <HTMLDivElement>document.createElement("div");
        specialAction.innerHTML = "";
        document.body.appendChild(specialAction);

        foodInventory = <HTMLDivElement>document.createElement("div");
        foodInventory.innerHTML = "";
        document.body.appendChild(foodInventory);


        showSongSnippets();
        updateFoodInventory();
        doSpecialAction();

    }

    function showSongSnippets(): void {

        bird = new Bird();
        dog = new Dog();
       
        lyrics.innerHTML = bird.sing();
        lyrics.innerHTML += "<br>" + dog.sing();

    }

    function updateFoodInventory(): void {

      
        foodInventory.innerHTML = "<br>" + bird.eat();
        foodInventory.innerHTML += "<br> " + dog.eat();

    }

    function doSpecialAction(): void {
    
        specialAction.innerHTML = "<br>" + bird.doSpecialAction();
        specialAction.innerHTML += "<br> " + dog.doSpecialAction();
    }



}