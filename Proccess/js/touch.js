var yStart = null;
var delta = null;
var yMove = null;
var elem = document.getElementById('block_animation');

elem.addEventListener("touchstart", start);
//window.addEventListener("touchmove", move);
	
function start(event) {
	alert("start1: " + event.targetTouches[0].pageY);
	yStart = event.targetTouches[0].pageY;
	elem.addEventListener("touchmove", move);
}

function move(event) {
	alert("move1: " + event.targetTouches[0].pageY);
	yMove = event.targetTouches[0].pageY;
	delta = yStart - yMove;
	if(delta > 0) 
	   {alert("up");}
	else {alert("down");}
}