# README

**Piano App**

Oswaldo Sosa 
Jason Dwyer

Our product is a piano application for people to enjoy creating short melodies, and recording what they create. The user is given two octaves to play with, and every time a note is pressed a wav file will play that note. The notes also light up as you play them, so you can easily tell what note was just pressed. The recording feature lets users record a melody, and then have it play back immediately in the app, and they can also get a wav file of the melody they just created. 

MVP:

Our minimum viable product was to create a keyboard where users could play notes when a note was clicked on the keyboard, which was completed. 

Functionality: 

Users can play notes on the piano by clicking the keyboard. They can choose to have the name of each note be on or off. Users can also select notes to create a melody and then hear the melody playback on the app. The selection of notes is visible to the user and the selection gets reset after the melody is played.

Architecture: 

There is the layout for the keyboard in application.html.erb, which we use on both pages home (play melody) and record (create melody). The methods for playing and recording are in application.js.erb file. 

Another component is the methods to play a melody. The methods work along with the keyboard so that the user can still click on the keyboard to hear notes and select the notes. The methods to play a melody are responsible for keeping track and displaying the selection of notes for the melody and playing it back once the user is done making their selection.

Issues: 

One major issue we had was finding wav files of each note. We eventually found one pack that had all the notes we needed, but every note was at least twenty seconds long, so we had to shorten them. 

Piano keys aren’t quite right, black keys should be on top of white keys, not purely in between them. 

There are issues when trying to play the same note consecutively. There has to be a short delay between playing the notes when playing back a melody. This is also a problem when playing the notes on the keyboard. The user has to wait until the note is done playing before playing the same note again.

References: 

Rails 5

Wavefiles from http://www.freesound.org, from pack Grand Piano Mezzo-forte created by user feelander. 

Wavefiles edited for duration by Wave Editor, from https://www.wave-editor.com 

Used concepts from “Make an instagram like site in under 30 minutes! (Ruby on Rails)” tutorial:
https://www.youtube.com/watch?v=MpFO4Zr0EPE

Used StackOverflow to search for solutions to problems: https://stackoverflow.com

Used BootStrap template for application design: https://github.com/twbs/bootstrap-sass

Used W3Schools to learn html and javascript: https://www.w3schools.com

Used wavefile gem to create the output wavefile: https://github.com/jstrait/wavefile, http://wavefilegem.com/examples.html

Used concepts from “Your first Ruby on Rails Application” tutorial: https://www.youtube.com/watch?v=9gKyW9Uq6wo
