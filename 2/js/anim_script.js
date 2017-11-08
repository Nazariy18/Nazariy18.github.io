var svg = document.getElementById('Process'),
		rectsGroup = null;

var numberOfSqueares = 500,
		squeryRadius = 95,
		centerX = 105.6,
		centerY = 102.9,
		duration = 2000,
		sizeRect = 2.8,
		rects = [],
		colors = ['#DC4726', '#46DF60', '#3682F1', '#FEEF35', '#fff'];

var countScroll = 0,
		step = 0.5;

document.getElementById('icon').style.transformOrigin = 'center';
document.getElementById('red_box').style.fill ='rgba(255, 255, 255, 0)';
document.getElementById('box_rect').style.fill ='rgba(255, 255, 255, 0)';
document.getElementById('c_box_red').style.fill ='rgba(255, 255, 255, 0)';


function createSquare(x, y, size) {
  rectsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  rectsGroup.setAttribute("id", "rectsGroup");
  svg.appendChild(rectsGroup);
  rectsGroup.style.transformOrigin = 'center';

	for(var i = 0; i < numberOfSqueares; i++) {	
	    rects[i] = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rects[i].setAttribute("fill", colors[anime.random(0, 4)]);
			rects[i].setAttribute("x", x - size / 2);
			rects[i].setAttribute("y", y - size / 2);
			rects[i].setAttribute("width", "0");
			rects[i].setAttribute("height", "0");
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
    width: {value: sizeRect, duration: 10},
    height: {value: sizeRect, duration: 10},
    delay: delay * i,
    duration: duration,
    easing: 'linear',
    loop: true
  });
}

createSquare(centerX, centerY, sizeRect);
rects.forEach(animateSquare);


var Process = anime.timeline({
  //autoplay: false,
  update: function(anim) {
    countScroll = anim.progress;
  }
});

Process
//rects_etap1
  .add({
    targets: rectsGroup,
    easing: 'linear',
    translateY: [0,  -60],
    scale: .4,
    duration: 1000,
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
    opacity: 0,
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
    background: '#f9fcf9',
    duration: 1500,
    offset: 3300
  })
//move red box circle
	.add({
    targets: ['#c_box_red', '#c_red'],
    easing: 'linear',
    translateX: 48,
    translateY: -36,
    r: 10,
    duration: 1000,
    offset: 3800
  })
  .add({
    targets: '#c_red',
    easing: 'linear',
    opacity: 0,
    duration: 1000,
    offset: 3800
  })
//move blue box circle 
	.add({
    targets: '#c_box_blue',
    easing: 'linear',
    translateX: -25,
    translateY: -23,
    r: 15,
    fill: '#5079B7',
    duration: 1000,
    offset: 3800
  })
//show icon and hand
	.add({
    targets: ['#icon', '#hand'],
    easing: 'linear',
    opacity: 1,
    duration: 500,
    offset: 4800
  })
//move hand
	.add({
    targets: '#hand',
    easing: 'linear',
    translateX: 21,
    translateY: -8,
    duration: 500,
    offset: 5300
  })
  .add({
    targets: '#finger_click',
    easing: 'linear',
    opacity: [0, 1, 0],
    duration: 400,
    offset: 6000
  })
//show red box
	.add({
    targets: '#finger_click',
    easing: 'linear',
    opacity: [0, 1, 0],
    duration: 600,
    offset: 6300
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
    targets: '#name tspan',
    easing: 'linear',
    opacity: [0, 1],
    delay: function(el, i) { return 100*i;},
    duration: 10,
    offset: 6200
  })
  .add({
    targets: '#hobe tspan',
    easing: 'linear',
    opacity: [0, 1],
    delay: function(el, i) { return 100*i;},
    duration: 10,
    offset: 6700
  })
   .add({
    targets: '#hobe tspan',
    easing: 'linear',
    opacity: [1, 0],
    direction: 'reverse',
    delay: function(el, i) { return 900 - 100*i;},
    duration: 10,
    offset: 7900
  })
  .add({
    targets: '#name tspan',
    easing: 'linear',
    opacity: [1, 0],
    delay: function(el, i) { return 500 - 100*i;},
    duration: 10,
    offset: 8800
  })
//move hand 2
	.add({
    targets: '#hand',
    easing: 'linear',
    translateX: 0,
    translateY: 10,
    duration: 500,
    offset: 7700
  })
  .add({
    targets: '#finger_click',
    easing: 'linear',
    opacity: [0, 1, 0],
    duration: 400,
    offset: 8200
  })
//show text 2
  .add({
    targets: '#name2 tspan',
    easing: 'linear',
    opacity: [0, 1],
    delay: function(el, i) { return 100*i;},
    duration: 10,
    offset: 9400
  })
  .add({
    targets: '#hobe2 tspan',
    easing: 'linear',
    opacity: [0, 1],
    delay: function(el, i) { return 100*i;},
    duration: 10,
    offset: 10000
  })
//icon move out box ------------- etap 2
	.add({
    targets: '#icon',
    easing: 'linear',
    translateX: [0, -66],
    translateY: [0, 10],
    scale: [1, 1.3],
    duration: 1000,
    offset: 11500
  })
  .add({
    targets: '#clip_icon',
    easing: 'linear',
    r: 20,
    duration: 1000,
    offset: 11500
  })
// move boxes
	.add({
    targets: ['#red_box', '#blue_box', '#hand', '#red_box_content', '#text_icon'],
    easing: 'linear',
    translateY: -60,
    duration: 1000,
    offset: 11500
  })
	.add({
    targets: '#c_box_blue',
    easing: 'linear',
    translateX: -25,
    translateY: -83,
    duration: 1000,
    offset: 11500
  })
	.add({
    targets: '#c_box_red',
    easing: 'linear',
    translateX: 48,
    translateY: -96,
    duration: 1000,
    offset: 11500
  })
//change color 2
	.add({
    targets: '#block_animation',
    easing: 'linear',
    background: '#ffffff',
    duration: 1500,
    offset: 11500
  })
// fade out blue box
	.add({
    targets: ['#blue_box','#text_icon', '#c_box_blue'],
    easing: 'linear',
    opacity: 0,
    duration: 1000,
    offset: 12000
  })
//move red box
 .add({
    targets: ['#red_box', '#hand', '#red_box_content'],
    easing: 'linear',
    translateX: 60,
    translateY: -60,
    duration: 1000,
    offset: 12500
  })
 .add({
    targets: '#c_box_red',
    easing: 'linear',
    translateX: 108,
    translateY: -96,
    duration: 1000,
    offset: 12500
  })
//show message
	.add({
    targets: '#finger_click',
    easing: 'linear',
    opacity: [0, 1, 0],
    duration: 400,
    offset: 13500
  })
  .add({
    targets: '#message',
    easing: 'linear',
    opacity: [0, 1],
    duration: 500,
    offset: 13700
  })
// chenge red box
	.add({
    targets: '#hand',
    easing: 'linear',
    translateX: 55,
    translateY: -65,
    duration: 500,
    offset: 14400
  })
	.add({
    targets: '#finger_click',
    easing: 'linear',
    opacity: [0, 1, 0],
    duration: 400,
    offset: 14900
  })
	.add({
    targets: '#check_x',
    easing: 'linear',
    opacity: 0,
    duration: 100,
    offset: 15100
  })
	.add({
    targets: '#check_mark2',
    easing: 'linear',
   	opacity: 1,
    duration: 100,
    offset: 15100
  })
	.add({
    targets: '#box_rect',
    easing: 'linear',
   	height: 60,
    duration: 500,
    offset: 15400
  })
	.add({
    targets: '#box_lines_text line',
    easing: 'linear',
   	x1: 52,
   	x2: 75,
    duration: 500,
    offset: 15100
  })
// fade out hand and icon
	.add({
    targets: ['#hand', '#icon', '#message'],
    easing: 'linear',
   	opacity: 0,
    duration: 500,
    offset: 16000
  })
// show pointer and color
	.add({
    targets: '#pointer',
    easing: 'linear',
   	opacity: 1,
   	translateX: {value: -30, delay: 500, duration: 1000},
   	translateY: {value: 20, delay: 500, duration: 1000},
    duration: 500,
    offset: 16500
  })
	.add({
    targets: '#red_box',
    easing: 'linear',
   	stroke: '#eaf0ee',
   	fill: '#eaf0ee',
    duration: 1000,
    offset: 16500
  })
	.add({
    targets: '#red_box_content line',
    easing: 'linear',
   	stroke: '#000000',
    duration: 1000,
    offset: 16500
  })
  .add({
    targets: '#box_rect',
    easing: 'linear',
   	stroke: '#feef35',
   	fill: '#feef35',
    duration: 1000,
    offset: 16500
  })
  .add({
    targets: '#c_box_red',
    easing: 'linear',
   	stroke: '#c0cbc6',
   	fill: '#c0cbc6',
    duration: 1000,
    offset: 16500
  })
//change color 3
	.add({
    targets: '#block_animation',
    easing: 'linear',
    background: '#f9fcf9',
    duration: 1500,
    offset: 16500
  })








function onWheel(e) {

	e = e || window.event;
  delta = e.deltaY || e.detail || e.wheelDelta;
  countScroll += delta / 100 * step;

  Process.seek(Process.duration * (countScroll / 100));

	e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}



if (window.addEventListener) {
  if ('onwheel' in document) {
    window.addEventListener("wheel", onWheel);
    window.addEventListener("mousewheel", onWheel);
  } else {
    window.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { 
  window.attachEvent("onmousewheel", onWheel);
}