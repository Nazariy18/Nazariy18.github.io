var s = Snap.select("#logo_print_works");
var showPink = s.selectAll('#pink > *');
var showYellow = s.selectAll('#yellow > *');
var showBlue = s.selectAll('#blue > *');
var showSilver = s.selectAll('#silver > *');
var showText = s.selectAll('#print_works > *');

var showFigure = function(a) {
    a.forEach(function(letter) {
        letter.attr({
            'opacity': 0,
             transform: 'S0,0'
        });
    });
}

showFigure(showPink);
showFigure(showYellow);
showFigure(showBlue);
showFigure(showSilver);

showText.forEach(function(letter) {
        letter.attr({
            'opacity': 0
        });
    });



var i=0; 
  function funDrawPink () { 
        showPink[i].stop().animate({transform: 'S1,1', 'opacity': 1}, 300, mina.linear); 
        i += 1; 
        if (i == showPink.length) {clearInterval(intervalDrawPink);} 
    } 

 var intervalDrawPink = setInterval(funDrawPink, 50);

var j=0; 
  function funDrawYellow () { 
        showYellow[j].stop().animate({transform: 'S1,1', 'opacity': 1}, 300, mina.linear); 
        j += 1; 
        if (j == showYellow.length) {clearInterval(intervalDrawYellow);} 
    } 

 var intervalDrawYellow = setInterval(funDrawYellow, 50);

 var b=0; 
  function funDrawBlue () { 
        showBlue[b].stop().animate({transform: 'S1,1', 'opacity': 1}, 300, mina.linear); 
        b += 1; 
        if (b == showBlue.length) {clearInterval(intervalDrawBlue);} 
    } 

 var intervalDrawBlue = setInterval(funDrawBlue, 50);

var s=0; 
  function funDrawSilver () { 
        showSilver[s].stop().animate({transform: 'S1,1', 'opacity': 1}, 300, mina.linear); 
        s += 1; 
        if (s == showSilver.length) {clearInterval(intervalDrawSilver);} 
    } 

 var intervalDrawSilver = setInterval(funDrawSilver, 50);

var t=0; 
  function funDrawText () { 
        showText[t].stop().animate({'opacity': 1}, 1000, mina.linear); 
        t += 1; 
        if (t == showText.length) {clearInterval(intervalDrawText);} 
    } 

 var intervalDrawText = setInterval(funDrawText, 300);