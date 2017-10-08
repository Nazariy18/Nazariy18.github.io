var countScroll = 0,
    prevCountScroll = 0,
    pointStart = 0,
    pointEnd = 0,
    toushH = true;



function translateX(number) {
  var x = 0;

  if( number == 1 || (number - 1)%4 == 0) {
      x = -2.2;
  } else if((number + 1)%4 == 0) {
      x = 2.2;
  }
  else if( number%4 == 0) {
      x = 4.4;
  }

  return x;
}

function translateZ(number, leyer) {
  var z = 0;

  if ((number - leyer) <= 4) {
      z = 2.2;
  } else if((number - leyer) > 8 && (number - leyer) <= 12) {
      z = -2.2;
  } else if((number - leyer) > 12 && (number - leyer) <= 16) {
      z = -4.4;
  }

  return z;
}

function translateY(number) {
  var y = 0;

  if ( number > 16 && number < 33) {
      y = -2.2;
  } else if(number > 32 && number < 49) {
      y = -4.4;
  } else if(number > 48 && number < 65) {
      y = -6.6;
  } else if(number > 64 && number < 81) {
      y = -8.8;
  } else if(number > 80 && number < 97) {
      y = -11;
  }

  return y;
}

window.addEventListener("touchstart", stepTuch);
window.addEventListener("touchmove", stepTuch);

if (window.addEventListener) {
  if ('onwheel' in document) {
    window.addEventListener("wheel", stepScroll);
  } else if ('onmousewheel' in document) {
    window.addEventListener("mousewheel", stepScroll);
  } else {
    window.addEventListener("MozMousePixelScroll", stepScroll);
  }
} else { 
  window.attachEvent("onmousewheel", stepScroll);
}

function stepTuch(e) {
    e = e || window.event;
     g += 1;
  
     alert(g);
     alert("start: " + e.targetTouches[0].clientY);

}

function stepScroll(e) {
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;

    onWheel(delta, e);
}

function onWheel(delta, e) {

   if(delta > 0) { var step = 1;}
   else {var step = -1;}

   countScroll += step;

   if (countScroll > 6) {countScroll = 6;}
   if (countScroll < 0) {countScroll = 0;}

   var numberStart = countScroll * 16 - 15,
       x = 0,
       y = 0,
       z = 0;
  
   for (var i = numberStart; i < numberStart + 16; i++) {

        if (countScroll >= prevCountScroll && countScroll != 0) {
            var el = document.getElementsByClassName('box')[i-1];

            x = translateX(i);
            y = translateY(i);
            z = translateZ(i, numberStart - 1);
            el.style = "transform: rotateX(-30deg) rotateY(-135deg) translate3d(" + x + "em, " + y + "em, " + z + "em)"; }
        else {
            var el = document.getElementsByClassName('box')[i+15];

            el.style = "transform: rotateX(-30deg) rotateY(-135deg) translate3d(0em, 0em, 0em)";
        }

    }

 
   prevCountScroll = countScroll;

   
   e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}
