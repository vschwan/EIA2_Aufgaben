namespace übungenL02 {

    window.addEventListener("load", handleLoad);
    document.addEventListener("load", handleLoad);
    window.addEventListener("DOMContentLoaded", handleLoad);
    document.addEventListener("DOMContentLoaded", handleLoad);


    function handleLoad(_event: Event): void {
        console.log(_event);
    }


}