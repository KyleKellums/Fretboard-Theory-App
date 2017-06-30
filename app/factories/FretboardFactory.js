"use strict";
// console.log("hello fretboard.js");

app.factory('FretboardFactory', function() {

let fretboard = () => {
var canvas = document.getElementById("fretCanvas");
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);

/////  Create the rectangle  ///////
ctx.rect(0, 0, 1200, 220);
// ctx.stroke();


/////  Create the strings  ////////
// ctx.beginPath();
// ctx.moveTo(0,4);
// ctx.lineTo(1200,4);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,55);
ctx.lineTo(1200,55);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,60);
ctx.lineTo(1200,60);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,90);
ctx.lineTo(1200,90);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,120);
ctx.lineTo(1200,120);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,150);
ctx.lineTo(1200,150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,180);
ctx.lineTo(1200,180);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,210);
ctx.lineTo(1200,210);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,215);
ctx.lineTo(1200,215);
ctx.stroke();

/////////  Create the frets  ////////////
ctx.beginPath();
ctx.moveTo(28,55);
ctx.lineTo(28,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(30,55);
ctx.lineTo(30,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,55);
ctx.lineTo(100,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,55);
ctx.lineTo(170,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240,55);
ctx.lineTo(240,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(310,55);
ctx.lineTo(310,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(380,55);
ctx.lineTo(380,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450,55);
ctx.lineTo(450,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(520,55);
ctx.lineTo(520,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(590,55);
ctx.lineTo(590,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(660,55);
ctx.lineTo(660,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(730,55);
ctx.lineTo(730,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(800,55);
ctx.lineTo(800,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(870,55);
ctx.lineTo(870,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(940,55);
ctx.lineTo(940,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1010,55);
ctx.lineTo(1010,215);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1080,55);
ctx.lineTo(1080,215);
ctx.stroke();

//////  Create circles for fret markers  ///////

ctx.beginPath();
ctx.arc(205,135,2,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(345,135,2,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(485,135,2,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(625,135,2,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(835,105,2,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(835,165,2,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(1045,135,2,0,2*Math.PI);
ctx.stroke();
};

return {fretboard};

});





