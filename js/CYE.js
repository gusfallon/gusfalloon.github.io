$(document).ready(function(){
    $("#hammerHead").click(function(){
        $("#wrapperID").toggleClass("secondWrapper");
        $("#wrapperID").toggleClass("wrapper");
      $("#hammerHead").remove();
      $("#item1").attr("src","images/hammer_head.png");
      var item1_i = document.getElementById('item1').getAttribute("src");
    var item2_i = document.getElementById('item2').getAttribute("src");
    if (item1_i == "images/hammer_head.png" && item2_i == "images/grip.png"){
    	$("#item3").attr("src", "images/hammer.png");
    }
    });

    $("#grip").click(function(){
      $("#grip").remove();
      $("#item2").attr("src","images/grip.png");
      var item1_i = document.getElementById('item1').getAttribute("src");
      var item2_i = document.getElementById('item2').getAttribute("src");
      if (item1_i == "images/hammer_head.png" && item2_i == "images/grip.png"){
      	$("#item3").attr("src", "images/hammer.png");
    }
    });
	$("#item3").click(function() {
    	if(document.getElementById('item3').getAttribute("src") == "images/hammer.png"){
        	$("#wrapperID").toggleClass("thirdWrapper");
        	$("#wrapperID").toggleClass("secondWrapper");
        	var door = document.createElement("div");
         	door.setAttribute("id", "doorEntry");
        	var wrapperID = document.getElementById("wrapperID");
        	wrapperID.appendChild(door);
        	$("#doorEntry").click(function() {
    	    $("#wrapperID").toggleClass("room-1");
		      $("#wrapperID").toggleClass("thirdWrapper");
          var box = document.createElement("img");
          box.setAttribute("src", "images/box.png");
          box.setAttribute("id", "box");
          wrapperID.appendChild(box);
	});
        }
	});

	
});

