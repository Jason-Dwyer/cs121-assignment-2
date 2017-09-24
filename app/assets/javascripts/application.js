// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require rails-ujs
//= require turbolinks
//= require_tree .

// Creating array where all the notes will be stored
var soundArray = []

function appendSound(audioID, audioArray){
	// appendSoud is a function that creates an array of all the notes.
	// It stores their IDs for access to the notes when needed.
	// Note: This function will most likely have to be modified after including keyboard.
	var sound = document.getElementById(audioID);
	sound.play();
	audioArray.push(audioID);
	document.getElementById("notes").innerHTML = "Current note selection: " + audioArray;
	return audioArray;
}

function playMelody(audioArray){
	// playMelody is a recursive function that plays the melody in the audioArray.
	// It modifies the audioArray, and returns an empty audioArray when complete.
	document.getElementById("notes").innerHTML = "Current note selection: " + audioArray;
	if (audioArray.length==0){ 
		return audioArray;
	} else {
		var audio = document.getElementById(audioArray[0]);
		audio.play();
		if (audioArray[0] == audioArray[1]){
			//Consecutive notes require a little more wait time
			audioLength = audio.duration*1000 + 70;
		} else{
			audioLength = audio.duration*1000
			}
		audioArray.splice(0,1);
		setTimeout(function() {playMelody(audioArray)}, audioLength);
	}
}

function playback(audioArray){
	// Playback displays errors and messages to the user. 
	// After confirmation it calls playMelody to play the audioArray
	if (audioArray.length == 0){
		var e = new Error('No notes selected'); 
		window.alert("No notes selected. Please select notes to create a melody.");
		throw e;
	} else{
		if (confirm("Are you sure? After playback the current note selection will be reset.") == false){
			return audioArray;
		} else {
			return playMelody(audioArray);
		}
	}
}
