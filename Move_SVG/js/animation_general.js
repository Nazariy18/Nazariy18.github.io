s = Snap.select("#Animation");


//car
var showCar = s.select('#car');
var showCorpus = s.select('#corpus');
showCar.attr({'transform' : 'translate(-1200, 0)'});

function fmoveCar1() {
	showCar.stop().animate({'transform' : 'translate(0, 0)'}, 8000, mina.easein, function() {
		clearInterval(funMoveCorpus); showCorpus.animate({'transform' : 'translate(0, 0)'}, 500, mina.linear);
	});
}

fmoveCar1();


function fmoveCorpus() {
	 showCorpus.stop().animate({'transform' : 'translate(0, 3)'}, 500, mina.linear, function() {
	 		showCorpus.animate({'transform' : 'translate(0, -4)'}, 500, mina.linear);
	 });
}

var funMoveCorpus = setInterval(fmoveCorpus, 1050);

//clouds
var showCloud1 = s.select('#cl1');
var showCloud2 = s.select('#cl2');
var showCloud3 = s.select('#cl3');
var showCloud4 = s.select('#cl4');
var showCloud5 = s.select('#cl5');

function moveClouds1() {
 	showCloud1.stop().animate({'transform' : 'translate(150, 0)'}, 120000, mina.linear, function() {
				showCloud1.attr({'transform' : 'translate(-1500, 0)'});
				});
}
function moveClouds2() {
	showCloud2.stop().animate({'transform' : 'translate(350, 0)'}, 136000, mina.linear,  function() {
				showCloud2.attr({'transform': 'translate(-1500, 0)'});
				});
}
function moveClouds3() {
	showCloud3.stop().animate({'transform' : 'translate(400, 0)'}, 152000, mina.linear, function() {
				showCloud3.attr({'transform': 'translate(-1200, 0)'});
				});
}
function moveClouds4() {
	showCloud4.stop().animate({'transform' : 'translate(1500, 0)'}, 256000, mina.linear, function() {
				showCloud4.attr({'transform': 'translate(-400, 0)'});
				});
}
function moveClouds5() {
	showCloud5.stop().animate({'transform' : 'translate(1500, 0)'}, 304000, mina.linear, function() {
				showCloud5.attr({'transform': 'translate(-200, 0)'});
				});
}

function fcloudsStart() {
		showCloud1.stop().animate({'transform' : 'translate(150, 0)'}, 60000, mina.linear, function() {
				showCloud1.attr({'transform' : 'translate(-1500, 0)'});
				});
		showCloud2.stop().animate({'transform' : 'translate(350, 0)'}, 68000, mina.linear,  function() {
				showCloud2.attr({'transform': 'translate(-1500, 0)'});
				});
		showCloud3.stop().animate({'transform' : 'translate(400, 0)'}, 76000, mina.linear, function() {
				showCloud3.attr({'transform': 'translate(-1200, 0)'});
				});
		showCloud4.stop().animate({'transform' : 'translate(1500, 0)'}, 200000, mina.linear, function() {
				showCloud4.attr({'transform': 'translate(-400, 0)'});
				});
		showCloud5.stop().animate({'transform' : 'translate(1500, 0)'}, 250000, mina.linear, function() {
				showCloud5.attr({'transform': 'translate(-200, 0)'});
				});
}

fcloudsStart();
setInterval(moveClouds1, 120500);
setInterval(moveClouds2, 13500);
setInterval(moveClouds3, 152500);
setInterval(moveClouds4, 256500);
setInterval(moveClouds5, 304500);

//Fanari
var showProminL = s.select('#prominL');
var showProminR = s.select('#prominR');
var showOpen = s.select('#open');

showProminL.attr({'opacity' : 0});
showProminR.attr({'opacity' : 0});

function fblinkPromin() {
	showProminL.stop().animate({'opacity' : 1}, 3000, mina.easein, function() {
					showProminL.animate({'opacity' : 0}, 3000, mina.linear);
					});
	showProminR.stop().animate({'opacity' : 1}, 3000, mina.easein, function() {
					showProminR.animate({'opacity' : 0}, 3000, mina.linear);
					});
	showOpen.stop().animate({'opacity' : 1}, 3000, mina.easein, function() {
					showOpen.animate({'opacity' : 0}, 1000, mina.linear);
					});
}

fblinkPromin();
setInterval(fblinkPromin, 6100);

//express_line
var showElineL = s.select('#lineBord2');
var showElineR = s.select('#lineBord1');

var setEachLine = function(a) {
    a.attr({
            'stroke-dashoffset': a.getTotalLength(),
            'stroke-dasharray': a.getTotalLength(),
        });
}

setEachLine(showElineL);
setEachLine(showElineR);

function fExpressLine() {
	showElineL.stop().animate({'stroke-dashoffset': 0}, 5000, mina.linear); 
	showElineR.stop().animate({'stroke-dashoffset': 0}, 5000, mina.linear); 
}

fExpressLine();

//loundromat
var showLoundromat = s.select('#rectV');

function fshowLondromat() {
	showLoundromat.stop().animate({'width': 400}, 2000, mina.linear, function() {
						showLoundromat.animate({'height': 100, 'y': 400}, 5000, mina.linear);
						});
}

fshowLondromat();

//vishalka
var showJacet = s.select('#jacet');
var showSveter = s.select('#sveter');
var showDress = s.select('#dress1');

function fshowClothes() {
	showJacet.animate({'opacity' : 0}, 500, mina.linear, function() {
		showJacet.stop().animate({'opacity' : 1}, 3000, mina.backin);
	});
	showSveter.animate({'opacity' : 0}, 500, mina.linear, function() {
		showSveter.stop().animate({'opacity' : 1}, 5000, mina.backin);
	});
	showDress.animate({'opacity' : 0}, 500, mina.linear, function() {
		showDress.stop().animate({'opacity' : 1}, 7000, mina.backin);
	});
}

fshowClothes();

//girlScale
var showGirlScale = s.select('#girl_scale');
showGirlScale.attr({'transform' : 's0.5t0,50', 'opacity' : 0});

function fgirlScale() {
	showGirlScale.attr({'opacity' : 1});
	showGirlScale.stop().animate({'transform' : 's1t0,0'}, 5000, mina.linear, function() {
	});
}

fgirlScale();

//left
var showClientLeft = s.select('#client_left');
var showClientRight = s.select('#client_right');
var showGrilLeft = s.select('#girl_with_dress');
var showGirlRight = s.select('#girl_right');
var showHeart = s.select('#heart');
var showHeart2 = s.select('#heart2');

showClientLeft.attr({'opacity' : 0});
showClientRight.attr({'opacity' : 0});
showGrilLeft.attr({'opacity' : 0});
showGirlRight.attr({'opacity' : 0});
showHeart.attr({'opacity' : 0});
showHeart2.attr({'opacity' : 0});

function fshowLeftGirls() {
	showGrilLeft.animate({'opacity' : 1}, 1500, mina.linear);
	showClientLeft.animate({'opacity' : 1}, 1500, mina.linear);

	showHeart.attr({'transform' : 'translate(0, 0)'});
	showHeart.animate({'opacity' : 1, 'transform' : 'translate(20, -100)'}, 3000, mina.linear, function() {
			showHeart.animate({'opacity' : 0, 'transform' : 'translate(80, -400)'}, 8000, mina.linear);
	});

	
}

function fshowRightGirls() {

	showGirlRight.animate({'opacity' : 1}, 1500, mina.linear);
	showClientRight.animate({'opacity' : 1}, 1500, mina.linear);

	showHeart2.attr({'transform' : 'translate(0, 0)'});
	showHeart2.animate({'opacity' : 1, 'transform' : 'translate(-10, -100)'}, 2500, mina.linear, function() {
			showHeart2.animate({'opacity' : 0, 'transform' : 'translate(-40, -400)'}, 7500, mina.linear);
	});
}

fshowLeftGirls();
fshowRightGirls();



var showtButtonPlay = s.select('#gplay');
var showCirclePlay = s.select('#circlreplay');
var showtPlay = s.select('#tricplay');

var showtCirclePromins = s.select('#clip_promins_r');
var showPromins = s.select('#promins_plus');


function fmovePromin() {

	showtCirclePromins.attr({'r' : 30});
	showtCirclePromins.animate({'r' : 500}, 2000, mina.linear);

	showPromins.attr({'opacity' : 0});
	showPromins.animate({'opacity' : 0.4}, 2000, mina.linear);

	setTimeout(fEndPromin, 5000);

}

function fEndPromin() {
	showPromins.animate({'opacity' : 0}, 1000, mina.linear, function() {
	 showtCirclePromins.attr({'r' : 30}); fmovePromin(); });
}

fmovePromin();

function fhoverin() {
	showCirclePlay.attr({'fill' : '#FFF'});
	showtPlay.attr({'fill' : '#1D82C5', 'stroke' : '#1D82C5'});
}

function fhoverout() {
	showCirclePlay.attr({'fill' : '#1D82C5'});
	showtPlay.attr({'fill' : '#fff', 'stroke' : '#fff'});
}

gplay.onmouseover = fhoverin;
gplay.onmouseout = fhoverout;

