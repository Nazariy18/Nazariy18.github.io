window.onscroll = function() {startAnimation()};

function startAnimation() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {

    	document.getElementById("getupmobile").style.display = 'block';
    	document.querySelector(".vertical.flip-container .flipper").style.MozTransform = 'rotateX(-180deg)';
    	document.querySelector(".vertical.flip-container .flipper").style.WebkitTransform = 'rotateX(-180deg)';
    	document.querySelector(".vertical.flip-container .flipper").style.transform = 'rotateX(-180deg)';

    } else {
      document.querySelector(".vertical.flip-container .flipper").style.MozTransform = 'rotateX(0deg)';
    	document.querySelector(".vertical.flip-container .flipper").style.WebkitTransform = 'rotateX(0deg)';
    	document.querySelector(".vertical.flip-container .flipper").style.transform = 'rotateX(0deg)';

    	document.getElementById("getupmobile").style.display = 'none';
    }
}
