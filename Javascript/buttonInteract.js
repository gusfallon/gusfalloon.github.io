
//function popUp() {
    
  //  clickCount = clickCount + 1;
    //alert("you have pressed the button " +  clickCount + " time(s).");
    
    //if ( clickCount == 10) {
      //  alert("you're a hero");
    //}
    //runawayButton();
//}


var clickCount;

function moveButton() {
   var top  = Math.floor((Math.random() * 900) + 1); 
   var left = Math.floor((Math.random() * 900) + 1);
   
   document.getElementById("button").style.top  = top  + "px";
   document.getElementById("button").style.left = left + "px";
   
   setInterval(function () {moveButton()}, 2000);
}

function incrementClickCount() {
    clickCount = clickCount + 1;
    
    document.getElementById("clicks").innerHTML = "Clicks: " + clickCount;
}

//function coordinate() {
  //  var top + now.get() ;
   //var left = now.getPosition() ;
    
    //document.getElementById("place").innerHtml = top + "px" ;
    //document.getElementById("place2").innerHtml = left + "px";
    
//}

function finished() {
    
}