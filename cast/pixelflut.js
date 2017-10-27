"use strict";

var canvas;
var canvas_context;
var image_data;

function init() {
  canvas = document.getElementsByTagName("canvas")[0];
  // fixed - for reasons
  canvas.height = 1000;
  canvas.width = 1000;
  
  if(!canvas.getContext) {
    alert("Your browser doesn't seem to support canvas.getContext.");
  }

  canvas_context = canvas.getContext('2d');
  image_data = canvas_context.createImageData(1,1);
  canvas_context.translate(0.5, 0.5); // Why - oh why?!
}

function draw(x, y, r, g, b) {
  canvas_context.fillStyle = `rgb(${r}, ${g}, ${b})`;
  for(var i = 0; i < 100; i++) { // more intense colors
    canvas_context.fillRect(x, y, 1, 1);
  }
}

window.onload = init;
