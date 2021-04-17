namespace L02_IventInspector {

    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        //   let div = document.getElementsByName("div");


        /*   let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
            let myEvent: CustomEvent = new CustomEvent("myevent", {
                detail: {},
                bubbles: true,
                cancelable: true,
                composed: false
            });
    
            button.dispatchEvent(myEvent);
            button.addEventListener("myevent", (_event) => {
                console.log("im lstening on a custom event");
            
            });*/

    }

    function setInfoBox(_event: MouseEvent): void {
        let position: string = "x:" + _event.clientX + "y:" + _event.clientY;
        // let target: EventTarget = <EventTarget> _event.target;
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        //console.log(_event.currentTarget, position);
        span.innerHTML = position + _event.currentTarget;

        console.log(span.offsetLeft, span.offsetTop);
        span.style.left = _event.clientX + "px";
        span.style.top = _event.clientY + "px";

    }

    function logInfo(_event: Event): void {
        //    console.log(_event.currentTarget, _event.target, _event.type, _event);
    }


    /* function handleClick(_event: MouseEvent): void {
         let target: Node = <Node>_event.target;
         console.log(target);
         if (target == mail) {
             placeLetter(_event);
         }
         else {
             deleteLetter(_event);
         }
     }*/


}