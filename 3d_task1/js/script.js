var i = 0;

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

function onWheel(e) {
  e = e || window.event;

  
  var delta = e.deltaY || e.detail || e.wheelDelta;

  var info = document.getElementById('delta');

  i = +i + delta;

  alert(i);


  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}