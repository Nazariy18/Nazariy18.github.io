var svg = document.getElementById('Process'),
		rectsGroup;

var numberOfSqueares = 500,
		squeryRadius = 95,
		centerX = 104.9,
		centerY = 103.1,
		duration = 2000,
		sizeRect = 2.8,
		rects = [],
		colors = ['#DC4726', '#46DF60', '#3682F1', '#FEEF35', '#fff'];

var countScroll = 0,
		step = 2;

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
  //direction: 'alternate',
  //loop: true,
  autoplay: false,
  update: function(anim) {
    countScroll = anim.progress;
  }
});

Process
  .add({
    targets: rectsGroup,
    easing: 'linear',
    translateY: [0,  -60],
    scale: .4,
    duration: 1000,
    offset: 0
  })
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
    targets: '#c4',
    easing: 'linear',
    r: [0, 5],
    duration: 500,
    offset: 2100
  })



function onWheel(e) {

	e = e || window.event;
  delta = e.deltaY || e.detail || e.wheelDelta;
  countScroll += delta / 100 * step;


  Process.seek(Process.duration * (countScroll / 100));

	e.preventDefault ? e.preventDefault() : (e.returnValue = false);

}

elem = window;


if (elem.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    elem.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    elem.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    elem.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  elem.attachEvent("onmousewheel", onWheel);
}
