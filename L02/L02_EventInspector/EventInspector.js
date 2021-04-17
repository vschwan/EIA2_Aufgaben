"use strict";
var L02_IventInspector;
(function (L02_IventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let div1 = document.getElementsByName("div1");
        for (let i = 0; i < div1.length; i++) {
            div1[i].addEventListener("click", logInfo);
        }
        let div0 = document.getElementsByName("div0");
        for (let i = 0; i < div0.length; i++) {
            div0[i].addEventListener("click", logInfo);
        }
        let button = document.querySelector("button");
        button.addEventListener("click", handleButton);
        /*
                let myEvent: CustomEvent = new CustomEvent("myevent", {
                    detail: {target: () => myEvent.currentTarget},
                    bubbles: true,
                    cancelable: true
                });
        
                document.addEventListener("myevent", e => console.log(e.detail.target()));
                button.dispatchEvent(myEvent);
        
        
        
                button.addEventListener("myevent", function (_event: Event): void {
                    console.log("hello");
                });*/
    }
    function handleButton(_event) {
        let myEvent = new CustomEvent("myevent", {
            detail: {},
            bubbles: true,
            cancelable: true
        });
        let target = _event.target;
        console.log(target);
        document.dispatchEvent(myEvent);
        /*console.log(myEvent.currentTarget);
         console.log(myEvent.eventPhase);*/
        console.log(myEvent);
        //console.log(target);
    }
    function setInfoBox(_event) {
        let position = "x:" + _event.clientX + "y:" + _event.clientY;
        let span = document.querySelector("span");
        //console.log(_event.currentTarget, position);
        span.innerHTML = position + "<br>" + _event.target;
        console.log(span.offsetLeft, span.offsetTop);
        span.style.left = _event.clientX + "px";
        span.style.top = _event.clientY + "px";
    }
    function logInfo(_event) {
        console.log("Current Target: " + _event.currentTarget, "Target: " + _event.target, "Event Type: " + _event.type, "Event: " + _event);
    }
})(L02_IventInspector || (L02_IventInspector = {}));
//# sourceMappingURL=EventInspector.js.map