var timeline = anime.timeline({
        loop: true,
        autoplay: true
    });

function mainMove () {

    var wire = anime.path('#wire');

    anime({
      targets: '#insting-animation #signal',
      easing: 'easeInQuad',
      duration: 3000,
      r: {value: 3, duration: 500},
      translateX: wire('x'),
      translateY: wire('y'),
      loop: true,
      offset: 1000
    });

	timeline
        .add({
            	targets: '#insting-animation #cursor',
            	easing: 'easeInOutSine',
            	duration: 900,
             	translateX: [0, 100],
             	translateY: [0, 90],
             	scale: [{value: 0.7, duration: 200, delay: 1000},
             			{value: 1, duration: 200}],
             	offset: 500
         	})
        .add({
            	targets: '#insting-animation #screen1 #screen1-block',
            	easing: 'easeInOutSine',
             	scale: [{value: 0.95, duration: 200},
             			{value: 1, duration: 200}],
             	offset: 1500
         	})
        .add({
            	targets: '#insting-animation #screen1',
            	easing: 'easeInOutSine',
            	duration: 300,
            	translateX: -5,
            	translateY: 5,
            	opacity: 0,
             	offset: 2000
         	})
        .add({
            	targets: '#insting-animation #screen2',
            	easing: 'easeInOutSine',
            	duration: 400,
            	translateX: [-10, 0],
            	translateY: [10, 0],
            	opacity: 1,
             	offset: 2300
         	})
        .add({
            	targets: '#insting-animation #cursor',
            	easing: 'easeInOutSine',
            	duration: 600,
             	translateX: [100, 140],
             	translateY: [90, 160],
             	scale: [{value: 0.7, duration: 200, delay: 700},
             			{value: 1, duration: 200}],
             	offset: 2800
         	})
        .add({
            	targets: '#insting-animation #screen2 #screen2-block',
            	easing: 'easeInOutSine',
             	scale: [{value: 0.95, duration: 200},
             			{value: 1, duration: 200}],
             	offset: 3500
         	})
        .add({
            	targets: ['#insting-animation #phone', '#insting-animation #mail'],
            	easing: 'easeInOutSine',
            	duration: 600, 
             	opacity: [{value: 1},
             			  {value: 0, delay: 1100}],
             	translateY: [{value: [20, 0]},
             				 {value: -20, delay: 1100}],
             	delay: function (el, i) {
             		return 100*i;
             	},
             	offset: 3500
         	})
        .add({
            	targets: '#insting-animation #cursor',
            	easing: 'easeInOutSine',
            	duration: 600,
             	translateX: [140, 20],
             	translateY: [160, 110],
             	scale: [{value: 0.7, duration: 200, delay: 700},
             			{value: 1, duration: 200}],
             	offset: 4200
         	})
        .add({
            	targets: '#insting-animation #screen2 #screen2-block2',
            	easing: 'easeInOutSine',
             	scale: [{value: 0.92, duration: 200},
             			{value: 1, duration: 200}],
             	offset: 4900
         	})
        .add({
            	targets: ['#insting-animation #number-card2', '#insting-animation #number-card1'],
            	easing: 'easeInOutSine',
            	duration: 600, 
             	opacity: [{value: 1},
             			  {value: 0, delay: 1100}],
             	translateY: [{value: [20, 0]},
             				 {value: -20, delay: 1100}],
             	delay: function (el, i) {
             		return 100*i;
             	},
             	offset: 5200
         	})
        .add({
                targets: '#insting-animation #screen2',
                easing: 'easeInOutSine',
                duration: 300,
                translateX: [0, -5],
                translateY: [0, 5],
                opacity: 0,
                offset: 6500
            })
        .add({
                targets: '#insting-animation #screen3',
                easing: 'easeInOutSine',
                duration: 400,
                translateX: [-10, 0],
                translateY: [10, 0],
                opacity: 1,
                offset: 6800
            })
        .add({
            	targets: '#insting-animation #cursor',
            	easing: 'easeInOutSine',
            	duration: 800,
             	translateX: [20, 130],
             	translateY: [110, 90],
             	scale: [{value: 0.7, duration: 200, delay: 900},
             			{value: 1, duration: 200}],
             	offset: 7300
         	})
        .add({
            	targets: '#insting-animation #screen3 #screen3-block',
            	easing: 'easeInOutSine',
             	scale: [{value: 0.97, duration: 200},
             			{value: 1, duration: 200}],
             	offset: 8200
         	})
        .add({
            	targets: ['#insting-animation #ceo-card', '#insting-animation #director-card'],
            	easing: 'easeInOutSine',
            	duration: 600, 
             	opacity: [{value: 1},
             			  {value: 0, delay: 1100}],
             	translateY: [{value: [20, 0]},
             				 {value: -20, delay: 1100}],
             	delay: function (el, i) {
             		return 100*i;
             	},
             	offset: 8400
         	})
        .add({
                targets: '#insting-animation #screen3',
                easing: 'easeInOutSine',
                duration: 300,
                translateX: [0, -5],
                translateY: [0, 5],
                opacity: 0,
                offset: 9600
            })
        .add({
                targets: '#insting-animation #screen4',
                easing: 'easeInOutSine',
                duration: 400,
                translateX: [-10, 0],
                translateY: [10, 0],
                opacity: 1,
                offset: 9900
            })
        .add({
                targets: '#insting-animation #screen4 #screen4-lines1 path',
                easing: 'easeInOutSine',
                duration: 500,
                opacity: [0, 0.7],
                delay: function (el, i) {
                    return 50*i;
                },
                offset: 11300
            })
        .add({
            	targets: '#insting-animation #cursor',
            	easing: 'easeInOutSine',
            	duration: 800,
             	translateX: [130, 50],
             	translateY: [90, 40],
             	scale: [{value: 0.7, duration: 200, delay: 900},
             			{value: 1, duration: 200}],
             	offset: 10400
         	})
        .add({
            	targets: '#insting-animation #screen4 #screen4-block1',
            	easing: 'easeInOutSine',
             	scale: [{value: 0.95, duration: 200},
             			{value: 1, duration: 200}],
             	offset: 11300
         	})
        .add({
            	targets: '#insting-animation #path-to-card',
            	easing: 'easeInOutSine',
            	duration: 1000,
             	strokeDashoffset: [-348.7, 1.2],
             	strokeDasharray: 2.8,
             	offset: 11500
         	})
        .add({
            	targets: ['#insting-animation #card1', '#insting-animation #card2', '#insting-animation #card3'],
            	easing: 'easeInOutSine',
            	duration: 1000, 
             	opacity: 1,
             	translateX: [-30, 0],
             	delay: function (el, i) {
             		return 100*i;
             	},
             	offset: 11500
         	})
        .add({
            	targets: '#insting-animation #cursor',
            	easing: 'easeInOutSine',
            	duration: 800,
             	translateX: [50, 200],
             	translateY: [40, 120],
             	scale: [{value: 0.7, duration: 200, delay: 900},
             			{value: 1, duration: 200}],
             	offset: 12600
         	})
        .add({
            	targets: '#insting-animation #screen4 #screen4-block2',
            	easing: 'easeInOutSine',
             	scale: [{value: 0.95, duration: 200},
             			{value: 1, duration: 200}],
             	offset: 13500
         	})
        .add({
                targets: '#insting-animation #screen4 #screen4-lines2 path',
                easing: 'easeInOutSine',
                duration: 500,
                opacity: [0, 0.6],
                delay: function (el, i) {
                    return 50*i;
                },
                offset: 13500
            })
        .add({
            	targets: '#insting-animation #filter-card',
            	easing: 'easeInOutSine',
            	duration: 500, 
             	opacity: [1, 0],
             	translateX: [0, 20],
             	translateY: [0, 10],
             	offset: 13700
         	})
        .add({
            	targets: '#insting-animation #map-card',
            	easing: 'easeInOutSine',
            	duration: 500, 
             	opacity: [0, 1],
             	translateX: [20, 0],
             	translateY: [10, 0],
             	offset: 14200
         	})
        .add({
            	targets: '#insting-animation #cursor',
            	easing: 'easeInOutSine',
            	duration: 800,
             	translateX: [200, 10],
             	translateY: [120, -45],
             	scale: [{value: 0.7, duration: 200, delay: 900},
             			{value: 1, duration: 200}],
             	offset: 14800
         	})
        .add({
            	targets: '#insting-animation #screen4',
            	easing: 'easeInOutSine',
            	duration: 300,
            	translateX: [0, -5],
            	translateY: [0, 5],
            	opacity: [1, 0],
             	offset: 15900
         	})
        .add({
            	targets: '#insting-animation #screen1',
            	easing: 'easeInOutSine',
            	duration: 400,
            	translateX: [-10, 0],
            	translateY: [10, 0],
            	opacity: [0, 1],
             	offset: 16200
         	})
        .add({
            	targets: ['#insting-animation #card1', '#insting-animation #card2', '#insting-animation #card3', '#insting-animation #path-to-card'],
            	easing: 'easeInOutSine',
            	duration: 500,
            	opacity: [1, 0],
             	offset: 16200
         	})
        .add({
            	targets: '#insting-animation #cursor',
            	easing: 'easeInOutSine',
            	duration: 500,
             	translateX: [10, 0],
             	translateY: [-45, 0],
             	offset: 16700
         	});
}

function moveMan() {
	anime({
	  targets: '#insting-animation #head',
	  easing: 'easeInOutSine',
	  duration: 1000,
	  rotate: [-2, 5],
	  delay: 1000,
	  direction: 'alternate',
	  loop: true
	});

	anime({
	  targets: ['#insting-animation #left-hand', '#insting-animation #right-hand'],
	  easing: 'easeInOutSine',
	  duration: 800,
	  rotate: [-2, 2, 2, -2, 2, -2],
	  delay: function (el, i) {
	  	return 100*i;
	  },
	  direction: 'alternate',
	  loop: true,
	  offset: 1000
	});
}


mainMove();
moveMan();