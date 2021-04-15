namespace L02_IventInspector {

    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let div = document.getElementsByName("div");

    }

    function setInfoBox(_event: MouseEvent): void {
        let position: string = "x:" + _event.clientX + "y:" + _event.clientY;
        // let target: EventTarget = <EventTarget> _event.target;
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        console.log(_event.currentTarget, position);
        span.innerHTML = position + _event.currentTarget;

    }

    function logInfo(_event: Event): void {
        console.log(_event.currentTarget, _event.target, _event.type, _event);
    }
}