let paRightTa = new TimelineMax({ paused: true });
let paUsers = new TimelineMax({ paused: true });
let paServer = new TimelineMax({ paused: false });
let paSSP = new TimelineMax({ paused: true });
let paPreSSP = new TimelineMax({ paused: true });
let paSSPparts = new TimelineMax({ paused: false });
let paADEXparts = new TimelineMax({ paused: false });
let paADEXline = new TimelineMax({ paused: true });
let paAdvertisers = new TimelineMax({ paused: true });
let paDSP = new TimelineMax({ paused: true });
let paBid = new TimelineMax({ paused: true });
let paDSPLine = new TimelineMax({ paused: true });
let paBackLine = new TimelineMax({ paused: true });

const rArrow = document.querySelector("#arrow-right");
const lArrow = document.querySelector("#arrow-left");
var currentPos = 0;


function mainTimelines() {

	const card = document.querySelector('#pa-short-anim #right-ta');
	const u3Screens = document.querySelectorAll('#pa-short-anim #u3-screens > g');
	const u2Screens = document.querySelectorAll('#pa-short-anim #u2-screens > g');
	const u1Screens = document.querySelectorAll('#pa-short-anim #uleft-screens > g');
	const u3LeftHand = document.querySelector('#pa-short-anim #u3-left-hand');
	const u2RightHand = document.querySelector('#pa-short-anim #u2-right-hand');
	const u1RightHand = document.querySelector('#pa-short-anim #u1-right-hand');
	const u1LeftHand = document.querySelector('#pa-short-anim #u1-left-hand');
	const p1Line = document.querySelector('#pa-short-anim #proccessLine1-1');
	const p2Line = document.querySelector('#pa-short-anim #proccessLine1-2');
	const p3Line = document.querySelector('#pa-short-anim #proccessLine1-3');
	const server = document.querySelectorAll('#pa-short-anim #serv-points > ellipse');
	const sspB1 = document.querySelector('#pa-short-anim #ssp-block1');
	const sspB2 = document.querySelector('#pa-short-anim #ssp-block2');
	const sspB3 = document.querySelector('#pa-short-anim #ssp-block3');
	const sspB4 = document.querySelector('#pa-short-anim #ssp-block4');
	const pL2 = document.querySelector('#pa-short-anim #proccessLine2');
	const pLssp = document.querySelector('#pa-short-anim #ssp-proccessLine');
	const sspLight = document.querySelector('#pa-short-anim #ssp-logo-light');
	const adexRing1 = [document.querySelector('#pa-short-anim #ring1-p1'),
					 	document.querySelector('#pa-short-anim #ring1-p2'),
					 	document.querySelector('#pa-short-anim #ring1-p3')];
	const adexRing2 = [document.querySelector('#pa-short-anim #ring2-p1'),
					 	document.querySelector('#pa-short-anim #ring2-p2'),
					 	document.querySelector('#pa-short-anim #ring2-p3')];
	const adexRing3 = document.querySelector('#pa-short-anim #ring3');
	const adexLine = document.querySelector('#pa-short-anim #proccessLine4');
	const adexLogoRight = document.querySelector('#pa-short-anim #adex-rightLogo');
	const adverLines = [document.querySelector('#pa-short-anim #adv-line1'),
						document.querySelector('#pa-short-anim #adv-line2'),
						document.querySelector('#pa-short-anim #adv-line3')];
	const adverPoints = document.querySelectorAll('#pa-short-anim #adv-linePoints > ellipse');
	const adverIcons = document.querySelectorAll('#pa-short-anim #adv-icons > g');
	const adverM1Hand = document.querySelector('#pa-short-anim #hand-m1');
	const adverM2Hand = document.querySelector('#pa-short-anim #hand-m2');
	const adverM3Hand = document.querySelector('#pa-short-anim #hand-m3');
	const dspBlocks = document.querySelectorAll('#pa-short-anim #dsp-blocks > g');
	const dspRates = document.querySelectorAll('#pa-short-anim #dsp-rates > g');
	const dspIcons = document.querySelectorAll('#pa-short-anim #dsp-rate-icons > g');
	const dspRect = document.querySelector('#pa-short-anim #dsp-redRect');
	const bid = document.querySelector('#pa-short-anim #bid');
	const mBid = document.querySelector('#pa-short-anim #main-bid');
	const bidShadow = document.querySelector('#pa-short-anim #bid-shadow');
	const dspLine = document.querySelector('#pa-short-anim #proccessLine8');
	const adexLogoLeft = document.querySelector('#pa-short-anim #adex-leftLogo');
	const backLine = [document.querySelector('#pa-short-anim #proccessLine8-1'),
						document.querySelector('#pa-short-anim #proccessLine8-2'),
						document.querySelector('#pa-short-anim #proccessLine8-3'),
						document.querySelector('#pa-short-anim #proccessLine8-4')];
	const backPoint = [document.querySelector('#pa-short-anim #proccessPoint8-1'),
						document.querySelector('#pa-short-anim #proccessPoint8-2'),
						document.querySelector('#pa-short-anim #proccessPoint8-3'),
						document.querySelector('#pa-short-anim #proccessPoint8-4')];

	paRightTa
		.set(card, {opacity: 0, y: 200})
		.to(card, 1, {opacity: 1, y: 0});

	paUsers
		.staggerTo(u1Screens, 0.2, {opacity: 1}, 0.8, 0)
		.staggerTo(u2Screens, 0.2, {opacity: 1}, 0.9, 0.8)
		.staggerTo(u3Screens, 0.4, {opacity: 1}, 1, 1)
		.to(u1RightHand, 0.7, {rotation: '5deg', svgOrigin: "8292.8 2819.1", ease: Sine.easeInOut, yoyo: true, repeat: 1}, 0)
		.to(u1LeftHand, 0.5, {rotation: '-5deg', svgOrigin: "8123.7 2784.1", ease: Sine.easeInOut, yoyo: true, repeat: 1}, 1)
		.to(u2RightHand, 0.7, {rotation: '-10deg', svgOrigin: "9194.2 3140.9", ease: Sine.easeInOut, yoyo: true, repeat: 1}, 1)
		.to(u3LeftHand, 0.5, {rotation: '-10deg', svgOrigin: "8571.2 3010.9", ease: Expo.easeOut, yoyo: true, repeat: 5}, 0)
		.to(p1Line, 1, {strokeDashoffset: 0, ease:Sine.easeInOut,}, 0.75)
		.to(p2Line, 1, {strokeDashoffset: 0, ease:Sine.easeInOut,}, 0.5)
		.to(p3Line, 1, {strokeDashoffset: 0, ease:Sine.easeInOut,}, 1);

	paServer
		.staggerTo(server, 0.5, {opacity: 0, yoyo: true, repeat: -1}, 0.3, 0).seek(10);

	paSSPparts
		.staggerTo([sspB1, sspB2, sspB3, sspB4], 1, {y: -70, rotation: '10deg', yoyo: true, transformOrigin: '50% 50%', repeat: -1, ease: Sine.easeInOut}, 0.4, 0).seek(10);

	paPreSSP
		.to(pL2, 1.5, {strokeDashoffset: 0, ease:Sine.easeInOut}, 0);

	paSSP
		.to(pLssp, 1.5, {strokeDashoffset: 0, ease:Sine.easeInOut}, 0)
		.to(sspLight, 0.5, {opacity: 1}, 0.7);

	paADEXparts
		.to(adexRing1, 1, {rotation: '10deg', ease:Sine.easeInOut, svgOrigin: '4026 4046', yoyo: true, repeat: -1}, 0)
		.to(adexRing2, 1, {rotation: '-10deg', ease:Sine.easeInOut, svgOrigin: '4026 4046', yoyo: true, repeat: -1}, 0.3)
		.to(adexRing3, 1, {rotation: '10deg', ease:Sine.easeInOut, svgOrigin: '4026 4046', yoyo: true, repeat: -1}, 0.3);

	paADEXline
		.to(adexLine, 1.5, {strokeDashoffset: 0, ease:Sine.easeInOut}, 0)
		.fromTo(adexLogoRight, 1, {scale: 0, opacity: 1, x: 100, y: 30, transformOrigin: '100% 100%'}, {scale: 1, x: 0, y:0, ease:Sine.easeInOut}, 0.7)

	paAdvertisers
		.staggerTo(adverLines, 1, {strokeDashoffset: 0, ease:Sine.easeInOut}, 0.5, 1)
		.staggerFromTo(adverPoints, 0.5, {opacity: 0}, {opacity: 1}, 0.5, 2)
		.staggerFromTo(adverIcons, 0.8, {opacity: 0, y: 50}, {opacity: 1, y: 0}, 0.5, 1)
		.to(adverM1Hand, 0.3, {rotation: '10deg', svgOrigin: '789.8 4178.6', yoyo: true, repeat: 3, ease:Sine.easeInOut}, 0.5)
		.to(adverM3Hand, 0.3, {rotation: '10deg', svgOrigin: '914.1 3570.4', yoyo: true, repeat: 3, ease:Sine.easeInOut}, 0)
		.to(adverM2Hand, 0.3, {rotation: '10deg', svgOrigin: '1447 4555.5', yoyo: true, repeat: 3, ease:Sine.easeInOut}, 1)

	paDSP
		.staggerFromTo(dspBlocks, 0.5, {opacity: 0}, {opacity: 1, ease:Sine.easeInOut}, 0.1, 0)
		.staggerFromTo(dspRates, 1, {opacity: 0}, {opacity: 1, ease:Sine.easeInOut}, 0.3, 0.8)
		.staggerFromTo(dspIcons, 1, {opacity: 0}, {opacity: 1, ease:Sine.easeInOut}, 0.3, 1.2)
		.to(dspRect, 0.4, {opacity: 1, }, 1.6)
		.to(dspRect, 0.7, {y: -170, ease:Sine.easeInOut}, 2)
		.to(dspRect, 0.7, {y: 170, ease:Sine.easeInOut})
		.to(dspRect, 0.7, {y: 0, ease:Sine.easeInOut})
		.to(dspRect, 0.2, {opacity: 0, yoyo: true, repeat: 3})

	paBid
		.from(mBid, 1.4, {rotation: '45deg', svgOrigin: '2846.3 2614', ease: Bounce.easeOut}, 0)
		.fromTo([bid, mBid], 0.2, {opacity: 0}, {opacity: 1}, 0)
		.fromTo(bidShadow, 1.4, {opacity: 0}, {opacity: 1, ease: Bounce.easeOut}, 0);

	paDSPLine
		.to(dspLine, 1.5, {strokeDashoffset: 0, ease:Sine.easeInOut}, 0)
		.fromTo(adexLogoLeft, 1, {scale: 0, opacity: 1, x: -100, y: 30, transformOrigin: '0% 100%'}, {scale: 1, x: 0, y:0, ease:Sine.easeInOut}, 0.7)

	paBackLine
		.staggerTo(backLine, 0.75, {strokeDashoffset: 0}, 0.75, 0)
		.staggerTo(backPoint, 0.1, {opacity: 1}, 0.75, 0)
		.staggerTo(backPoint, 0.1, {opacity: 0}, 0.75, 0.65)
		.staggerTo(backPoint, 0.75, {strokeDashoffset: 0}, 0.75, 0);
}

mainTimelines();

function stepForward(etap) {
	var tl = new TimelineMax();
	if(etap == 1) {
		tl
			.set('.pas-etap1', {opacity: 1})
			.add(paRightTa.timeScale(1).play(0), 0)
			.add(paUsers.play(0), 0)
			.add(function () { move = true; });
	} else if(etap == 2) {
		tl
			.add(paPreSSP.timeScale(1).play(0))
	} else if(etap == 3) {
		tl
			.add(paSSP.timeScale(1).play(0))
	} else if(etap == 4) {
		tl
			.add(paADEXline.timeScale(1).play(0))
	} else if(etap == 5) {
		tl
			.set('.pas-etap5', {opacity: 1})
			.add(paAdvertisers.play(0))
	} else if(etap == 6) {
		tl
			.set('.pas-etap6', {opacity: 1})
			.add(paDSP.play(0), 0)
			.add(paBid.play(0))
	} else if(etap == 7) {
		tl
			.add(paDSPLine.timeScale(1).play(0))
	} else if(etap == 8) {
		tl
			.add(paBackLine.timeScale(1).play(0))
	} else if(etap == 0) {
		currentPos = 0;
	} else {
		currentPos = 8;
	}

}

function stepBack(etap) {
	var tl = new TimelineMax();
	if(etap == 0) {
		tl
			.add(paRightTa.timeScale(3).reverse(0))
			.to('.pas-etap1', 0.5, {opacity: 0}, 0)
			.add(paUsers.seek(0).paused(true));
	} else if(etap == 1) {
		tl
			.add(paPreSSP.timeScale(2).reverse(0))
	} else if(etap == 2) {
		tl
			.add(paSSP.timeScale(2).reverse(0))
	} else if(etap == 3) {
		tl
			.add(paADEXline.timeScale(2).reverse(0))
	} else if(etap == 4) {
		tl
			.to('.pas-etap5', 0.5, {opacity: 0}, 0)
			.add(paAdvertisers.seek(0).paused(true))
	} else if(etap == 5) {
		tl
			.to('.pas-etap6', 0.5, {opacity: 0}, 0)
			.add(paDSP.seek(0).paused(true))
			.add(paBid.seek(0).paused(true), 0.5)
	} else if(etap == 6) {
		tl
			.add(paDSPLine.timeScale(2).reverse(0))
	} else if(etap == 7) {
		tl
			.add(paBackLine.timeScale(3).reverse(0))
	} else {
		currentPos = 0;
	}

}

window.onload = function () {

	currentPos = 0;

	document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode === 38 || e.keyCode === 37) {
        	currentPos--;
            stepBack(currentPos)
        } else if (e.keyCode === 40 || e.keyCode === 39) {
        	currentPos++;
            stepForward(currentPos);
        }
        console.log(currentPos)
    };

    lArrow.onclick = function() {
    					currentPos--;
    					stepBack(currentPos);
    					console.log(currentPos)
    				};
    rArrow.onclick = function() {
						currentPos++;
           				stepForward(currentPos);
           				console.log(currentPos)
    				}

};

