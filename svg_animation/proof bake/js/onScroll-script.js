function heroAnimation() {
	let controller = new ScrollMagic.Controller();

	let id = '#hero-anim' + ' ';
	let heroAnimation = gsap.timeline({defaults: { ease: 'sine.inOut' }, repeat: 0, repeatDelay: 0, delay: 1});

	heroAnimation
	.to(id + '#block-before', 3, {x: -961, y: -553}, 0)
	.fromTo(id + '#fire-box', 1, {scale: 0, svgOrigin: '1339.95px 1099.35px'}, {scale: 1, yoyo: true, repeat: 1, repeatDelay: 1}, 1.5)
	.fromTo(id + '#fire', 0.5, {x: -278.93}, {x: -2510.36, ease: 'steps(8)', repeat: 6}, 1.5)
	.to(id + '#oven-arrow', 1.5, {rotate: 40, scaleY: 0.7, svgOrigin: '943.3px 963.05px', yoyo: true, repeat:1}, 1.5)
	.to(id + '#arrow-path', 2, {strokeDashoffset: 0}, 1.5)
	.to(id + '#arrow-path-end', 0.4, {opacity: 1}, 3.1)
	.to(id + '#check-mark1', 1, {strokeDashoffset: 0}, 4)
	.to([id + '#check-mark-serv1', id + '#check-mark-serv2'], 1, {strokeDashoffset: 0}, 6.5)
	.fromTo(id + '#block-after', 3, {x: 317.35, y: 201.75}, {x: -122.2, y: -67.92}, 5)
	.to(id + '#check-mark2', 1, {strokeDashoffset: 0}, 8)
	.to(id + '#server-lights1', 0.5, {opacity: 0, yoyo: true, repeat: 7, repeatDelay: 0.5}, 0)
	.to(id + '#server-lights2', 0.5, {opacity: 0, yoyo: true, repeat: 7, repeatDelay: 0.5}, 0.75)
	.to(id + '#man2-hand', 1, {rotate: -20, svgOrigin: '1580px 1465px', yoyo: true, repeat: 5, repeatDelay: 0.5}, 0)
	.to(id + '#man3-hand', 1, {rotate: -20, svgOrigin: '2251px 1289px', yoyo: true, repeat: 5, repeatDelay: 0.5}, 0.3)
	.to(id + '#woman1-hand', 1, {rotate: -20, svgOrigin: '946.36px 1357.77px', yoyo: true, repeat: 5, repeatDelay: 0.5}, 0.7);

	console.log(heroAnimation.duration());


	let scene = new ScrollMagic.Scene({triggerElement: '#trigger-hero-anim', triggerHook: 0, duration: 9200})
	.setTween(heroAnimation)
	.setPin('#pin-heroAnim')
	.addTo(controller);
}

heroAnimation();