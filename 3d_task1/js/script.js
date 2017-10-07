var countScroll = 0, 
    delta = 0,
    prevCountScroll = 0;



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

window.addEventListener("touchmove", onWheel);

if (window.addEventListener) {
  if ('onwheel' in document) {
    window.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    window.addEventListener("mousewheel", onWheel);
  } else {
    window.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { 
  window.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
  e = e || window.event;

   delta = e.deltaY || e.detail || e.wheelDelta;
   countScroll += delta/100;

   if (countScroll > 6) {countScroll = 6;}
   if (countScroll < 0) {countScroll = 0;}

   var numberStart = countScroll * 16 - 15,
       x = 0,
       y =0,
       z =0;
  
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
