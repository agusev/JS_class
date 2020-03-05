/*global console: false, window: false*/
/*jslint browser: true*/
/*
 * TODO: Make sure you read this entire file and 
 * these Web pages BEFORE you start working!:
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
 * The "HTML Audio/Video Events" section at: 
 * http://www.w3schools.com/tags/ref_av_dom.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
 * Then start below with the "TODO: DO THIS FIRST" section.
 *
 * Complete the code for this file, following the hints in the comments.
 * Do complete the code marked by "TODO" comments, 
 * but do NOT re-write function/method signatures 
 * (a method's signature is its name, parameters, 
 * and the order of the parameters).
 */
window.onload = function () {
	"use strict";
	// Getting the media elements by ID
	var video = document.getElementById('video');
	var audio = document.getElementById('audio');
	// Getting the buttons by ID
	var playOrPauseVideoButton = document
		.getElementById("playOrPauseVideoButton");
	var playOrPauseAudioButton = document
		.getElementById("playOrPauseAudioButton");
	var stopVideoButton = document.getElementById("stopVideoButton");
	var stopAudioButton = document.getElementById("stopAudioButton");
	var increaseVideoVolumeButton = document
		.getElementById("increaseVideoVolumeButton");
	var increaseAudioVolumeButton = document
		.getElementById("increaseAudioVolumeButton");
	var decreaseVideoVolumeButton = document
		.getElementById("decreaseVideoVolumeButton");
	var decreaseAudioVolumeButton = document
		.getElementById("decreaseAudioVolumeButton");

	var syncPlayOrPauseButtonWithMedia = function (mediaElement, button) {
		/*
		 * TODO: Set the button's innerHTML to 'Pause' or 'Play' depending on if
		 * the media element is paused or not.
		 */

		// Toggle buttons
		// If paused => change the button to "Play"
		if (mediaElement.paused) {
			button.innerHTML = "Play";
		}
		// If not paused => change button to "Pause"
		else {
			button.innerHTML = "Pause";
		}

	};

	var mediaIsPlayingOrJustPaused = function (event) {
		console.log("mediaIsPlayingOrJustPaused called with event:", event);
		/*
		 * TODO: Now that a media element is playing or just paused set the
		 * appropriate button's content to 'Pause' or to 'Play' by calling
		 * syncPlayOrPauseButtonWithMedia with the correct arguments. Remember
		 * both the keyword 'this' and the 'event.target' object refer to
		 * whatever HTML Media Element called the mediaIsPlayingOrJustPaused
		 * function by triggering a playing or a pause event.
		 */

		// Call methods with event.target.id (audio or video)
		if(event.target.id === "video"){
			syncPlayOrPauseButtonWithMedia(this, playOrPauseVideoButton);
		}
		else if(event.target.id === "audio") {
			syncPlayOrPauseButtonWithMedia(this, playOrPauseAudioButton);
		}
		else {
			console.error("ERROR: event.target.id is invalud in mediaIsPlayingOrJustPaused()");
		}

	};

	var mediaHasJustEnded = function (event) {
		console.log("mediaHasJustEnded called with event:", event);
		/*
		 * TODO: Now that the media element has stopped playing set the
		 * appropriate button's content to 'Play' by calling
		 * syncPlayOrPauseButtonWithMedia with the correct arguments. Remember
		 * both the keyword 'this' and the 'event.target' object refer to
		 * whatever HTML Media Element called the mediaIsPlayingOrJustPaused
		 * function by triggering a playing or a pause event.
		 */

		// if event.type is  ended.
		if(event.type == "ended") {
			// Then call corresponding video/audio handler with event.target.id.
			if (event.target.id == "video") {
				syncPlayOrPauseButtonWithMedia(this, playOrPauseVideoButton);
			} else if (event.target.id == "audio") {
				syncPlayOrPauseButtonWithMedia(this, playOrPauseAudioButton);
			} else {
				console.error("ERROR: mediaHasJustEnded() is invalid");
			}
		}
		// If video/audio has not been ended
		console.error("Media has not been ended yet");


	};

	/*
	 * TODO: DO THIS FIRST (after reading the instructions at the top of this
	 * file). Use addEventListener to bind video and audio elements to call our
	 * mediaIsPlayingOrJustPaused(event) function in reaction to 'play' and
	 * 'pause' events and call our mediaHasJustEnded(event) function in reaction
	 * to the 'ended' event.
	 */

	// handlers for video
	video.addEventListener('play', mediaIsPlayingOrJustPaused);
	video.addEventListener('pause', mediaIsPlayingOrJustPaused);
	video.addEventListener('ended', mediaHasJustEnded);

	// handlers for audio
	audio.addEventListener('play', mediaIsPlayingOrJustPaused);
	audio.addEventListener('pause', mediaIsPlayingOrJustPaused);
	audio.addEventListener('ended', mediaHasJustEnded);


	playOrPauseVideoButton.onclick = function (event) {
		// TODO: Add your code here to play or pause the video

		// toggle video play/pause onclick
		if (video.paused) {
			video.play();
		}
		else {
			video.pause();
		}

		syncPlayOrPauseButtonWithMedia(video, this); // TODO: You can remove this line as it will become unneccessary after above you have bound video and audio elements to call our mediaIsPlayingOrJustPaused(event) function in reaction to 'play' and 'pause' events and to call our mediaHasJustEnded(event) function in reaction to the 'ended' event.
	};

	playOrPauseAudioButton.onclick = function (event) {
		// TODO: Add your code here to play or pause the audio

		// toggle audio play/pause onclick
		if (audio.paused) {
			audio.play();
		}
		else {
			audio.pause();
		}

		syncPlayOrPauseButtonWithMedia(audio, this); // TODO: You can remove this line as it will become unneccessary after above you have bound video and audio elements to call our mediaIsPlayingOrJustPaused(event) function in reaction to 'play' and 'pause' events and to call our mediaHasJustEnded(event) function in reaction to the 'ended' event.
	};

	var stop = function (mediaElement) {
		/*
		 * TODO: Add your code here to stop the media element See:
		 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs#Stopping_the_video
		 */

		// set to pause and start from the beginning
		mediaElement.pause();
		mediaElement.currentTime = 0;

	};

	stopVideoButton.onclick = function (event) {
		/*
		 * TODO: Stop the media element by calling stop(mediaElement).
		 */

		// stop video and toggle button to 'Play'
		stop(video);
		playOrPauseVideoButton.innerHTML = "Play";


	};

	stopAudioButton.onclick = function (event) {
		/*
		 * TODO: Stop the media element by calling stop(mediaElement).
		 */

		// stop audio and toggle button to 'Play'
		stop(audio);
		playOrPauseAudioButton.innerHTML = "Play";

	};

	var increaseVolume = function (mediaElement) {
		/*
		 * TODO: Increase the volume property of the media element ONLY when it
		 * is safe (don't go higher than a volume of 1.0 because that will cause
		 * an error) and set the volume to 1.0 if the current volume is too
		 * close to 1.0
		 */

		// Increase volume with 0.1 steps.
		// only if current volume + 0.1 <= 1.0
		// else set up volume to max = 1.0
		if (mediaElement.volume <= 0.9) {
			mediaElement.volume += 0.1;
		}
		else {
			mediaElement.volume = 1.0;
		}

	};

	increaseVideoVolumeButton.onclick = function (event) {
		increaseVolume(video);
	};

	increaseAudioVolumeButton.onclick = function (event) {
		increaseVolume(audio);
	};

	var decreaseVolume = function (mediaElement) {
		/*
		 * TODO: Decrease the volume property of the media element ONLY when it
		 * is safe (don't go lower than a volume of 0.0 because that will cause
		 * an error) and set the volume to 0.0 if the current volume is too
		 * close to 0.0
		 */

		// Descrease volume with 0.1 steps.
		// only if current volume - 0.1 >= 0.0
		// else set up volume to min = 0.0
		if (mediaElement.volume  >= 0.1) {
			mediaElement.volume -= 0.1;
		} else {
			mediaElement.volume = 0.0;
		}

	};

	decreaseVideoVolumeButton.onclick = function (event) {
		decreaseVolume(video);
	};

	decreaseAudioVolumeButton.onclick = function (event) {
		decreaseVolume(audio);
	};
};
