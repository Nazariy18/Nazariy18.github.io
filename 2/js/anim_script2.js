var svg = document.getElementById('Process'),
		rectsGroup = null,
    rectObl = null;

var numberOfSqueares = 500,
		squeryRadius = 95,
		centerX = 105.6,
		centerY = 102.9,
		duration = 2000,
		sizeRect = 2.8,
		rects = [],
		colors = ['#DC4726', '#46DF60', '#3682F1', '#FEEF35', '#fff'];

var countScroll = 0,
    createSteps = [],
    startStep = true;

var Step1 = null,
    Step2 = null, 
    Step3 = null,
    Step4 = null,
    Step5 = null,
    Step6 = null,
    Step7 = null,
    Step8 = null,
    Step9 = null,
    Step10 = null,
    Step11 = null,
    Step12 = null,
    Step13 = null,
    Step14 = null;

  document.getElementById('icon').style.transformOrigin = 'center';

function createSquare(x, y, size) {
  rectsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  rectsGroup.setAttribute("id", "rectsGroup");
  svg.appendChild(rectsGroup);
  rectObl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  rectObl.setAttribute("fill", "none");
  rectObl.setAttribute("cx", x);
  rectObl.setAttribute("cy", y);
  rectObl.setAttribute("r", squeryRadius + size);
  rectsGroup.appendChild(rectObl);

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


function createTimelines(count) {

  if (count == 1) {
    rectsGroup.style.transformOrigin = 'center';
    Step1 = anime({
        targets: rectsGroup,
        easing: 'linear',
        translateY: [0,  -60],
        scale: [1, 0.4],
        duration: 1000
      });
  } else if (count == 2) {
    Step2 = anime.timeline({
        autoplay: false,
        })
        .add({
          targets: '#lines polyline',
          easing: 'linear',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 1000,
          offset: 0
        })
        .add({
          targets: '#lines line',
          easing: 'linear',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 500,
          offset: 800
        })  
        .add({
          targets: '#c1',
          easing: 'linear',
          r: [0, 5],
          duration: 500,
          offset: 200
        })
        .add({
          targets: '#c2',
          easing: 'linear',
          r: [0, 5],
          duration: 500,
          offset: 500
        })
        .add({
          targets: '#c3',
          easing: 'linear',
          r: [0, 5],
          duration: 500,
          offset: 700
        })
        .add({
          targets: ['#c4', '#c_box_blue', '#c_box_red', '#c_red'],
          easing: 'linear',
          r: [0, 5],
          duration: 500,
          offset: 1100
        });
  } else if (count == 3) {
    Step3 = anime.timeline({
        autoplay: false,
        })
        .add({
            targets: ['#red_box', '#blue_box'],
            easing: 'linear',
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 1500,
            offset: 0
        })
        .add({
          targets: '#c4',
          easing: 'linear',
          r: [5, 0],
          duration: 500,
          offset: 0
        })
        .add({
          targets: '#c3',
          easing: 'linear',
          r: [5, 0],
          duration: 500,
          offset: 400
        })
        .add({
          targets: '#c2',
          easing: 'linear',
          r: [5, 0],
          duration: 500,
          offset: 600
        })
        .add({
          targets: '#c1',
          easing: 'linear',
          r: [5, 0],
          duration: 500,
          offset: 900
        })
        .add({
          targets: '#lines line',
          easing: 'linear',
          strokeDashoffset: [0, anime.setDashoffset],
          duration: 500,
          offset: 300
        })
        .add({
          targets: '#lines polyline',
          easing: 'linear',
          strokeDashoffset: [0, anime.setDashoffset],
          duration: 1000,
          offset: 300
        })
  } else if (count == 4) {
    Step4 = anime.timeline({
        autoplay: false,
        })
          //rects_etap1
        .add({
            targets: rectsGroup,
            easing: 'linear',
            opacity: [1, 0],
            duration: 1000,
            offset: 0
          })
          //change color
        .add({
            targets: '#block_animation',
            easing: 'linear',
            background: ['#eaf0ee','#f9fcf9'],
            duration: 1500,
            offset: 0
          })
          //move red box circle
        .add({
            targets: ['#c_box_red', '#c_red'],
            easing: 'linear',
            translateX: [0, 48],
            translateY: [0, -36],
            r: [5, 10],
            duration: 1000,
            offset: 500
          })
        .add({
            targets: '#c_red',
            easing: 'linear',
            opacity: [1, 0],
            duration: 1000,
            offset: 500
          })
          //move blue box circle 
        .add({
            targets: '#c_box_blue',
            easing: 'linear',
            translateX: [0, -25],
            translateY: [0, -23],
            r: [5, 15],
            fill: '#5079B7',
            duration: 1000,
            offset: 500
          });
  } else if (count == 5) {
    Step5 = anime({
              targets: ['#icon', '#hand'],
              autoplay: false,
              easing: 'linear',
              opacity: [0, 1],
              duration: 500
            });
  } else if (count == 6) {
    Step6 = anime.timeline({
        autoplay: false,
        })
        //move hand
            .add({
              targets: '#hand',
              easing: 'linear',
              translateX: [0, 21],
              translateY: [0, -8],
              duration: 500,
              offset: 0
            })
            .add({
              targets: '#finger_click',
              easing: 'linear',
              opacity: [0, 1, 0],
              duration: 400,
              offset: 700
            })
            //show red box
            .add({
              targets: '#red_box_content',
              easing: 'linear',
              opacity: [0, 1],
              duration: 200,
              offset: 900
            })
            //show text 1
            .add({
              targets: '#name tspan',
              easing: 'linear',
              opacity: [0, 1],
              delay: function(el, i) { return 100*i;},
              duration: 10,
              offset: 900
            })
            .add({
              targets: '#hobe tspan',
              easing: 'linear',
              opacity: [0, 1],
              delay: function(el, i) { return 100*i;},
              duration: 10,
              offset: 1400
            });
  } else if (count == 7) {
    Step7 = anime.timeline({
        autoplay: false,
        })
          .add({
            targets: '#hobe tspan',
            easing: 'linear',
            opacity: [1, 0],
            delay: function(el, i) { return 900 - 100*i;},
            duration: 10,
            offset: 700
           })
          .add({
            targets: '#name tspan',
            easing: 'linear',
            opacity: [1, 0],
            delay: function(el, i) { return 500 - 100*i;},
            duration: 10,
            offset: 1600
          })
          //move hand 2
          .add({
            targets: '#hand',
            easing: 'linear',
            translateX: [21, 0],
            translateY: [-8, 10],
            duration: 500,
            offset: 0
          })
          .add({
            targets: '#finger_click',
            easing: 'linear',
            opacity: [0, 1],
            duration: 200,
            offset: 1100
          })
          .add({
            targets: '#finger_click',
            easing: 'linear',
            opacity: [1, 0],
            duration: 200,
            offset: 1300
          })
          //show text 2
          .add({
            targets: '#name2 tspan',
            easing: 'linear',
            opacity: [0, 1],
            delay: function(el, i) { return 100*i;},
            duration: 10,
            offset: 2200
          })
          .add({
            targets: '#hobe2 tspan',
            easing: 'linear',
            opacity: [0, 1],
            delay: function(el, i) { return 70*i;},
            duration: 10,
            offset: 2800
          });
  } else if (count == 8) {
    Step8 = anime.timeline({
        autoplay: false,
        })
          //icon move out box ------------- etap 2
          .add({
            targets: '#icon',
            easing: 'linear',
            translateX: [0, -66],
            translateY: [0, 10],
            scale: [1, 1.3],
            duration: 1000,
            offset: 0
          })
          .add({
            targets: '#clip_icon',
            easing: 'linear',
            r: 20,
            duration: 1000,
            offset: 0
          })
        // move boxes
          .add({
            targets: ['#red_box', '#red_box_fill', '#blue_box', '#hand', '#red_box_content', '#text_icon'],
            easing: 'linear',
            translateY: [0, -60],
            duration: 1000,
            offset: 0
          })
          .add({
            targets: '#c_box_blue',
            easing: 'linear',
            translateX: [-25, -25],
            translateY: [-23, -83],
            duration: 1000,
            offset: 0
          })
          .add({
            targets: ['#c_box_red', '#c_red'],
            easing: 'linear',
            translateX: [48, 48],
            translateY: [-36, -96],
            duration: 1000,
            offset: 0
          })
        //change color 2
          .add({
            targets: '#block_animation',
            easing: 'linear',
            background: '#ffffff',
            duration: 1500,
            offset: 0
          })
  } else if (count == 9) {
    Step9 = anime.timeline({
        autoplay: false,
        })
        // fade out blue box
        .add({
          targets: ['#blue_box','#text_icon', '#c_box_blue'],
          easing: 'linear',
          opacity: [1, 0],
          duration: 1000,
          offset: 0
        })
        //move red box
        .add({
          targets: ['#red_box', '#red_box_fill', '#hand', '#red_box_content'],
          easing: 'linear',
          translateX: [0, 60],
          translateY: [-60, -60],
          duration: 1000,
          offset: 500
        })
        .add({
          targets: ['#c_box_red', '#c_red'],
          easing: 'linear',
          translateX: [48, 108],
          translateY: [-96, -96],
          duration: 1000,
          offset: 500
        })
  } else if (count == 10) {
    Step10 = anime.timeline({
        autoplay: false,
        })
        //show message
        .add({
          targets: '#finger_click',
          easing: 'linear',
          opacity: [0, 1, 0],
          duration: 400,
          offset: 0
        })
        .add({
          targets: '#message',
          easing: 'linear',
          opacity: [0, 1],
          duration: 500,
          offset: 200
        });
  } else if (count == 11) {
    Step11 = anime.timeline({
        autoplay: false,
        })
        //chenge red box
        .add({
          targets: '#hand',
          easing: 'linear',
          translateX: [60, 55],
          translateY: [-60, -65],
          duration: 500,
          offset: 0
        })
        .add({
          targets: '#finger_click',
          easing: 'linear',
          opacity: [0, 1],
          duration: 200,
          offset: 500
        })
        .add({
          targets: '#finger_click',
          easing: 'linear',
          opacity: [1, 0],
          duration: 200,
          offset: 700
        })
        .add({
          targets: '#check_x',
          easing: 'linear',
          opacity: [1, 0],
          duration: 50,
          offset: 700
        })
        .add({
          targets: '#check_mark2',
          easing: 'linear',
          opacity: [0, 1],
          duration: 50,
          offset: 750
        });
  } else if (count == 12) {
    Step12 = anime.timeline({
        autoplay: false,
        })
        .add({
          targets: ['#box_rect', '#box_rect_fill'],
          easing: 'linear',
          height: [25, 60],
          duration: 500,
          offset: 300
        })
        .add({
          targets: '#box_lines_text line',
          easing: 'linear',
          x1: [11.3, 52],
          x2: [41.3, 75],
          duration: 500,
          offset: 0
        });
  } else if (count == 13) {
    Step13 = anime({
          targets: ['#hand', '#icon', '#message'],
          easing: 'linear',
          opacity: [1, 0],
          duration: 500
        });
  } else if (count == 14) {
    Step14 = anime.timeline({
        autoplay: false,
        })
        .add({
          targets: '#pointer',
          easing: 'linear',
          opacity: [0, 1],
          translateX: {value: -30, delay: 500, duration: 1000},
          translateY: {value: 20, delay: 500, duration: 1000},
          duration: 500,
          offset: 0
        })
        .add({
          targets: ['#red_box_fill', '#box_rect_fill', '#c_red'],
          easing: 'linear',
          opacity: [0, 1],
          duration: 1000,
          offset: 0
        })
        .add({
          targets: '#red_box',
          easing: 'linear',
          stroke: ['#DC4826', '#eaf0ee'],
          duration: 1000,
          offset: 0
        })
        .add({
          targets: '#red_box_content line',
          easing: 'linear',
          stroke: ['#DC4826', '#000000'],
          duration: 1000,
          offset: 0

        })
        .add({
          targets: '#box_rect',
          easing: 'linear',
          stroke: ['#DC4826', '#feef35'],
          duration: 1000,
          offset: 0
        })
        .add({
          targets: '#c_box_red',
          easing: 'linear',
          stroke: ['#DC4826', '#c0cbc6'],
          duration: 1000,
          offset: 0
        })
       //change color 
        .add({
          targets: '#block_animation',
          easing: 'linear',
          background: ['#ffffff', '#f9fcf9'],
          duration: 1500,
          offset: 0
        });
  }


  createSteps[count] = false;
}


for (var i = 0; i < 30; i++) {
  createSteps[i] = true;
}

createSquare(centerX, centerY, sizeRect);
rects.forEach(animateSquare);



function playStep(step, tLine) {
    if (step == -1) { 
            tLine.play();
            tLine.reverse(); 
    } else {
      tLine.restart();
    }
}


function moveProcess(count, step) {

  var time = 0;

  if (step == -1) {
      count = count + 1;
  } 

  if (createSteps[count] == true) {
      createTimelines(count);
  }

  if (count == 1) { 
      playStep(step, Step1);
      time = 1000;
    } else if (count == 2) {
      playStep(step, Step2);
      time = 1600;
    } else if (count == 3){
      playStep(step, Step3);
      time = 1500;
    } else if (count == 4) {
      document.getElementById('c_red').style.fill = '#DC4826';
      playStep(step, Step4);
      time = 1500;
    } else if (count == 5) {
      playStep(step, Step5);
      time = 500;
    } else if (count == 6) {
      playStep(step, Step6);
      time = 2300;
    } else if (count == 7) {
      playStep(step, Step7);
      time = 3500;
    } else if (count == 8) {
      playStep(step, Step8);
      time = 1500;
    } else if (count == 9) {
      playStep(step, Step9);
      time = 1500;
    } else if (count == 10) {
      playStep(step, Step10);
      time = 700;
    } else if (count == 11) {
      playStep(step, Step11);
      time = 900;
    } else if (count == 12) {
      playStep(step, Step12);
      time = 800;
    } else if (count == 13) {
      playStep(step, Step13);
      time = 500;
    } else if (count == 14) {
      document.getElementById('c_red').style.fill = '#c0cbc6';
      playStep(step, Step14);
      time = 1500;
    }

    setTimeout(function() { startStep = true;}, time);

}






function onWheel(e) {

	e = e || window.event;
  delta = e.deltaY || e.detail || e.wheelDelta;

  if (startStep == true) {
      startStep = false;
      var prevCountScroll = countScroll;
      countScroll += delta / 100;

      if (countScroll < 0) {
        countScroll = 0; 
        prevCountScroll = 0;
      } else if (countScroll > 14) {
        countScroll = 15; 
        prevCountScroll = 14;
      }


      var vectorStep = countScroll - prevCountScroll;

      moveProcess(countScroll, vectorStep);
  }

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