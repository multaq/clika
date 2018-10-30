function clickerf(){
    var element = document.getElementById("div1");
    if ("click" in element){
                element.click();
    }else if ("dispatchEvent" in element) {
     
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
        element.dispatchEvent(evt);
    }
 
}


setTimeout(clickerf,5000);
