window.onscroll = function() {startAnimation()};

function startAnimation() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("getupmobile").style.display = 'block';
    } else {
        document.getElementById("getupmobile").style.display = 'none';
    }
}