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

function fireClick(node){
    if ( document.createEvent ) {
        var evt = document.createEvent('MouseEvents');
        evt.initEvent('click', true, false);
        node.dispatchEvent(evt);    
    } else if( document.createEventObject ) {
        node.fireEvent('onclick') ; 
    } else if (typeof node.onclick == 'function' ) {
        node.onclick(); 
    }
}
//Can maybe avoid clicking buttons, by just directly playing sound?
function multiClick(node1, node2){
	var audioID = node1.value;
	var audio = document.getElementById(audioID);
	//have to wait between 35-40 milliseconds
	var audioLength = audio.duration*1000 + 40;
	fireClick(node1);
	setTimeout(function() {fireClick(node2)}, audioLength);
}

var soundArray = []
var soundArrayTest = ['Bb','Bb','G#','A','G#','A']

function appendSound(audioID, audioArray){
	var sound = document.getElementById(audioID);
	sound.play();
	audioArray.push(audioID);
	document.getElementById("demo2").innerHTML = "Current note selection: " + audioArray;
	return audioArray;
}

function playMelody(audioArray){
	//Tried to use a for-loop to play all the notes but I was not successful
	for (i=0; i < audioArray.length; i++){
		console.log(audioArray);
		console.log(audioArray[i]);
		var sound = document.getElementById(audioArray[i])
		if (i==0){
			sound.play();
		} else {
			audio = document.getElementById(audioArray[i-1]);
			audioLength = audio.duration*1000 + 40
			setTimeout(function() {sound.play()}, audioLength);
		}
	}
}
function playMelody2(audioArray){
	document.getElementById("demo").innerHTML = audioArray;
	if (audioArray.length==0){
		return;
	} else {
		var audio = document.getElementById(audioArray[0]);
		audio.play();
		// shortest wait time is 69 milliseconds
		audioLength = audio.duration*1000+70;
		audioArray.splice(0,1);
		setTimeout(function() {playMelody2(audioArray)}, audioLength);
	}
}

var a = 1

function add1(n){
	n = n+1
	document.getElementById("demo").innerHTML = n;
	return n;
}

