var timeline = anime.timeline({
        loop: false,
        autoplay: true
    });

function animationPart1() {
	timeline
        .add({
            	targets: '#lines-down',
            	easing: 'easeInOutSine',
            	duration: 1000,
             	translateY: [0, -30],
             	offset: 500
         	})
        .add({
                targets: '#lines-upper',
                easing: 'easeInOutSine',
                duration: 1000,
                translateY: [0, -45],
                offset: 500
            });

}

function blinkPoints() {
	anime({
	  targets: '#points-floor',
	  easing: 'easeOutSine',
	  duration: 2000,
	  opacity: 1,
	  delay: 0,
	  direction: 'alternate',
	  loop: true
	});

}

blinkPoints();
animationPart1();
