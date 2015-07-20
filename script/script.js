// Displays a clock in hh:mm:ss format.

// Called when the web page is loaded (onload event).
function startTime()
{
	var now  = new Date();
	var hrs  = now.getHours();
	var mins = now.getMinutes();
	var secs = now.getSeconds();
	
	// Add leading zeros if necessary.
	hrs  = padZero(hrs);
	mins = padZero(mins);
	secs = padZero(secs);

	// Display the current time.
	document.getElementById('clock').innerHTML = hrs + ":" + mins + ":" + secs;

	// Recursive call. Method calls itself in one second.
	t = setTimeout('startTime()',1000);
}

// Adds a leading zero if a component is < 10.
function padZero(i)
{
	if (i < 10)
  {
  		i = "0" + i;
  }
	return i;
}

/* Swaps the external sheet sheet

   Called when the user presses one of the 'change theme' buttons.
   The function will replace the <link> element in the <head> element. 
   The new <link> element points to the new css file.
   The old <link> element is discarded.
*/

function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
  var newlink = document.createElement("link");
  
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  // Replace the old <link> element with the new one.
  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
  
//button.

var clickCount = 0;

function popupMessage() {
    clickCount = clickCount + 1;
    alert("you have pressed the button " +  clickCount + " time(s).");
    if ( clickCount == 10) 
    alert("you're a hero")
}

function runawayButton() {
    if (clickCount == 10);
    document.getelementbyid("button").style.top = 150;
}
}