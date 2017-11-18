alert("new4");
var yStart = null;
var yMove = null;
var elem = document.getElementById('block_animation');

elem.addEventListener("touchstart", start);
window.addEventListener('resize', setSize);
window.addEventListener("orientationchange", setSize);

var svg = document.getElementById('Process'),
    svgContainer = document.getElementById('svg_container'),
    rectsGroup = null,
    smallRectsGroup = null,
    rectObl = null,
    windowWidth = 0,
    windowHeight = 0;

var numberOfSqueares = 500,
		squeryRadius = 95,
		centerX = 105.6,
		centerY = 102.9,
		duration = 2000,
		sizeRect = 2.8,
		rects = [],
    smallRects = [],
		colors = ['#DC4726', '#46DF60', '#3682F1', '#FEEF35', '#fff'];

var pas = true,
    play = true,
    etaps = [14, 38, 70],
    prevdelta = 1, 
    start = false;


var Process = anime.timeline({
  //autoplay: false,
  update: function(anim) {
    var pr =  Math.round(anim.progress);
	  alert("time anim" + anim.duration);
      if ((pr == 14 || pr == 38 || pr == 70) && pas == true) {
          //anim.pause();
          pas = false;
          play = true;
        } else if (pr == 10 || pr == 20 || pr == 50 || pr == 90) {
        pas = true;
      }

      if (pr == 100 || pr == 0) {
        play = true;
        pas = true;
      }
  }
});


document.getElementById('icon').style.transformOrigin = 'center';

function setSize() {
  windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;;
  windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  if (windowWidth < windowHeight) {
      svg.style.width = (windowWidth / 2) + 'px';
      svg.style.height = 'none';
    } else {
      svg.style.height = (windowHeight / 2) + 'px';
      svg.style.width = 'none';
    }

  svgContainer.style.marginTop = (0.15 * windowHeight) + 'px'; 
}

function createSquare(x, y, size) {
  rectsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  rectsGroup.setAttribute("id", "rectsGroup");
  rectsGroup.style.transformOrigin = 'center';
  svg.appendChild(rectsGroup);
  rectObl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  rectObl.setAttribute("fill", "none");
  rectObl.setAttribute("cx", x);
  rectObl.setAttribute("cy", y);
  rectObl.setAttribute("r", squeryRadius + size);
  rectsGroup.appendChild(rectObl);

	for(var i = 0; i < numberOfSqueares; i++) {	
	    rects[i] = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			rects[i].setAttribute("fill", colors[anime.random(0, 4)]);
			rects[i].setAttribute("cx", x - size / 2);
			rects[i].setAttribute("cy", y - size / 2);
      rects[i].setAttribute("r", "0");
			//rects[i].setAttribute("width", "0");
			//rects[i].setAttribute("height", "0");
			rectsGroup.appendChild(rects[i]);
		}
}

var animateSquare = function(el, i) {
  var angle = Math.random() * Math.PI * 2;
  var endX = Math.cos(angle) * squeryRadius;
	var endY = Math.sin(angle) * squeryRadius;
	var delay = duration / numberOfSqueares;

  anime({
    targets: el,
    translateX: endX,
    translateY: endY,
    r: {value: sizeRect, duration: 10},
    //width: {value: sizeRect, duration: 10},
    //height: {value: sizeRect, duration: 10},
    delay: delay * i,
    duration: duration,
    easing: 'linear',
    loop: true
  });
}

function createSmalCircles(x1, y1, x2, y2, count) {

  var sAngle = 0, sX = 0, sY = 0;

  smallRectsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  smallRectsGroup.setAttribute("id", "smallRectsGroup");
  smallRectsGroup.setAttribute("opacity", "0");
  svg.appendChild(smallRectsGroup);

  for(var i = 0; i < count; i++) {

      sAngle = Math.random() * Math.PI * 2;
      sX = Math.cos(sAngle) * anime.random(1, 7);
      sY = Math.sin(sAngle) * anime.random(1, 7);

      smallRects[i] = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      smallRects[i].setAttribute("fill", colors[anime.random(0, 4)]);
      smallRects[i].setAttribute("cx", x1 + sX);
      smallRects[i].setAttribute("cy", y1 + sY);
      smallRects[i].setAttribute("r", 0.8);
      //smallRects[i].setAttribute("width", 0.8);
      //smallRects[i].setAttribute("height", 0.8);
      smallRectsGroup.appendChild(smallRects[i]);

      sAngle = Math.random() * Math.PI * 2;
      sX = Math.cos(sAngle) * anime.random(1, 4.5);
      sY = Math.sin(sAngle) * anime.random(1, 4.5);

      smallRects[i + count] = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      smallRects[i + count].setAttribute("fill", colors[anime.random(0, 4)]);
      smallRects[i + count].setAttribute("cx", x2 + sX);
      smallRects[i + count].setAttribute("cy", y2 + sY);
      smallRects[i + count].setAttribute("r", 0.5);
      //smallRects[i + count].setAttribute("width", 0.5);
      //smallRects[i + count].setAttribute("height", 0.5);
      smallRectsGroup.appendChild(smallRects[i + 200]);
    }
}

function createTimeline() {
  Process
  //rects_etap1
    .add({
      targets: rectsGroup,
      easing: 'linear',
      translateY: [0,  -60],
      scale: [1, 0.4],
      duration: 500,
      offset: 0
    })
  //animate lines
    .add({
      targets: '#lines polyline',
      easing: 'linear',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1000,
      offset: 1000
    })
    .add({
      targets: '#lines line',
      easing: 'linear',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 500,
      offset: 1800
    })
  //animate circles 
    .add({
      targets: "#c1",
      easing: 'linear',
      r: [0, 5],
      duration: 500,
      offset: 1200
    })
    .add({
      targets: '#c2',
      easing: 'linear',
      r: [0, 5],
      duration: 500,
      offset: 1500
    })
    .add({
      targets: '#c3',
      easing: 'linear',
      r: [0, 5],
      duration: 500,
      offset: 1700
    })
    .add({
      targets: ['#c4', '#c_box_blue', '#c_box_red', '#c_red'],
      easing: 'linear',
      r: [0, 5],
      duration: 500,
      offset: 2100
    })
  //animate text ------------------------------ etap 2
    .add({
      targets: '#discovery',
      easing: 'linear',
      opacity: [1, 0],
      //top: ['6%', '0%'],
      duration: 1000,
      offset: 2600
    })
    .add({
      targets: '#exploring',
      easing: 'linear',
      opacity: [1, 0],
      //bottom: ['12%', '0%'],
      duration: 1000,
      offset: 2600
    })
    .add({
      targets: '#mapping',
      easing: 'easeOutElastic',
      opacity: [0, 1],
      top: ['0%', '6%'],
      duration: 1000,
      offset: 4100
    })
    .add({
      targets: '#creating',
      easing: 'easeOutElastic',
      opacity: [0, 1],
      bottom: ['0%', '12%'],
      duration: 1000,
      offset: 4100
    })
  //animate circles 2
    .add({
      targets: '#c4',
      easing: 'linear',
      r: [5, 0],
      duration: 500,
      offset: 3000
    })
    .add({
      targets: '#c3',
      easing: 'linear',
      r: [5, 0],
      duration: 500,
      offset: 3400
    })
    .add({
      targets: '#c2',
      easing: 'linear',
      r: [5, 0],
      duration: 500,
      offset: 3600
    })
    .add({
      targets: '#c1',
      easing: 'linear',
      r: [5, 0],
      duration: 500,
      offset: 3900
    })
  //animate lines
    .add({
      targets: '#lines line',
      easing: 'linear',
      strokeDashoffset: [0, anime.setDashoffset],
      duration: 500,
      offset: 3300
    })
    .add({
      targets: '#lines polyline',
      easing: 'linear',
      strokeDashoffset: [0, anime.setDashoffset],
      duration: 1000,
      offset: 3300
    })
  //rects_etap1
  	.add({
      targets: rectsGroup,
      easing: 'linear',
      opacity: [1, 0],
      duration: 1000,
      offset: 3300
    })
  //boxes
  	.add({
      targets: ['#red_box', '#blue_box'],
      easing: 'linear',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1500,
      offset: 3300
    })
  //change color
  	.add({
      targets: '#block_animation',
      easing: 'linear',
      background: ['#eaf0ee','#f9fcf9'],
      duration: 1500,
      offset: 3300
    })
  //move red box circle
  	.add({
      targets: ['#c_box_red', '#c_red'],
      easing: 'linear',
      translateX: [0, 48],
      translateY: [0, -36],
      r: [5, 10],
      duration: 1000,
      offset: 3800
    })
    .add({
      targets: '#c_red',
      easing: 'linear',
      opacity: [1, 0],
      duration: 1000,
      offset: 3800
    })
  //move blue box circle 
  	.add({
      targets: '#c_box_blue',
      easing: 'linear',
      translateX: [0, -25],
      translateY: [0, -23],
      r: [5, 15],
      fill: ['#0062f1', '#3682f1'],
      duration: 1000,
      offset: 3800
    })
  //show icon and hand
  	.add({
      targets: ['#icon', '#hand'],
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
      offset: 4800
    })
  //move hand
  	.add({
      targets: '#hand',
      easing: 'linear',
      translateX: [0, 21],
      translateY: [0, -8],
      duration: 500,
      offset: 5300
    })
  //show red box
  	.add({
      targets: '#finger_click',
      easing: 'linear',
      opacity: [0, 1, 0],
      duration: 400,
      offset: 6000
    })
    .add({
      targets: '#red_box_content',
      easing: 'linear',
      opacity: [0, 1],
      duration: 200,
      offset: 6200
    })
  //show text 1
    .add({
      targets: '#name2 tspan',
      easing: 'linear',
      opacity: [0, 1],
      delay: function(el, i) { return 100*i;},
      duration: 10,
      offset: 6200
    })
    .add({
      targets: '#hobe2 tspan',
      easing: 'linear',
      opacity: [0, 1],
      delay: function(el, i) { return 70*i;},
      duration: 10,
      offset: 6700
    })
  //move hand 2
  	.add({
      targets: '#hand',
      easing: 'linear',
      translateX: [21, 0],
      translateY: [-8, 0],
      duration: 500,
      offset: 6700
    })
  //icon move out box ------------------------------ etap 3
  	.add({
      targets: '#icon',
      easing: 'linear',
      translateX: [0, -66],
      translateY: [0, 10],
      scale: [1, 1.3],
      duration: 1000,
      offset: 8200
    })
    .add({
      targets: '#clip_icon',
      easing: 'linear',
      r: [15, 20],
      duration: 1000,
      offset: 8200
    })
  //animate text 2
    .add({
      targets: '#mapping',
      easing: 'linear',
      opacity: [1, 0],
      //top: ['6%', '0%'],
      duration: 1000,
      offset: 8200
    })
    .add({
      targets: '#creating',
      easing: 'linear',
      opacity: [1, 0],
      //bottom: ['12%', '0%'],
      duration: 1000,
      offset: 8200
    })
    .add({
      targets: '#iteration',
      easing: 'easeOutElastic',
      opacity: [0, 1],
      top: ['0%', '6%'],
      duration: 1000,
      offset: 9800
    })
    .add({
      targets: '#testing',
      easing: 'easeOutElastic',
      opacity: [0, 1],
      bottom: ['0%', '12%'],
      duration: 1000,
      offset: 9800
    })
  //move boxes
  	.add({
      targets: ['#red_box', '#red_box_fill', '#blue_box', '#hand', '#red_box_content', '#text_icon'],
      easing: 'linear',
      translateY: [0, -60],
      duration: 1000,
      offset: 8200
    })
  	.add({
      targets: '#c_box_blue',
      easing: 'linear',
      translateX: [-25, -25],
      translateY: [-23, -83],
      duration: 1000,
      offset: 8200
    })
  	.add({
      targets: ['#c_box_red', '#c_red'],
      easing: 'linear',
      translateX: [48, 48],
      translateY: [-36, -96],
      duration: 1000,
      offset: 8200
    })
  //change color 2
  	.add({
      targets: '#block_animation',
      easing: 'linear',
      background: ['#f9fcf9', '#ffffff'],
      duration: 1500,
      offset: 8200
    })
  //fade out blue box
  	.add({
      targets: ['#blue_box','#text_icon', '#c_box_blue'],
      easing: 'linear',
      opacity: [1, 0],
      duration: 1000,
      offset: 8700
    })
  //move red box
   .add({
      targets: ['#red_box', '#red_box_fill', '#hand', '#red_box_content'],
      easing: 'linear',
      translateX: [0, 60],
      translateY: [-60, -60],
      duration: 1000,
      offset: 9200
    })
   .add({
      targets: ['#c_box_red', '#c_red'],
      easing: 'linear',
      translateX: [48, 108],
      translateY: [-96, -96], 
      duration: 1000,
      offset: 9200
    })
  //show message
  	.add({
      targets: '#finger_click',
      easing: 'linear',
      opacity: [0, 1],
      duration: 200,
      offset: 10200
    })
    .add({
      targets: '#finger_click',
      easing: 'linear',
      opacity: [1, 0],
      duration: 200,
      offset: 10400
    })
    .add({
      targets: '#message',
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
      offset: 10400
    })
  //chenge red box
  	.add({
      targets: '#hand',
      easing: 'linear',
      translateX: [60, 55],
      translateY: [-60, -65],
      duration: 500,
      offset: 11100
    })
  	.add({
      targets: '#finger_click',
      easing: 'linear',
      opacity: [0, 1, 0],
      duration: 400,
      offset: 11600
    })
  	.add({
      targets: '#check_x',
      easing: 'linear',
      opacity: [1, 0],
      duration: 100,
      offset: 11800
    })
  	.add({
      targets: '#check_mark2',
      easing: 'linear',
     	opacity: [0, 1],
      duration: 100,
      offset: 11800
    })
  	.add({
      targets: ['#box_rect', '#box_rect_fill'],
      easing: 'linear',
     	height: [25, 60],
      duration: 500,
      offset: 12100
    })
  	.add({
      targets: '#box_lines_text line',
      easing: 'linear',
     	x1: [11.3, 52],
     	x2: [41.3, 75],
      duration: 500,
      offset: 11800
    })
  //fade out hand and icon
  	.add({
      targets: ['#hand', '#icon', '#message'],
      easing: 'linear',
     	opacity: [1, 0],
      duration: 500,
      offset: 12700
    })
  //show pointer and color
    .add({
      targets: '#c_red',
      easing: 'linear',
      fill: ['#DC4826', '#c0cbc6'],
      duration: 10,
      offset: 12700
    })
  	.add({
      targets: '#pointer',
      easing: 'linear',
     	opacity: [0, 1],
      duration: 500,
      offset: 13200
    })
  	.add({
      targets: ['#red_box_fill', '#box_rect_fill', '#c_red'],
      easing: 'linear',
      opacity: [0, 1],
      duration: 1000,
      offset: 13200
    })
    .add({
      targets: '#red_box',
      easing: 'linear',
      stroke: ['#DC4726', '#eaf0ee'],
      duration: 1000,
      offset: 13200
          })
  	.add({
      targets: '#red_box_content line',
      easing: 'linear',
     	stroke: ['#DC4726', '#000000'],
      duration: 1000,
      offset: 13200
    })
    .add({
      targets: '#box_rect',
      easing: 'linear',
     	stroke: ['#DC4726', '#feef35'],
      duration: 1000,
      offset: 13200
    })
    .add({
      targets: '#c_box_red',
      easing: 'linear',
     	stroke: ['#DC4826', '#c0cbc6'],
      duration: 1000,
      offset: 13200
    })
  //change color 3
    .add({
      targets: '#block_animation',
      easing: 'linear',
      background: ['#ffffff', '#f9fcf9'],
      duration: 1000,
      offset: 13200
    })
  //animate text 3 --------------------------------- etap 4
    .add({
      targets: '#iteration',
      easing: 'linear',
      opacity: [1, 0],
      //top: ['6%', '0%'],
      duration: 1000,
      offset: 14700
    })
    .add({
      targets: '#testing',
      easing: 'linear',
      opacity: [1, 0],
      //bottom: ['12%', '0%'],
      duration: 1000,
      offset: 14700
    })
    .add({
      targets: '#build',
      easing: 'easeOutElastic',
      opacity: [0, 1],
      top: ['0%', '6%'],
      duration: 1000,
      offset: 16300
    })
    .add({
      targets: '#once-vetted',
      easing: 'easeOutElastic',
      opacity: [0, 1],
      bottom: ['0%', '12%'],
      duration: 1000,
      offset: 16300
    })
  //pointer move element
    .add({
      targets: '#pointer',
      easing: 'linear',
      translateX: [0, -8],
      translateY: [0, 10],
      duration: 500,
      offset: 14700
    })
    .add({
      targets: ['#c_box_red', '#c_red'],
      easing: 'linear',
      translateX: [108, 100],
      translateY: [-96, -86],
      duration: 500,
      offset: 14700
    })
    .add({
      targets: '#pointer',
      easing: 'linear',
      translateX: [-8, -28],
      translateY: [10, 10],
      duration: 500,
      offset: 15200
    })
    .add({
      targets: '#pointer',
      easing: 'linear',
      translateX: [-28, -38],
      translateY: [10, 15],
      duration: 500,
      offset: 15700
    })
    .add({
      targets: ['#box_rect_fill', '#box_rect'],
      easing: 'linear',
      translateX: [0, -10],
      translateY: [0, 5],
      duration: 500,
      offset: 15700
    })
    .add({
      targets: '#pointer',
      easing: 'linear',
      opacity: [1, 0],
      duration: 500,
      offset: 16200
    })
  //move content elements
    .add({
      targets: '#line_up',
      easing: 'linear',
      translateX: [0, -20],
      translateY: [0, 6],
      duration: 500,
      offset: 16200
    })
    .add({
      targets: ['#box_rect_fill', '#box_rect'],
      easing: 'linear',
      translateX: [-10, -20],
      translateY: [5, 14],
      duration: 500,
      offset: 16200
    })
    .add({
      targets: '#box_lines_text',
      easing: 'linear',
      translateX: [0, 18],
      translateY: [0, 20],
      duration: 500,
      offset: 16200
    })
    .add({
      targets: ['#c_box_red', '#c_red'],
      easing: 'linear',
      translateX: [100, 126],
      translateY: [-86, -90],
      duration: 500,
      offset: 16200
    })
  //move all content
    .add({
      targets: ['#red_box', '#red_box_fill', '#red_box_content'],
      easing: 'linear',
      translateX: [60, 20],
      translateY: [-60, -60],
      duration: 1000,
      offset: 16700
    })
   .add({
      targets: ['#c_box_red', '#c_red'],
      easing: 'linear',
      translateX: [126, 86],
      translateY: [-90, -90], 
      duration: 1000,
      offset: 16700
    })
  //drawing phone and monitor
   .add({
      targets: ['#comp path', '#mob path'],
      easing: 'linear',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1000,
      offset: 17500
    })
   .add({
      targets: ['#comp', '#mob'],
      easing: 'linear',
      opacity: [0, 1],
      duration: 1000,
      offset: 17500
    })
  //printing cod
    .add({
      targets: '#cod_text path',
      easing: 'linear',
      opacity: [0, 1],
      delay: function(el, i) { return 200*i;},
      duration: 10,
      offset: 17700
    })
  //show phone content 
    .add({
      targets: '#phone_content',
      easing: 'linear',
      opacity: [0, 1],
      duration: 10,
      offset: 18900
    })
  //move comp and phone
    .add({
      targets: ['#comp', '#mob'],
      easing: 'linear',
      translateX: [0, -50],
      duration: 1000,
      offset: 19000
    })
  //move in boxes
    .add({
      targets: ['#red_box', '#red_box_fill'],
      easing: 'linear',
      translateX: [20, 91.5],
      translateY: [-60, -2.5],
      scaleY: [1, 0.55],
      scaleX: [1, 0.84],
      duration: 1000,
      offset: 19000
    })
    .add({
      targets: '#ph_box_fill',
      easing: 'linear',
      translateX: [0, 60.7],
      translateY: [0, 51],
      scaleY: [1, 0.52],
      scaleX: [1, 0.33],
      duration: 1000,
      offset: 19000
    })
  //move in yellow rects
    .add({
      targets: ['#box_rect_fill', '#box_rect'],
      easing: 'linear',
      x: [6.3, 92.5],
      y: [117.3, 110],
      width: [40, 35], 
      height: [60, 30],
      duration: 1000,
      offset: 19000
    })
    .add({
      targets: '#ph_rect_fill',
      easing: 'linear',
      x: [6.3, 67.7],
      y: [71.3, 72],
      width: [40, 27], 
      height: [60, 22],
      duration: 1000,
      offset: 19000
    })
  //move in text lines
    .add({
      targets: '#box_lines_text',
      easing: 'linear',
      translateX: [18, 73],
      translateY: [20, 52],
      scaleX: [1, 0.8],
      scaleY: [1, 0.6],
      duration: 1000,
      offset: 19000
    })
    .add({
      targets: '#ph_lines_text',
      easing: 'linear',
      translateX: [0, 0],
      translateY: [0, 45],
      scaleX: [1, 0.8],
      scaleY: [1, 0.5],
      duration: 1000,
      offset: 19000
    })
  //move in circles
    .add({
      targets: ['#c_box_red', '#c_red'],
      easing: 'linear',
      translateX: [86, 128],
      translateY: [-90, -95],
      r: [10, 7],
      duration: 1000,
      offset: 19000
    })
    .add({
      targets: '#ph_c_box',
      easing: 'linear',
      translateX: [0, -15],
      translateY: [0, 17],
      r: [10, 5],
      duration: 1000,
      offset: 19000
    })
  //move in line up
    .add({
      targets: '#line_up',
      easing: 'linear',
      translateX: [-20, 70],
      translateY: [6, 25],
      scaleX: [1, 0.86],
      scaleY: [1, 0.86],
      duration: 1000,
      offset: 19000
    })
    .add({
      targets: '#ph_line_up',
      easing: 'linear',
      translateX: [0, 67],
      translateY: [0, 57],
      scaleX: [1, 0.35],
      scaleY: [1, 0.35],
      duration: 1000,
      offset: 19000
    })
  //cod 
    .add({
      targets: '#cod_text path',
      easing: 'linear',
      opacity: [1, 0],
      delay: function(el, i) { return 600 - 200*i;},
      duration: 10,
      offset: 19000
    })
  //rects e-1
    .add({
      targets: ['#c_box_red', '#c_red', '#ph_c_box',],
      easing: 'linear',
      opacity: [1, 0],
      duration: 500,
      offset: 20000
    })
    .add({
      targets: smallRectsGroup,
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
      offset: 20000
    })
}


setSize();

createSmalCircles(143.5, 70.5, 86.5, 93, 200);
createSquare(centerX, centerY, sizeRect);
rects.forEach(animateSquare);

createTimeline();

function scrollAnimation(delta) {

  if (play == true) {
      play = false;
      if ((delta > 0 && prevdelta > 0) || (delta < 0 && prevdelta < 0)) {
        Process.play();
        start = true;
        prevdelta = delta;
      } else {
          if (start == true) {
            Process.reverse();
            Process.play(); 
            prevdelta = delta;
          } else {
            play = true;
          }
      }
  }

}

function start(event) {
	yStart = event.targetTouches[0].pageY;
	elem.addEventListener("touchmove", move);

  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
}

function move(event) {
	yMove = event.targetTouches[0].pageY;
	var del = yStart - yMove;

  scrollAnimation(del);

  event.preventDefault ? event.preventDefault() : (event.returnValue = false);

}

function onWheel(e) {

  e = e || elem.event;
  var del = e.deltaY || e.detail || e.wheelDelta;

  scrollAnimation(del);

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}



if (elem.addEventListener) {
  if ('onwheel' in document) {
    elem.addEventListener("wheel", onWheel);
    elem.addEventListener("mousewheel", onWheel);
  } else {
    elem.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { 
  elem.attachEvent("onmousewheel", onWheel);
}

alert("time: " + Process.duration);
