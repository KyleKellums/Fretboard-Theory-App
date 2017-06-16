"use strict";
console.log("hello fretboard.js");

var canvas = document.getElementById("fretCanvas");
var ctx = canvas.getContext("2d");

/////  Create the rectangle  ///////
ctx.rect(0, 0, 1200, 190);
ctx.stroke();


/////  Create the strings  ////////
ctx.beginPath();
ctx.moveTo(0,4);
ctx.lineTo(1200,4);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,30);
ctx.lineTo(1200,30);
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
ctx.moveTo(0,155);
ctx.lineTo(1200,155);
ctx.stroke();

/////////  Create the frets  ////////////
ctx.beginPath();
ctx.moveTo(30,0);
ctx.lineTo(30,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,0);
ctx.lineTo(100,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,0);
ctx.lineTo(170,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240,0);
ctx.lineTo(240,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(310,0);
ctx.lineTo(310,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(380,0);
ctx.lineTo(380,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450,0);
ctx.lineTo(450,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(520,0);
ctx.lineTo(520,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(590,0);
ctx.lineTo(590,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(660,0);
ctx.lineTo(660,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(730,0);
ctx.lineTo(730,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(800,0);
ctx.lineTo(800,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(870,0);
ctx.lineTo(870,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(940,0);
ctx.lineTo(940,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1010,0);
ctx.lineTo(1010,155);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1080,0);
ctx.lineTo(1080,155);
ctx.stroke();

//////  Create circles for fret markers  ///////

ctx.beginPath();
ctx.arc(205,75,7,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(345,75,7,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(485,75,7,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(625,75,7,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(835,45,7,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(835,105,7,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(1045,75,7,0,2*Math.PI);
ctx.stroke();