var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),

		button = document.getElementById('but'),
		numberOfCLick = 0,

		nuberOfSqueares = 1000,
		squeryRadius = 190;

var proccess = anime.timeline();
var proccess2 = anime.timeline();
var discovery = null,
		icon = null,
		hand = null,
		loopNames = null,
		loopHand = null,
		boxes = null;

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
		p.alpha = 1;
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

function createLine(pointsX, pointsY, color) {
	ctx.beginPath();
	ctx.moveTo(pointsX[0], pointsY[0]);

	for (var i = 1; i < pointsX.length; i++) {
		ctx.lineTo(pointsX[i], pointsY[i]);
	}

	ctx.strokeStyle = color;
	ctx.stroke();
}

function createCircle(x, y, radius, color) {
		ctx.beginPath();
	  ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
	  ctx.fillStyle = color;
	  ctx.fill();
}

function createLines(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.lineWidth = 2;
		p.pointsX1 = [p.x - 60, p.x - 60, p.x - 120, p.x - 120];
		p.pointsY12 = [p.y + 20, p.y + 80, p.y + 80, p.y + 200];
		p.pointsX2 = [p.x + 60, p.x + 60, p.x + 120, p.x + 120];
		p.pointsX3 = [p.x - 20, p.x - 20];
		p.pointsY3 = [p.y + 10, p.y + 190];
		p.pointsX4 = [p.x + 20, p.x + 20, p.x + 80];
		p.pointsY4 = [p.y + 10, p.y + 190, p.y + 190];
		p.pointsX5 = [p.x - 120, p.x - 180];
		p.pointsY56 = [p.y + 140, p.y + 140];
		p.pointsX6 = [p.x + 120, p.x + 180];
		p.pointsX7 = [p.x - 20, p.x - 80];
		p.pointsY7 = [p.y + 130, p.y +130];
		p.color1 = "#dc4726";
		p.color2 = "#0062f1";
		p.color3 = "#feef35";
		p.color4 = "#46df60";
		p.radius1 = 0;
		p.radius2 = 0;
		p.radius3 = 0;
		p.radius4 = 0;
		p.length = 0;
		p.length2 = 0;
	  p.draw = function() {
	  	ctx.save();
	  	ctx.setLineDash([p.length, 1000]);
	  	ctx.lineWidth = p.lineWidth;

	  	createLine(p.pointsX1, p.pointsY12, p.color1);
	  	createLine(p.pointsX2, p.pointsY12, p.color2);
	   	createLine(p.pointsX3, p.pointsY3, p.color3);
	   	createLine(p.pointsX4, p.pointsY4, p.color4);

    	ctx.restore();

    	ctx.save();
    	ctx.setLineDash([p.length2, 1000]);
    	ctx.lineWidth = p.lineWidth;

    	createLine(p.pointsX5, p.pointsY56, p.color1);
    	createLine(p.pointsX6, p.pointsY56, p.color2);
    	createLine(p.pointsX7, p.pointsY7, p.color3);

    	createCircle(p.x - 120, p.y + 80, p.radius2, p.color1);
    	createCircle(p.x + 120, p.y + 80, p.radius2, p.color2);
    	createCircle(p.x - 20, p.y + 70, p.radius1, p.color3);
    	createCircle(p.x + 20, p.y + 70, p.radius1, p.color4);
    	createCircle(p.x - 120, p.y + 140, p.radius3, p.color1);
    	createCircle(p.x + 120, p.y + 140, p.radius3, p.color2);
    	createCircle(p.x - 20, p.y + 130, p.radius2, p.color3);
    	createCircle(p.x + 20, p.y + 130, p.radius2, p.color4);
    	createCircle(p.x - 120, p.y + 200, p.radius4, p.color1);
    	createCircle(p.x + 120, p.y + 200, p.radius4, p.color2);
    	createCircle(p.x - 20, p.y + 190, p.radius3, p.color3);
    	createCircle(p.x + 20, p.y + 190, p.radius3, p.color4);
    	createCircle(p.x - 80, p.y + 130, p.radius4, p.color3);
    	createCircle(p.x + 80, p.y + 190, p.radius4, p.color4);


  		ctx.restore();

	  }
	  return p;
}

function creteBoxes(x, y) {
	var p = {};
	p.x = x;
	p.y = y;
	p.pointsX1 = [p.x - 60, p.x - 200, p.x - 200, p.x - 40, p.x - 40, p.x - 60];
	p.pointsY12 = [p.y + 20, p.y + 20, p.y + 180, p.y + 180, p.y + 20, p.y + 20];
	p.pointsX2 = [p.x + 60, p.x + 200, p.x + 200, p.x + 40, p.x + 40, p.x + 60];
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
	p.alpha2 = 0;
	p.alphaBlue = 1;
	p.moveX = 0;
	p.moveY = 0;
	p.draw = function() {
			ctx.save();

			ctx.translate(p.moveX, p.moveY);

	  	ctx.save();
	  	ctx.setLineDash([p.length, 1000]);
	  	ctx.lineWidth = p.lineWidth;
	  	createLine(p.pointsX1, p.pointsY12, p.color1);
	  	ctx.restore();

	  	ctx.save();
	  	ctx.globalAlpha = p.alphaBlue;
	  	ctx.setLineDash([p.length, 1000]);
	  	ctx.lineWidth = p.lineWidth;
	  	createLine(p.pointsX2, p.pointsY12, p.color2);
	  	ctx.restore();

	  	ctx.save();
	  	ctx.globalAlpha = p.alpha;
	  	createCircle(p.arc1X, p.arc1Y, p.radius1, p.color1);
	    ctx.restore();

	    ctx.save()
	    ctx.beginPath();
	    ctx.arc(p.arc1X, p.arc1Y, p.radius1, 0, 2 * Math.PI, true);
	    ctx.strokeStyle = p.color1;
	    ctx.stroke();
	    ctx.restore();

	    ctx.save()
	    ctx.globalAlpha = p.alphaBlue;
	    createCircle(p.arc2X, p.arc2Y, p.radius2, p.color2);
  		ctx.restore();

  		ctx.save();
  		ctx.globalAlpha = p.alpha2;

  		ctx.beginPath(); 
  		ctx.moveTo(p.x - 200, p.y + 40);
  		ctx.lineTo(p.x - 40, p.y + 40);
  		ctx.moveTo(p.x - 190, p.y + 30);
  		ctx.lineTo(p.x - 180, p.y + 30);
  		ctx.moveTo(p.x - 170, p.y + 30);
  		ctx.lineTo(p.x - 160, p.y + 30);

  		ctx.moveTo(p.x - 180, p.y + 130);
  		ctx.lineTo(p.x - 120, p.y + 130);
  		ctx.moveTo(p.x - 180, p.y + 140);
  		ctx.lineTo(p.x - 120, p.y + 140);
  		ctx.moveTo(p.x - 180, p.y + 150);
  		ctx.lineTo(p.x - 120, p.y + 150);
  		ctx.moveTo(p.x - 180, p.y + 160);
  		ctx.lineTo(p.x - 120, p.y + 160);

  		ctx.lineWidth = p.lineWidth;
  		ctx.strokeStyle = p.color1;
  		ctx.stroke();

  		ctx.beginPath();
  		ctx.strokeRect(p.x - 185, p.y + 55, 80, 50);
  		ctx.restore();


  		ctx.restore();
	  }
	  return p;
}

function createIcon(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.color = "#0062f1";
		p.moveX = p.x + 102;
		p.moveY = p.y + 85;
		p.scale = 2;
		p.alpha = 0;
		p.alpha2 = 0;
		p.alpha3 = 0;
		p.font = "20px Arial";
		p.textName = "alexa";
		p.textHobi = "loves dogs";
		p.textName2 = "pablo";
		p.textHobi2 = "digital native";
		p.clipX = p.x + 120;
		p.clipY = p.y + 100;
		p.moveName = 0;
		p.clipRadius = 30;
	  p.draw = function() {
	  	ctx.save();
	  	ctx.beginPath();
	    ctx.arc(p.clipX, p.clipY, p.clipRadius, 0, 2 * Math.PI, true);
	    ctx.clip();

	  	ctx.globalAlpha = p.alpha;
	  	ctx.translate(p.moveX, p.moveY);
	  	ctx.scale(p.scale, p.scale);

	  	ctx.beginPath();
			ctx.arc(9, 5, 5, 0, 2*Math.PI, true);
			ctx.fillStyle = p.color;
			ctx.fill();

	  	ctx.beginPath();
			ctx.moveTo(18, 25);
			ctx.bezierCurveTo(18, 24, 18, 21, 18, 18);
			ctx.bezierCurveTo(18, 14, 18, 14, 14, 12);
			ctx.bezierCurveTo(11, 11, 8, 11, 4, 12);
			ctx.bezierCurveTo(1, 14, 0, 14, 0, 18);
			ctx.bezierCurveTo(0, 21, 0, 23, 0, 24);
			ctx.lineTo(0, 25);
			ctx.fillStyle = p.color;
			ctx.fill();
  		ctx.restore();

  		ctx.save();
  		ctx.globalAlpha = p.alpha2;
  		ctx.translate(0, p.moveName);

  		ctx.font = p.font;
  		ctx.textAlign = "center";
  		ctx.fillStyle = p.color;
  		ctx.fillText(p.textName, p.x + 120, p.y + 55);
  		ctx.fillText(p.textHobi, p.x + 120, p.y + 160);
  		ctx.restore();

  		ctx.save();
  		ctx.globalAlpha = p.alpha3;
  		ctx.translate(0, p.moveName);

  		ctx.font = p.font;
  		ctx.textAlign = "center";
  		ctx.fillStyle = p.color;
  		ctx.fillText(p.textName2, p.x + 120, p.y + 55);
  		ctx.fillText(p.textHobi2, p.x + 120, p.y + 160);
  		ctx.restore();

	  }
	  return p;
}

function createPathHand () {
		ctx.beginPath();
		ctx.moveTo(14.8, 23.4);
		ctx.bezierCurveTo(14.8, 23.4, 16.2, 19.3, 15.8, 14.4);
		ctx.bezierCurveTo(15.8, 12.6, 13.1, 12.6, 13.1, 14.4);
		ctx.lineTo(13.1, 17.5);
		ctx.lineTo(13.1, 12.8);
		ctx.bezierCurveTo(13.1, 10.9, 10.5, 10.9, 10.5, 12.8);
		ctx.lineTo(10.5, 15.9);
		ctx.lineTo(10.5, 11.4);
		ctx.bezierCurveTo(10.5, 9.7, 7.9, 9.7, 7.9, 11.4);
		ctx.lineTo(7.9, 14.7);
		ctx.lineTo(7.9, 6);
		ctx.bezierCurveTo(7.9, 4.5, 5.3, 4.5, 5.3, 6);
		ctx.lineTo(5.3, 17.8);
		ctx.lineTo(5.3, 14.7);
		ctx.bezierCurveTo(-1.8, 17, 7, 24.9, 7, 24.9);
		ctx.moveTo(14.6, 24);
		ctx.lineTo(14.1, 25);
}

function createHand(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.lineWidth = 1;
		p.moveX = p.x - 140;
		p.moveY = p.y + 85;
		p.color = "#dc4726";
		p.scale = 2;
		p.alpha1 = 0;
		p.alpha2 = 0;
	  p.draw = function() {
	  	ctx.save();

	  	ctx.globalAlpha = p.alpha1;
	  	ctx.translate(p.moveX, p.moveY);
	  	ctx.scale(p.scale, p.scale);

		  createPathHand ();
		  ctx.fillStyle = "#fff";
		  ctx.fill();

			ctx.lineCap="round";
			ctx.lineWidth = p.lineWidth;
			ctx.strokeStyle = p.color;
			ctx.stroke();

			ctx.restore();

			ctx.save();
			ctx.globalAlpha = p.alpha2;
	  	ctx.translate(p.moveX, p.moveY);
	  	ctx.scale(p.scale, p.scale);

			ctx.beginPath();
			ctx.moveTo(9.7, 6.5);
			ctx.lineTo(13, 6.5);
			ctx.moveTo(8.8, 4.1);
			ctx.lineTo(11.2, 2);
			ctx.moveTo(6.5, 3.4);
			ctx.lineTo(6.5, 0.1);
			ctx.moveTo(4.3, 4.1);
			ctx.lineTo(1.9, 2);
			ctx.moveTo(3.4, 6.5);
			ctx.lineTo(0.1, 6.5);

			ctx.lineCap="round";
			ctx.lineWidth = p.lineWidth;
			ctx.strokeStyle = p.color;
			ctx.stroke();
  		ctx.restore();

	  }
	  return p;
}

function loopUsers() {

	icon.alpha2 = 1;
  icon.alpha3 = 0;

  loopNames = setInterval(function() {

  	  if (icon.alpha2 == 1) {
  	  	 icon.alpha2 = 0;
  			 icon.alpha3 = 1;
  	  }
  	  else {
  	  	 icon.alpha3 = 0;
  			 icon.alpha2 = 1;
  	  }

  }, 2100);


  loopHand = anime({
  			targets: hand,
        duration: 1000,
        easing: 'linear',
        moveX: { value: function(p) { return p.x - 120; }, delay: 500},
        moveY: { value: function(p) { return p.y + 120; }, delay: 500},
        alpha2: [{value: 1, duration: 0},
        				 {value: 0, duration: 300},
        				 {value: 1, duration: 300, delay: 1500}],
        direction: 'alternate',
        loop: true,
        update: renderParticule
  });
}

function createCheckMark() {
		var p = {};
		p.x = x;
		p.y = y;
	
	  p.draw = function() {
	  	ctx.save();

	  

  		ctx.restore();
	  }
	  return p;
}

function animateMapAndPlan() {

	var centerX = canvas.width/2;
	var centerY = canvas.height/2;

	var lines = createLines(centerX, centerY);
	boxes = creteBoxes(centerX, centerY);
	icon = createIcon(centerX, centerY);
	hand = createHand(centerX, centerY);

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
        radius1: { value: 8, duration: 500, delay: 1300},
        radius2: { value: 8, duration: 500, delay: 1700},
        radius3: { value: 8, duration: 500, delay: 2100},
        radius4: { value: 8, duration: 500, delay: 2500},
        length2: {value: 100, duration: 500, delay: 2300},
        update: renderParticule,
        delay: 1000,
        offset: 0
   })
   .add({
	   		targets: boxes,
	      duration: 500,
	      easing: 'linear',
	      radius1: [0, 8],
	      radius2: [0, 8],
	      update: renderParticule,
	      offset: 2500
   })
   .add({
        targets: boxes,
        duration: 3500,
        easing: 'linear',
        length: 800,
        update: renderParticule,
        offset: 4000
   })
   .add({
   			targets: lines,
        duration: 1000,
        easing: 'linear',
        length: 0,
        radius1: { value: 0, duration: 500, delay: 600},
        radius2: { value: 0, duration: 500, delay: 400},
        radius3: { value: 0, duration: 500, delay: 200},
        radius4: { value: 0, duration: 500},
        length2: {value: 0, duration: 500},
        update: renderParticule,
        offset: 4000
   })
   .add({
   			targets: discovery,
        duration: 1500,
        easing: 'linear',
        alpha: 0,
        update: renderParticule,
        offset: 4000
   })
   .add({
        targets: boxes,
        duration: 1600,
        easing: 'linear',
        arc1X: { value: function(p) { return p.x - 70;}, delay: 0},
        arc1Y: { value: function(p) { return p.y + 80;}, delay: 0},
        alpha: { value: 0, delay: 500, duration: 800},
        radius1: [8, 20],
        arc2X: { value: function(p) { return p.x + 120;}, delay: 0},
        arc2Y: { value: function(p) { return p.y + 100;}, delay: 0},
        radius2: [8, 30],
        color2: '#3682f1',
        update: renderParticule,
        offset: 5000
   })
   .add({
   			targets: icon,
        duration: 1000,
        easing: 'linear',
        alpha: 1,
        update: renderParticule,
        offset: 6600
   })
   .add({
   			targets: hand,
        duration: 1000,
        easing: 'linear',
        alpha1: 1,
        update: renderParticule,
        offset: 6600
   })
   .add({
   			targets: hand,
        duration: 1000,
        easing: 'linear',
        moveX: function(p) { return p.x - 85; },
        moveY: function(p) { return p.y + 70; },
        update: renderParticule,
        offset: 7600,
        complete: function() {
        	loopUsers();
        }
   })
   .add({
        targets: boxes,
        duration: 300,
        easing: 'linear',
        alpha2: 1,
        update: renderParticule,
        offset: 8600,
   })
   .add({
   			targets: [hand, icon],
        update: renderParticule
   });
}

function animateInteractiveDesign() {

	loopHand.pause();
  hand.alpha2 = 0;
  clearInterval(loopNames);

	proccess2
		.add({
        targets: icon,
        duration: 1000,
        easing: 'linear',
        moveX: function(p) { return p.x - 18;},
        moveY: function(p) { return p.y + 120;},
        clipX: function(p) { return p.x;},
        clipY: function(p) { return p.y + 135;},
        moveName: [0, -100],
        clipRadius: 40,
        update: renderParticule
		})
		.add({
        targets: boxes,
        duration: 1000,
        easing: 'linear',
        moveY: [0, -100],
        moveX: {value: 120, delay: 1000},
        update: renderParticule,
        offset: 0
		})
		.add({
			targets: hand,
			duration: 1000,
			easing: 'linear',
			moveY: function(p) { return p.y;},
			moveX: { value: function(p) {return p.x;}, delay: 1000},
			update: renderParticule,
			offset: 0
		})
		.add({
        targets: boxes,
        duration: 500,
        easing: 'linear',
        alphaBlue: 0,
        update: renderParticule,
        offset: 500
		})
		.add({
        targets: icon,
        duration: 500,
        easing: 'linear',
        alpha2: 0,
        alpha3: 0,
        update: renderParticule,
        offset: 500
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
   		animateInteractiveDesign();
      button.value = "4.build"; }

}