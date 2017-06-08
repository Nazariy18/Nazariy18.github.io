//Washer
var s = Snap.select("#washer_pile_soap");

var showWaterWave = s.select('#waterwave1');
var showBlueCircleUp = s.selectAll('#blue_circle_up1 > *');
var showBlueCircleDown = s.selectAll('#blue_circle_down1 > *');

var showButton = s.selectAll('#bottom1 > *');

var setForEachShow = function(a) {
    a.forEach(function(letter) {
        letter.attr({
             transform: 'S0,0'
        });
    });
}

var setForEachHiden = function(a) {
    a.forEach(function(line) {
        line.attr({
           'opacity': 0
        });
    });
}


showWaterWave.stop().animate({'transform' : 'translate(-275, 0)'}, 2000, mina.linear);
function fshowWaterWave() {
		showWaterWave.attr({'transform' : 'translate(0, 0)'});
		showWaterWave.stop().animate({'transform' : 'translate(-275, 0)'}, 2000, mina.linear);	
}

setInterval(fshowWaterWave, 2050);

var i1=0;
function fBulb() {
  	   	showBlueCircleUp[i1].animate({'transform': 'S1,1'}, 1000, mina.linear, function() {
				showBlueCircleUp[i1].animate({'transform': 'S0,0'}, 300, mina.linear);
				});

  	   	showBlueCircleDown[3-i1].animate({'transform': 'S1,1'}, 1000, mina.linear, function() {
				showBlueCircleDown[3-i1].animate({'transform': 'S0,0'}, 300, mina.linear);
				});
				i1++;
				if (i1 == 4) {i1 = 0;}
 }

setInterval(fBulb, 500);

setForEachHiden(showButton);

var i2 = 0;
function fButMig() {
  	showButton[i2].stop().animate({'opacity': '1'}, 300, mina.linear, function() {
				showButton[i2].animate({'opacity': '0'}, 500, mina.linear);
				});
  
				i2++;
				if (i2 == 3) {i2 = 0;}
}

fButMig();
setInterval(fButMig, 900);
