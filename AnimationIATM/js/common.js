var s = Snap.select("#intervene-icon");
var dashesL = s.selectAll('#left-intervene > *');
var dashesR = s.selectAll('#right-intervene > *');
var textInterveneAll = s.selectAll('#Intervene > *');

s = Snap.select("#assess-icon");
var solidLineLeft = s.select('#left-assess');
var solidLineRight = s.select('#right-assess');
var textAssessAll = s.selectAll('#ASSESS > *');

s = Snap.select("#treat-icon");
var solidLineLeft3 = s.select('#left-treat');
var solidLineRight3 = s.select('#right-treat');
var fillLineLeft3 = s.select('#fill-left-treat');
var fillLineRight3 = s.select('#fill-right-treat');
var textTrealAll = s.selectAll('#TREAT > *');

s = Snap.select("#maintain-icon");
var solidLineLeft4 = s.select('#left-maintain');
var solidLineRight4 = s.select('#right-maintain');
var maskaLineLeft4 = s.select('#fill-left-maintain');
var maskaLineRight4 = s.select('#fill-right-maintain');
var textMaintainAll = s.selectAll('#MAINTAIN > *');


var setForEachLine = function(a) {
    a.forEach(function(line) {
        line.attr({
            'stroke-dashoffset': line.getTotalLength(),
            'stroke-dasharray': line.getTotalLength()
        });
    });
}

var setForLine = function(a, o) {
    if(o == 1) {
        a.attr({
            'opacity': 0
        });
    }
    else {
        a.attr({
            'stroke-dashoffset': a.getTotalLength(),
            'stroke-dasharray': a.getTotalLength()
        });
    }
}

var setForText = function(a) {
    a.forEach(function(letter) {
        letter.attr({
            'opacity': 0
        });
    });
}


setForEachLine(dashesL);
setForEachLine(dashesR);
setForText(textInterveneAll);


setForLine(solidLineLeft);
setForLine(solidLineRight);
setForText(textAssessAll);


setForLine(solidLineLeft3, 1);
setForLine(solidLineRight3, 1);
setForLine(fillLineLeft3, 1);
setForLine(fillLineRight3, 1);
setForText(textTrealAll);


setForLine(solidLineLeft4, 1);
setForLine(solidLineRight4, 1);
setForLine(maskaLineLeft4, 1);
setForLine(maskaLineRight4, 1);
setForText(textMaintainAll);


var animateFirst= function() {
    var i=0; 
    function fdashed () { 
        dashesL[i].stop().animate({'stroke-dashoffset': 0}, 100, mina.linear); 
        dashesR[i].stop().animate({'stroke-dashoffset': 0}, 100, mina.linear); 
        i += 1; 
        if (i==19) {clearInterval(Fdashed);} 
    } 

    var Fdashed = setInterval(fdashed, 70); 

    var j=8; 
    function ftext1 () { 
        textInterveneAll[j].stop().animate({'opacity': 1}, 300, mina.linear); 
        j -= 1; 
        if (j==-1) {clearInterval(Ftext1);} 
    } 

    var Ftext1 = setInterval(ftext1, 115);

}

var animateSecond = function() {
    solidLineLeft.stop().animate({'stroke-dashoffset': 0}, 1300, mina.linear); 
    solidLineRight.stop().animate({'stroke-dashoffset': 0}, 1300, mina.linear); 

    var k=0; 
    function ftext2 () { 
        textAssessAll[k].stop().animate({'opacity': 1}, 700, mina.linear); 
        k += 1; 
        if (k==6) {clearInterval(Ftext2);} 
    } 

    var Ftext2 = setInterval(ftext2, 150);
}

var animateThird = function() {
    solidLineLeft3.stop().animate({'opacity': 1}, 575, mina.linear, function () { 
        fillLineLeft3.stop().animate({'opacity': 1}, 575, mina.linear);}); 
    solidLineRight3.stop().animate({'opacity': 1}, 575, mina.linear, function () { 
        fillLineRight3.stop().animate({'opacity': 1}, 575, mina.linear); 
    }); 

    var h=0; 
    function ftext3 () { 
        textTrealAll[h].stop().animate({'opacity': 1}, 1250, mina.linear); 
        h += 1; 
        if (h==5) {clearInterval(Ftext3);} 
    } 

    var Ftext3 = setInterval(ftext3, 150);
}

var animateFourth = function() {
    solidLineLeft4.stop().animate({'opacity': 1}, 575, mina.linear, function () { 
        maskaLineLeft4.stop().animate({'opacity': 1}, 575, mina.linear); 
    }); 
    solidLineRight4.stop().animate({'opacity': 1}, 575, mina.linear, function () { 
        maskaLineRight4.stop().animate({'opacity': 1}, 575, mina.linear); 
    }); 

    var p=0; 
    function ftext4 () { 
        textMaintainAll[p].stop().animate({'opacity': 1}, 1250, mina.linear); 
        p += 1; 
        if (p==8) {clearInterval(Ftext4);} 
    } 

    var Ftext4 = setInterval(ftext4, 80);
}


    animateFirst();
		setTimeout(function(){animateSecond();}, 1300);
		setTimeout(function(){animateThird();}, 2600);
		setTimeout(function(){animateFourth();}, 3900);


