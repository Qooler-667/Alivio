const video = document.querySelector('.story__player'),
  playBtn = document.querySelector('.play-btn');

function toggleVideoStatus() {
  if (video.paused) {
    video.play()
    playBtn.style.display = 'none';
  }
  else {
    video.pause()
    playBtn.style.display = 'block';
  }
}
playBtn.addEventListener('click', toggleVideoStatus);

video.addEventListener('click', toggleVideoStatus);

