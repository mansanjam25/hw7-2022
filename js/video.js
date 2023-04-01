var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
});

document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()
});

const vid = document.getElementById('player1')
document.querySelector("#slower").addEventListener("click", function(){
	console.log('Slow down video');
	vid.playbackRate -= 0.1;
	console.log('New speed:', vid.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log('Speed up video');
	vid.playbackRate += 1.1;
	console.log('New speed:', vid.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function(){
	var newTime = vid.currentTime + 10;
	if (newTime <= vid.duration) {
		vid.currentTime = newTime;
	  } else {
		vid.currentTime = 0;
	  }
	console.log('Current time:', vid.currentTime)
});

const muteButton = document.querySelector("#mute");
muteButton.addEventListener("click", function() {
  if (vid.muted) {
    vid.muted = false;
    muteButton.textContent = "Mute";
  } else {
    vid.muted = true;
    muteButton.textContent = "Unmute";
  }
});

const volumeSlider = document.querySelector("#slider");
const volumeInfo = document.querySelector("#volume");

vid.volume = volumeSlider.value / 100;

volumeSlider.addEventListener("input", function() {
  vid.volume = this.value / 100;
  volumeInfo.textContent = `${this.value}%`;
});

document.querySelector('#vintage').addEventListener('click', function() {
	video.classList.add('oldSchool');
  });

document.querySelector("#orig").addEventListener("click", function() {
	vid.classList.remove("oldSchool");
  });



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

