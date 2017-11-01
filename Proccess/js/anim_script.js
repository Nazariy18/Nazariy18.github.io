var svg = document.getElementById('Process');

var numberOfSqueares = 250,
		squeryRadius = 95,
		centerX = 104.9,
		centerY = 103.1;

var rects = [];

var posX = [],
	  posY = [];




for(var i = 0; i < numberOfSqueares; i++) {
	    posX.push(Math.random()*squeryRadius);
	    posY.push(Math.random()*Math.PI*6.14);
	

	    radius = 102.8 + Math.cos(posY[i])*(posX[i]);
	    degrees = 101 + Math.sin(posY[i])*(posX[i]);


	    rects[i] = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rects[i].setAttribute("fill", "hsla(" + anime.random(0, numberOfSqueares) + ", 100%, 50%, 1)");
			rects[i].setAttribute("x", 102.8);
			rects[i].setAttribute("y", 101);
			rects[i].setAttribute("width", "2.8");
			rects[i].setAttribute("height", "2.8");
			rects[i].setAttribute("opacity", "0");
			svg.appendChild(rects[i]);
}



function move() {


for (var i = 0; i < numberOfSqueares; i++) {

		radius = 103.9 + Math.cos(posY[i])*(posX[i]);
		degrees = 102.1 + Math.sin(posY[i])*(posX[i]);

		rects[i].setAttribute("x", radius);
		rects[i].setAttribute("y", degrees);


		if (posX[i] < (-1*squeryRadius)) {
		      	posX[i] += squeryRadius;
		    	}
		    posX[i] -= 1.5;

 
  }

}

//setInterval(move, 10);

var maxElements = 250;
var duration = 2000;
var radius = 95;
var distance = 95;


var animate = function(el, i) {
  var angle = Math.random() * Math.PI * 2;

  var endX = Math.cos(angle) * distance;
  var endY = Math.sin(angle) * distance;
  var delay = duration / maxElements;

  anime({
    targets: el,
    translateX: endX,
    translateY: endY,
    opacity: {value: 1, duration: 10},
    delay: delay * i,
    duration: duration,
    easing: 'linear',
    loop: true
  });
}





rects.forEach(animate);
