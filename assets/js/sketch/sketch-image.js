// sketch-image.js

// http://www.joemckaystudio.com/multisketches/
// Sketch Two
var t = function( p ) {
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    // p.background(255, 0, 200);
  };

  p.draw = function() {
    p.background(p.random(0,255), 0, 200, 100);
    p.noLoop();
  };

};
var myp5 = new p5(t, 'sketch-image');

//
// function setup() {
//   var canvas2 = createCanvas(500, 500);
//
//   // Move the canvas so it’s inside our <div id="sketch-holder">.
//   // canvas2.parent('sketch-image');
// canvas2.id('sketch-image');
// // canvas2.position(windowWidth/2, 100);
//   background(255, 0, 200,20);
//
//
// }
// // save this file as sketch.js
// // Sketch One
// var s = function( p ) { // p could be any variable name
//   var x = 100;
//   var y = 100;
//   p.setup = function() {
//     p.createCanvas(100, 100);
//
//   };
//
//   p.draw = function() {
//     p.background(255,0,240);
//     p.fill(255);
//     p.rect(x,y,50,50);
//     // noLoop();
//   };
// };
// var myp5 = new p5(s, 'sketch-image');
