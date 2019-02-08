function animationPart1() {
    anime.timeline({
        loop: false,
        autoplay: true
    })
    .add({
       targets: '#floor',
       easing: 'easeInOutSine',
       duration: 1000,
       opacity: [0.2, 0.5],
       offset: 500
    })
    .add({
       targets: '#red-dots > path',
       easing: 'easeInOutSine',
       duration: 1000,
       fill:  '#00fbd3',
       stroke: '#00fbd3',
       strokeWidth: [0.25, 2],
       offset: 1500
    })
    .add({
       targets: '#lines-down',
       easing: 'easeInOutSine',
       duration: 1000,
       translateY: [0, -75],
       offset: 500
   })
    .add({
        targets: '#faces-upper',
        easing: 'easeInOutSine',
        duration: 1000,
        translateY: [0, -115],
        offset: 500,
        complete: function() {
            animationPart2();
        }
    })
}

function animationPart2() {
    anime.timeline({
        loop: false,
        autoplay: true
    })
    .add({
       targets: '#red-dots > path',
       easing: 'easeInOutSine',
       duration: 1000,
       fill:  ['#00fbd3', '#ff6a6d'],
       stroke: ['#00fbd3', '#ff6a6d'],
       offset: 1500
    })
    .add({
        targets: '#bird',
        easing: 'easeInOutSine',
        opacity: [{value: [0, 1], duration: 1000},
                  {value: 0, duration: 1000, delay: 3500}],
        translateY: [{value: [30, 0], duration: 1000},
                     {value: -40, duration: 1000, delay: 3500}],
        translateX: {value: 70, delay: 4500},
        offset: 500,
        complete: function() {
            animationPart3();
        }
    })
    .add({
        targets: '#bird-light',
        easing: 'easeInOutSine',
        opacity: [{value: [0, 1], duration: 1000},
                  {value: 0, duration: 1000, delay: 1500}],
        offset: 1500
    })
    .add({
        targets: '#glow-red',
        easing: 'easeInSine',
        duration: 600,
        opacity: [0, 1],
        offset: 1500
    })
    .add({
        targets: '#panel',
        easing: 'easeInOutSine',
        opacity: [{value: [0, 1], duration: 1000},
        {value: 0, duration: 1000, delay: 1500}],
        translateY: [{value: [-30, 0], duration: 1000},
        {value: -30, duration: 1000, delay: 1500}],
        offset: 1500
    })
    .add({
        targets: '#glow-blue',
        easing: 'easeInSine',
        duration: 600,
        opacity: [1, 0],
        offset: 1900
    })
    .add({
        targets: ['#faces-line-red', '#lines-down-red'],
        easing: 'easeInOutSine',
        duration: 500,
        opacity: [0, 1],
        offset: 1800
    })
    .add({
        targets: ['#faces-line', '#lines-down-blue'],
        easing: 'easeInOutSine',
        duration: 500,
        opacity: [1, 0],
        offset: 2000
    })
}

function animationPart3() {
    var pathPoint1 = anime.path('#point-path-1');
    var pathPoint2 = anime.path('#point-path-2');
    var pathPoint3 = anime.path('#point-path-3');

    anime.timeline({
        loop: false,
        autoplay: true
    })
    .add({
       targets: '#red-dots2 > path',
       easing: 'linear',
       fill:  [{ value: ['#05bfc9', '#ff6a6d'], duration: 500},
               { value: '#05bfc9', duration: 500, delay: 1000},
               { value: '#ff6a6d', duration: 500}],
       stroke: [{ value: ['#05bfc9', '#ff6a6d'], duration: 500},
                { value: '#05bfc9', duration: 500, delay: 1000},
                { value: '#ff6a6d', duration: 500}],
       strokeWidth: [{ value: [0.25, 2], duration: 500},
                     { value: 0.25, duration: 500, delay: 1000},
                     { value: 2, duration: 500}],
       offset: 0
    })
    .add({
        targets: ['#pillar1', '#pillar2', '#pillar3', '#pillar3-plus'],
        easing: 'easeInOutSine',
        opacity: [{value: [0, 1], duration: 800},
                  {value: 0, duration: 800, delay: 5000}],
        scale: [{value: [0.85, 1], duration: 800},
                {value: 0.85, duration: 800, delay: 5000}],
        offset: 500,
        complete: function() {
            animationPart4();
        }
    })
    .add({
        targets: '#move-point1',
        easing: 'easeInOutSine',
        duration: 3000,
        translateX: pathPoint1('x'),
        translateY: pathPoint1('y'),
        offset: 1500
    })
    .add({
        targets: '#move-point2',
        easing: 'easeInOutSine',
        duration: 3000,
        translateX: pathPoint2('x'),
        translateY: pathPoint2('y'),
        offset: 1500
    })
    .add({
        targets: '#move-point3',
        easing: 'easeInOutSine',
        duration: 3000,
        translateX: pathPoint3('x'),
        translateY: pathPoint3('y'),
        offset: 1500
    })
    .add({
        targets: ['#move-point1', '#move-point2', '#move-point3'],
        easing: 'easeInOutSine',
        duration: 500,
        opacity: [1, 0],
        offset: 45000
    })
    .add({
        targets: ['#border-face-right', '#border-face-left'],
        easing: 'easeInOutSine',
        duration: 1000,
        opacity: {value: 1, duration: 500},
        scale: [{value: [0.5, 1], duration: 500},
        {value: 0.7, duration: 200},
        {value: 1, duration: 200}],
        offset: 5000
    })
}

function animationPart4() {
    anime.timeline({
        loop: false,
        autoplay: true
    })
    .add({
       targets: '#red-dots2 > path',
       easing: 'linear',
       fill:  [{ value: ['#ff6a6d', '#05bfc9'], duration: 500},
               { value: '#ff6a6d', duration: 500, delay: 500},
               { value: '#05bfc9', duration: 500, delay: 1000}],
       stroke: [{ value: ['#ff6a6d', '#05bfc9'], duration: 500},
                { value: '#ff6a6d', duration: 500, delay: 500},
                { value: '#05bfc9', duration: 500, delay: 1000}],
       strokeWidth: [{ value: [2, 0.25], duration: 500},
                    { value: 2, duration: 500, delay: 500},
                    { value: 0.25, duration: 500, delay: 1000}],
        offset: 500,
    })
    .add({
        targets: '#lines-down',
        easing: 'easeInOutSine',
        duration: 1000,
        translateY: [-75, 0],
        offset: 500
    })
    .add({
        targets: '#faces-upper',
        easing: 'easeInOutSine',
        duration: 1000,
        translateY: [-115, 0],
        offset: 500
    })
    .add({
        targets: ['#border-face-right', '#border-face-left'],
        easing: 'easeInOutSine',
        duration: 1000,
        opacity: [1, 0],
        offset: 1500
    })
    .add({
        targets: '#flag',
        easing: 'easeInOutSine',
        duration: 1000,
        opacity: [0, 1],
        scale: [0.8, 1],
        offset: 1500
    })
    .add({
        targets: ['#flag-shield', '#flag-lines', '#flag-faces'],
        easing: 'easeInOutSine',
        duration: 1000,
        opacity: [0, 1],
        translateX: [-30, 0],
        translateY: [30, 0],
        delay: function (el, i) {
            return i*700;
        },
        offset: 2500
    })
}


animationPart1();