var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),

		button = document.getElementById('but'),
		numberOfCLick = 0,

		nuberOfSqueares = 1000,
		squeryRadius = 190;

var proccess = anime.timeline();
var discovery;

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

function getPos(x, y) {
	var posX = [],
			posY = [];

	for(var i = 0; i < nuberOfSqueares; i++) {
	    posX.push(Math.random()*squeryRadius);
	    posY.push(Math.random()*Math.PI*6.14);
  }

  return {
    posX,
    posY
  }
}

function animetSquares(x, y, posX, posY) {

	 for(var i = 0; i <= 1000; i++) {
	    var radius = x + Math.cos(posY[i])*(posX[i]);
	    var degrees = y + Math.sin(posY[i])*(posX[i]);
	    ctx.beginPath();
	    ctx.fillStyle = "hsla(" + i + ", 100%, 50%, 1)";
	    ctx.fillRect(radius, degrees, 5, 5);
	    if (posX[i] < (-1*squeryRadius)) {
	      	posX[i] += squeryRadius;
	    	}
	    posX[i]-=1.5;
	  }
}

function createDiscovery(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.moveX = 0;
		p.moveY = 0;
		p.scale = 1;
		p.squares = getPos(p.x, p.y);
	  p.draw = function() {
	  	ctx.save();

	  	ctx.globalAlpha = p.alpha;
	    ctx.translate(p.moveX, p.moveY);

	    ctx.translate(p.x, p.y);
	    ctx.scale(p.scale, p.scale);
	    ctx.translate((-1)*p.x, (-1)*p.y);

			animetSquares(p.x, p.y, p.squares.posX, p.squares.posY);

  		ctx.restore();

	  }
	  return p;
}

function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

function animateDiscovery() {

  discovery = createDiscovery(canvas.width/2, canvas.height/2);

  proccess
  	.add({
        targets: discovery,
        duration: Infinity,
        easing: 'linear',
        update: renderParticule,
        offset: 0
   	});
}

function createLines(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.lineWidth = 2;
		p.pointsX1 = [p.x - 60, p.x - 60, p.x - 120, p.x - 120, p.x - 120, p.x - 180];
		p.pointsY12 = [p.y + 20, p.y + 80, p.y + 80, p.y + 200, p.y + 140, p.y + 140];
		p.pointsX2 = [p.x + 60, p.x + 60, p.x + 120, p.x + 120, p.x + 120, p.x + 180];
		p.pointsX3 = [p.x - 20, p.x - 20, p.x - 20, p.x - 20, p.x - 80];
		p.pointsY3 = [p.y + 10, p.y + 70, p.y + 130, p.y + 190, p.y + 130];
		p.pointsX4 = [p.x + 20, p.x + 20, p.x + 20, p.x + 20, p.x + 80];
		p.pointsY4 = [p.y + 10, p.y + 70,  p.y + 130, p.y + 190, p.y + 190];
		p.color1 = "#dc4726";
		p.color2 = "#0062f1";
		p.color3 = "#feef35";
		p.color4 = "#46df60";
		p.radius = 0;
		p.length = 0;
		p.length2 = 0;
	  p.draw = function() {
	  	ctx.save();

	  	//lines
	  	ctx.setLineDash([p.length, 1000]);
	    
	    ctx.beginPath();
	    ctx.moveTo(p.pointsX1[0], p.pointsY12[0]);
	    ctx.lineTo(p.pointsX1[1], p.pointsY12[1]);
	    ctx.lineTo(p.pointsX1[2], p.pointsY12[2]);
	    ctx.lineTo(p.pointsX1[3], p.pointsY12[3]);
			ctx.lineWidth = p.lineWidth;
    	ctx.strokeStyle = p.color1;
    	ctx.stroke();

    	ctx.beginPath();
	    ctx.moveTo(p.pointsX2[0], p.pointsY12[0]);
	    ctx.lineTo(p.pointsX2[1], p.pointsY12[1]);
	    ctx.lineTo(p.pointsX2[2], p.pointsY12[2]);
	    ctx.lineTo(p.pointsX2[3], p.pointsY12[3]);
    	ctx.strokeStyle = p.color2;
    	ctx.stroke();

    	ctx.beginPath();
	    ctx.moveTo(p.pointsX3[0], p.pointsY3[0]);
	    ctx.lineTo(p.pointsX3[3], p.pointsY3[3]);
    	ctx.strokeStyle = p.color3;
    	ctx.stroke();

    	ctx.beginPath();
	    ctx.moveTo(p.pointsX4[0], p.pointsY4[0]);
	    ctx.lineTo(p.pointsX4[3], p.pointsY4[3]);
	    ctx.lineTo(p.pointsX4[4], p.pointsY4[4]);
    	ctx.strokeStyle = p.color4;
    	ctx.stroke();

    	ctx.restore();

    	ctx.save();

    	ctx.setLineDash([p.length2, 1000]);

    	ctx.beginPath();
    	ctx.moveTo(p.pointsX1[4], p.pointsY12[4]);
	    ctx.lineTo(p.pointsX1[5], p.pointsY12[5]);
			ctx.lineWidth = p.lineWidth;
    	ctx.strokeStyle = p.color1;
    	ctx.stroke();

    	ctx.beginPath();
    	ctx.moveTo(p.pointsX2[4], p.pointsY12[4]);
	    ctx.lineTo(p.pointsX2[5], p.pointsY12[5]);
    	ctx.strokeStyle = p.color2;
    	ctx.stroke();

    	ctx.beginPath();
    	ctx.moveTo(p.pointsX3[2], p.pointsY3[2]);
	    ctx.lineTo(p.pointsX3[4], p.pointsY3[4]);
    	ctx.strokeStyle = p.color3;
    	ctx.stroke();

    	//circles 
    	for (var i = 2; i <= 5; i++) {
	    	ctx.beginPath();
	    	ctx.arc(p.pointsX1[i], p.pointsY12[i], p.radius, 0, 2 * Math.PI, true);
	    	ctx.fillStyle = p.color1;
	    	ctx.fill();
	    	ctx.beginPath();
	    	ctx.arc(p.pointsX2[i], p.pointsY12[i], p.radius, 0, 2 * Math.PI, true);
	    	ctx.fillStyle = p.color2;
	    	ctx.fill();
	    	ctx.beginPath();
	    	ctx.arc(p.pointsX3[i-1], p.pointsY3[i-1], p.radius, 0, 2 * Math.PI, true);
	    	ctx.fillStyle = p.color3;
	    	ctx.fill();
	    	ctx.beginPath();
	    	ctx.arc(p.pointsX4[i-1], p.pointsY4[i-1], p.radius, 0, 2 * Math.PI, true);
	    	ctx.fillStyle = p.color4;
	    	ctx.fill();
    	}

  		ctx.restore();

	  }
	  return p;
}

function creteBoxes(x, y) {
	var p = {};
	p.x = x;
	p.y = y;
	p.color1 = "#dc4726";
	p.color2 = "#0062f1";
	p.arc1X = p.x - 180;
	p.arc1Y = p.y + 140;
	p.arc2X = p.x + 180;
	p.arc2Y = p.y + 140;
	p.lineWidth = 2;
	p.radius1 = 0;
	p.radius2 = 0;
	p.length = 0;
	p.alpha = 1;
	p.draw = function() {
	  	ctx.save();

	  	ctx.setLineDash([p.length, 1000]);

	  	ctx.beginPath();
	  	ctx.moveTo(p.x - 60, p.y + 20);
	  	ctx.lineTo(p.x - 200, p.y + 20 );
	  	ctx.lineTo(p.x - 200, p.y + 180);
	  	ctx.lineTo(p.x - 40, p.y + 180);
	  	ctx.lineTo(p.x - 40, p.y + 20);2
	  	ctx.closePath();
	  	ctx.lineWidth = p.lineWidth;
	  	ctx.strokeStyle = p.color1;
	  	ctx.stroke();

	  	ctx.beginPath();
	  	ctx.moveTo(p.x + 60, p.y + 20);
	  	ctx.lineTo(p.x + 200, p.y + 20 );
	  	ctx.lineTo(p.x + 200, p.y + 180);
	  	ctx.lineTo(p.x + 40, p.y + 180);
	  	ctx.lineTo(p.x + 40, p.y + 20);
	  	ctx.closePath();
	  	ctx.lineWidth = p.lineWidth;
	  	ctx.strokeStyle = p.color2;
	  	ctx.stroke();
	  	ctx.restore();

	  	ctx.save();
	  	ctx.globalAlpha = p.alpha;
	  	ctx.beginPath();
	    ctx.arc(p.arc1X, p.arc1Y, p.radius1, 0, 2 * Math.PI, true);
	    ctx.fillStyle = p.color1;
	    ctx.fill();
	    ctx.restore();

	    ctx.save()

	    ctx.beginPath();
	    ctx.arc(p.arc1X, p.arc1Y, p.radius1, 0, 2 * Math.PI, true);
	    ctx.strokeStyle = p.color1;
	    ctx.stroke();
	    ctx.restore();

	    ctx.save()
	    ctx.beginPath();
	    ctx.arc(p.arc2X, p.arc2Y, p.radius2, 0, 2 * Math.PI, true);
	    ctx.fillStyle = p.color2;
	    ctx.fill();
  		ctx.restore();
	  }
	  return p;

}

function animateMapAndPlan() {

	var centerX = canvas.width/2;
	var centerY = canvas.height/2;

	var lines = createLines(centerX, centerY);
	var boxes = creteBoxes(centerX, centerY);

  proccess
   .add({
        targets: discovery,
        duration: 1000,
        scale: 0.5, 
        moveY: -100,
        easing: 'linear',
        offset: 0
   })
   .add({
        targets: lines,
        duration: 2000,
        easing: 'linear',
        length: 300,
        radius: 8,
        length2: {value: 100, duration: 500, delay: 2500},
        update: renderParticule,
        delay: 1000,
        offset: 0
   })
   .add({
        targets: boxes,
        duration: 2500,
        easing: 'linear',
        length: 800,
        update: renderParticule,
        delay: 4000,
        offset: 0
   })
   .add({
   			targets: lines,
        duration: 1000,
        easing: 'linear',
        length: 0,
        radius: 0,
        length2: {value: 0, duration: 500},
        update: renderParticule,
        offset: 4000
   })
   .add({
        targets: boxes,
        duration: 1600,
        easing: 'linear',
        arc1X: { value: function(p) { return p.x - 70;}, delay: 1000},
        arc1Y: { value: function(p) { return p.y + 80;}, delay: 1000},
        alpha: { value: 0, delay: 1000, duration: 800},
        radius1: [8, 8],
        arc2X: { value: function(p) { return p.x + 120;}, delay: 1000},
        arc2Y: { value: function(p) { return p.y + 100;}, delay: 1000},
        radius2: [8, 8],
        update: renderParticule,
        offset: 4000
   })
}






var render = anime({
  duration: Infinity,
  update: function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

setCanvasSize();




button.onclick = function () {
  numberOfCLick += 1;

  if (numberOfCLick == 1) {
      animateDiscovery();
      button.value = "2.map&plan"; }

  if (numberOfCLick == 2) {
      animateMapAndPlan();
      button.value = "3.interactive design"; }

   if (numberOfCLick == 3) {
      button.value = "4.interactive design"; }

}
