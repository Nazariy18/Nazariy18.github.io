var s = Snap.select("#Layer_1");
//tree
var showColum = s.selectAll('#colum > *');
var showLeaves = s.selectAll('#leaves > *');
var showBerry = s.selectAll('#berry > *');
var showValuta = s.selectAll('#valuta > *');
var showFlower = s.select('#frect');
//king
var showKing = s.select('#krect');
//monitor back
var showMB = s.select('#mbrect');
var showYeBarMB = s.selectAll('#barYellowMB > *');
var showBlueBarMB = s.selectAll('#barBlueMB > *');
var showAks = s.select('#aksMB');
//land
var showLand = s.selectAll('#land > *');
//Tablets
var showTablets = s.selectAll('#strokeTablets > *');
var showFillTablets = s.selectAll('#fillTablets > *');
//Microscope
var showMCR = s.select('#rectMCR');
//Horse
var showHorse = s.select('#rectHorse');
var showHorseFill = s.select('#rectFillHorse');
//monitor front
var showMF = s.select('#rectMF');
var showFillMF = s.select('#rectFillMF');
var showColumMF = s.selectAll('#columMF > *');
var showConturB1 = s.select('#conturBlue1');
var showConturB2 = s.select('#conturBlue2');
var showConturB3 = s.select('#conturBlue3');
var showBarMF = s.selectAll('#barMF > *');
//Clock
var showContur = s.select('#conturClock');
var showArrowClock = s.select('#arrowClock');
var showFillClock = s.select('#fillClock');
var showHour = s.select('#hour');
var showMinute = s.select('#minute');
//Arrow Up
var showArrow = s.select('#rectArrowUp');
//Letter
var showList = s.select('#list');
var showBarLetter = s.selectAll('#barLetter > *');
var showLineLetter = s.selectAll('#lineLetter > *');
var showTriangle = s.selectAll('#trianglesL > *');
//Points
var showPoints = s.select('#points');
//Lamp
var showTsokol = s.select('#tsokol');
var showLamp = s.select('#rectLamp');
var showBlik = s.select('#blik');
var showProminLamp = s.select('#promin');
//Horn
var showStrokeHorn = s.select('#rectHorn');
var showBlueHorn = s.select('#blueHorn');
var showProminHorn = s.select('#prominHorn');
//Diagram Up
var showYellowDU = s.select('#conturYDU');
var showBlueDU = s.select('#conturBDU');
var showStrokeDU = s.select('#strokeDiagrsmUp');
var showWhiteDU = s.select('#whiteSector');
//Message
var showMessage = s.selectAll('#message > *');
//-----Rocket
var showRocket = s.select('#racet');

//-------------------------------------------------------------------------
var setForEachLine = function(a) {
    a.forEach(function(line) {
        line.attr({
            'stroke-dashoffset': line.getTotalLength(),
            'stroke-dasharray': line.getTotalLength(),
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

var setForEachShow = function(a) {
    a.forEach(function(letter) {
        letter.attr({
             transform: 'S0,0'
        });
    });
}

var setEachLine = function(a) {
    a.attr({
            'stroke-dashoffset': a.getTotalLength(),
            'stroke-dasharray': a.getTotalLength(),
        });
}

setForEachLine(showColum);
setForEachLine(showLand);


showFlower.attr({'y' : 180});
showKing.attr({'y' : -80});
showMB.attr({'y' : 211, 'x': 450});
showMCR.attr({'y' : 211});
showHorse.attr({'y' : 211});
showHorseFill.attr({'y' : 211});
showMF.attr({'y' : 40});
showFillMF.attr({'y' : 40});
showArrow.attr({'y' : 150});
showLamp.attr({'y' : 112});
showStrokeHorn.attr({'x' : 85});

showList.attr({'opacity' : 0});
showArrowClock.attr({'opacity' : 0});
showTsokol.attr({'opacity' : 0});
showBlik.attr({'opacity' : 0});
showStrokeDU.attr({'opacity' : 0});
showProminLamp.attr({'opacity' : 0});
showBlueHorn.attr({'opacity' : 0});
showProminHorn.attr({'opacity' : 0});
showAks.attr({'opacity' : 0});
showFillClock.attr({'opacity' : 0});

showRocket.attr({'transform' : 'translate(0, 80)', 'opacity': 0});

showPoints.attr({'transform' : 'S0,0'});
showWhiteDU.attr({'transform' : 'S0,0'});


setEachLine(showContur);
setEachLine(showConturB1);
setEachLine(showConturB2);
setEachLine(showConturB3);
setEachLine(showYellowDU);
setEachLine(showBlueDU);

showYeBarMB.forEach(function(line) {
        line.attr({
            'width': 0 
        });
    });

showColumMF.forEach(function(line) {
        line.attr({
            'width': 0 
        });
    });

showBarMF.forEach(function(line) {
        line.attr({
            'height': 0,
            'y': 181.7
        });
    });


showBarLetter.forEach(function(line) {
        line.attr({
            'height': 0,
            'y': 166.9
        });
    });




setForEachHiden(showLeaves);
setForEachHiden(showValuta);
setForEachHiden(showTablets);
setForEachHiden(showFillTablets);
setForEachHiden(showBlueBarMB);
setForEachHiden(showLineLetter);
setForEachHiden(showMessage);

setForEachShow(showBerry);
setForEachShow(showTriangle);


//--------------------------------------------------------------------tree
function fTree() {
    var i=0; 
        function fshowColum () { 
            showColum[i].stop().animate({'stroke-dashoffset': 0}, 900, mina.linear); 
            i += 1; 
            if (i == showColum.length) {clearInterval(funColum); } 
        } 

    var funColum = setInterval(fshowColum, 300); 

    var i1=0; 
    function fshowLeaves () { 
        showLeaves[i1].stop().animate({'opacity': 1}, 1000, mina.linear); 
        i1 += 1; 
        if (i1 == showLeaves.length) {clearInterval(funLeaves);} 
    } 

    var funLeaves = setInterval(fshowLeaves, 600);


    var i2=0; 
    function fshowBerry () { 
        showBerry[i2].stop().animate({transform: 'S1,1'}, 500, mina.linear); 
        i2 += 1; 
        if (i2 == showBerry.length) {clearInterval(funBerry); } 
    } 

    var funBerry = setInterval(fshowBerry, 200); 

    var i3=0; 
    function fshowValuta () { 
        showValuta[i3].stop().animate({'opacity': 1}, 1000, mina.linear); 
        i3 += 1; 
        if (i3 == showValuta.length) {clearInterval(funValuta);} 
    } 

    var funValuta = setInterval(fshowValuta, 1100);
}
function fTreeF() {
    showFlower.stop().animate({'y' : 129.64}, 1500, mina.linear); }
//----------------------------land
function fLand() {
    var j=0; 
    function fshowLand () { 
        showLand[j].stop().animate({'stroke-dashoffset': 0}, 2000, mina.linear); 
        j += 1; 
        if (j == showLand.length) {clearInterval(funLand);} 
    } 
    var funLand = setInterval(fshowLand, 100); 

    }

function fKing() {
    showKing.stop().animate({'y' : 70.9}, 2000, mina.linear);
    } 

function fMonitorBack() {
    showMB.stop().animate({'y' : 141.8, 'x': 310.9}, 1000, mina.linear); 

}
function fMonitorBackBA() {
    var i10=0; 
    function fshowBlueBarMB () { 
        showBlueBarMB[i10].stop().animate({'opacity': 1}, 500, mina.linear); 
        i10 += 1; 
        if (i10 == showBlueBarMB.length) {clearInterval(funBlueBarMB);} 
    } 

    var funBlueBarMB = setInterval(fshowBlueBarMB, 200); 

    showAks.stop().animate({'opacity': 1}, 1000, mina.linear); 
}

function fMonitorBackBarY()  {
    var dataYeBarMB = [36.1, 39.2, 57.7];
    var i5=0; 
    function fshowYeBarMB () { 
        showYeBarMB[i5].stop().animate({'width': dataYeBarMB[i5]}, 1000, mina.linear); 
        i5 += 1; 
        if (i5 == showYeBarMB.length) {clearInterval(funYeBarMB);} 
    } 
    var funYeBarMB = setInterval(fshowYeBarMB, 200); 
}

function fTablets() {
    var i4=0; 
    function fshowTablets () { 
        showTablets[i4].stop().animate({'opacity': 1}, 500, mina.linear); 
        i4 += 1; 
        if (i4 == showTablets.length) {clearInterval(funTablets);} 
    } 

    var funTablets = setInterval(fshowTablets, 800); 
}

function fTabletsFill() {
    var i7=0; 
    function fshowFillTablets () { 
        showFillTablets[i7].stop().animate({'opacity': 1}, 500, mina.linear); 
        i7 += 1; 
        if (i7 == showFillTablets.length) {clearInterval(funFillTablets);} 
    } 

    var funFillTablets = setInterval(fshowFillTablets, 500);
}

function fMicroscope() {
    showMCR.stop().animate({'y' : 132.7}, 2000, mina.linear); 
}

function fHorse() {
    showHorse.stop().animate({'y' : 108}, 2000, mina.linear);
    showHorseFill.stop().animate({'y' : 108.1}, 2000, mina.linear);
}

function fMonitorFront() {
    showMF.stop().animate({'y' : 128.9}, 2000, mina.linear);
    showFillMF.stop().animate({'y' : 128.9}, 2000, mina.linear);
    
    var dataBarMF = [14.1, 18.3, 26.8, 29.1, 33];
    var dataBarMFy = [167.6, 163.4, 154.9, 152.6, 148.7];
    var i6=0; 
    function fshowBarMF () { 
        showBarMF [i6].stop().animate({'height': dataBarMF[i6], 'y': dataBarMFy[i6]}, 1000, mina.linear);
        i6 += 1; 
        if (i6 == showBarMF.length) {clearInterval(funBarMF);} 
    } 

    var funBarMF = setInterval(fshowBarMF, 200);
}
function fMonitorFrontColum() {
    var i8=0; 
    function fshowColumMF () { 
        showColumMF[i8].stop().animate({'width': 7.7}, 1000, mina.linear); 
        i8 += 1; 
        if (i8 == showColumMF.length) {clearInterval(funColumMF);} 
    } 

    var funColumMF = setInterval(fshowColumMF, 200);
}
function fMonitorFrontB1() {
    showConturB1.stop().animate({'stroke-dashoffset': 0}, 1000, mina.linear);
 } 

function fMonitorFrontB2() {
    showConturB2.stop().animate({'stroke-dashoffset': 0}, 1000, mina.linear); 
}
function fMonitorFrontB3() {
    showConturB3.stop().animate({'stroke-dashoffset': 0}, 1500, mina.linear);
} 


function fClock() {
    showContur.stop().animate({'stroke-dashoffset': 0}, 1500, mina.linear); 
    showFillClock.stop().animate({'opacity': 1}, 1500, mina.linear); 
}

function fClockA() {
    showArrowClock.stop().animate({'opacity': 1}, 1000, mina.linear); 
}

function fArrowUp() {
    showArrow.stop().animate({'y' : 121.9}, 1000, mina.linear); 
}

function fLetter() {

    showList.stop().animate({'opacity': 1}, 1000, mina.linear);

    var dataBarLetter = [6.1, 10.2, 15.7, 18.6, 22.7, 20.6, 24.7];
    var dataBarLettery = [160.8, 156.7, 151.2, 148.3, 144.2, 146.3, 142.2];
    var i9=0; 
    function fshowBarLetter () { 
        showBarLetter[i9].stop().animate({'height': dataBarLetter[i9], 'y': dataBarLettery[i9] }, 1000, mina.linear); 
        i9 += 1; 
        if (i9 == showBarLetter.length) {clearInterval(funBarLetter);} 
    } 

    var funBarLetter = setInterval(fshowBarLetter, 200); 
}

function fLetterLine() {
    var i11=0; 
    function fshowLineLetter () { 
        showLineLetter[i11].stop().animate({'opacity': 1}, 1000, mina.linear); 
        i11 += 1; 
        if (i11 == showLineLetter.length) {clearInterval(funLineLetter);} 
    } 

    var funLineLetter = setInterval(fshowLineLetter, 200); 
}

function fLetterTr() {
    var i12=0; 
    function fshowTriangle () { 
        showTriangle[i12].stop().animate({'transform': 'S1,1'}, 500, mina.linear); 
        i12 += 1; 
        if (i12 == showTriangle.length) {clearInterval(funTriangle);} 
    } 

   var funTriangle = setInterval(fshowTriangle, 200); 
}

function fPoints() {
    showPoints.stop().animate({'transform': 'S1,1'}, 1500, mina.linear); 
} 

function fLamp() {
    showTsokol.stop().animate({'opacity': 1}, 1000, mina.linear); 
    showLamp.stop().animate({'y' : 86.1}, 1000, mina.linear); 
    showBlik.stop().animate({'opacity': 1}, 1000, mina.linear); 
}
function fLampProminUp() {
    function blikLamp () {
        showProminLamp.attr({'opacity': 0});
        showProminLamp.animate({'opacity': 1}, 1000, mina.linear); 
    }
    setInterval(blikLamp, 1200);

}

function fHorn() {
    showStrokeHorn.stop().animate({'x' : 134.5}, 1200, mina.linear);
    showBlueHorn.stop().animate({'opacity': 1}, 2000, mina.linear); 
}
function fHornPromin() {
     function blikHorn () {
        showProminHorn.attr({'opacity': 0});
        showProminHorn.stop().animate({'opacity': 1}, 1500, mina.linear);
    }
    setInterval(blikHorn, 2000);  
}

function fDiagramUp() {
    showYellowDU.stop().animate({'stroke-dashoffset': 0}, 1000, mina.linear);
}
function fDiagramUpBlue() {
    showBlueDU.stop().animate({'stroke-dashoffset': 0}, 1000, mina.linear);
}
function fDiagramUpWhite() {
    showStrokeDU.stop().animate({'opacity': 1}, 1000, mina.linear); 
    showWhiteDU.stop().animate({'transform': 'S1,1'}, 1000, mina.linear); 
}

function fMessage() {
    var i13=0; 
    function fshowMessage () { 
        showMessage[i13].stop().animate({'opacity': 1}, 800, mina.linear); 
        i13 += 1; 
        if (i13 == showMessage.length) {clearInterval(funMessage);} 
    } 

   var funMessage = setInterval(fshowMessage, 300); 
}

function fRocket() {
    showRocket.stop().animate({'transform' : 'translate(0, 0)', 'opacity': 1}, 1000, mina.linear);
}
   //WORK-----WORK-------


fLand();
fMonitorBack();
fKing();
fTree();
fTablets();
setTimeout('fMicroscope()', 1000);
setTimeout('fMonitorFront()', 1000);
setTimeout('fHorse()', 1500);
setTimeout('fMonitorBackBarY()', 1000);
setTimeout('fClock()', 1000);
setTimeout('fTreeF()', 2500);
setTimeout('fTabletsFill()', 2000);
setTimeout('fArrowUp()', 2500);
setTimeout('fMonitorFrontColum()', 2000);
setTimeout('fMonitorFrontB1()', 2000);
setTimeout('fMonitorFrontB2()', 2700);
setTimeout('fMonitorFrontB3()', 3500);
setTimeout('fLetter()', 2000);
setTimeout('fMonitorBackBA()', 2000);
setTimeout('fPoints()', 2000);
setTimeout('fClockA()', 3000);
setTimeout('fLamp()', 3200);
setTimeout('fHorn()', 3000);
setTimeout('fLetterLine()', 3000);
setTimeout('fDiagramUp()', 3000);
setTimeout('fDiagramUpBlue()', 3700);
setTimeout('fDiagramUpWhite()', 4200);
setTimeout('fMessage()', 4000);
setTimeout('fLetterTr()', 4000);
setTimeout('fLampProminUp()', 4000);
setTimeout('fHornPromin()', 4000);
setTimeout('fRocket()', 4000);



//---MOve
function moveBar1() {
    var z1=0, z2=0, k=1;
    var dataBarLetter1 = [6.1, 10.2, 15.7, 18.6, 22.7, 20.6, 24.7];
    var dataBarLettery1 = [160.8, 156.7, 151.2, 148.3, 144.2, 146.3, 142.2];
    var dataBarMF1 = [14.1, 18.3, 26.8, 29.1, 33];
    var dataBarMFy1 = [167.6, 163.4, 154.9, 152.6, 148.7];
    var dataYeBarMB1 = [36.1, 39.2, 57.7];
    var j2=0; 
    var bh = showHour.getBBox();
    var bm = showHour.getBBox();

    function fshowBarMF1 () { 
        showBarMF[j2%5].stop().animate({'height': dataBarMF1[j2%5]+z1, 'y': dataBarMFy1[j2%5]+z2}, 1000, mina.linear);
        showBarLetter[j2%7].stop().animate({'height': dataBarLetter1[j2%7]+z1, 'y': dataBarLettery1[j2%7]+z2}, 1000, mina.linear);
        showYeBarMB[j2%3].stop().animate({'width': dataYeBarMB1[j2%3]+z1}, 1000, mina.linear); 

        showRocket.stop().animate({'transform' : 'translate(0,'+z1/5+')', 'opacity': 1}, 200, mina.easeInOutBounce);
        
        showHour.attr({'transform' : 'r'+k+','+bh.cx+','+(bh.cy+bh.height/2)});
        showMinute.attr({'transform' : 'r'+k*3+','+bm.cx+','+(bm.cy+bm.height/2)});
        j2 += 1; 
        k += 1;
        if (j2%2==0) {
            z1 = 5;
            z2 = -5;
        }
        else {
            z1 = -5;
            z2 = 5;
            }
    } 
    var funBarMF1 = setInterval(fshowBarMF1, 200);
}

setTimeout('moveBar1()', 4800);
