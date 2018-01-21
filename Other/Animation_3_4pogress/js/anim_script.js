var procent = 28,
		lenLineProgress = 337,
		lenProgress =  procent/100 * lenLineProgress;



var mobProgress = anime.timeline({
  autoplay: false
});

mobProgress
		.add({
      targets: '#path_circle025',
      easing: 'linear',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 200
    })
    .add({
      targets: '#path_circle025_grad',
      easing: 'linear',
      x2: [45, 22.5],
      duration: 200,
      offset: 0
    })
    .add({
      targets: '#path_circle05',
      easing: 'linear',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 400
    })
    .add({
      targets: '#progress_line',
      easing: 'linear',
      opacity: {value: 1, duration: 1},
      x2: [22.5, 22.5 + lenProgress],
      duration: 1000
    })
    .add({
      targets: '#path_shadow_grad',
      easing: 'linear',
      x2: [20.5, 24 + lenProgress],
      duration: 1000,
      offset: 600
    })
    .add({
      targets: '#pShad',
      easing: 'linear',
      opacity: {value: 1, duration: 1},
      x2: [22, 22.5 + lenProgress],
      duration: 1000,
      offset: 600
    });

 window.onload = function() {
    mobProgress.play();
  };
