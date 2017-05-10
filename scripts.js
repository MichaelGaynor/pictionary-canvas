// console.log("sanity check");
var canvas = document.getElementById("canvas");
// console.dir(canvas);
var context = canvas.getContext("2d");

// Set up the base options for the pictionary board
var color = "#000";
var thickness = 10;
var colorPicker = document.getElementById("color-picker");
var thicknessPicker = document.getElementById("thickness");
// console.dir(colorPicker);
var mouseDown = false;
var mousePosition = {};
var lastMousePosition = null;


colorPicker.addEventListener("change", function(event){
  // console.log(event);
  color = colorPicker.value;
  // thickness = event.target.value;
  // console.log(color);
});

thicknessPicker.addEventListener("change", function(event){
  thickness = thicknessPicker.value;
  // console.log(thickness);
});

canvas.addEventListener("mousedown", function(event){
  mouseDown = true;
});

canvas.addEventListener("mouseup", function(event){
  mouseDown = false;
  lastMousePosition = null;
});

canvas.addEventListener("mousemove", function(event){
  if(mouseDown){
    // console.log("User doin mouse stuffs");

    if(lastMousePosition == null){
      lastMousePosition = {
        x: event.offsetX,
        y: event.offsetY
      }
    };
    console.log(event);
    mousePosition.x = event.offsetX;
    mousePosition.y = event.offsetY;
    console.log(event.offsetX,event.offsetY);
    // console.log(mousePosition.x);
    // console.log(mousePosition.y);
    context.strokeStyle = color;
    context.lineJoin = "bevel";
    context.lineWidth = thickness;
    context.beginPath();
    context.moveTo(lastMousePosition.x, lastMousePosition.y);
    context.lineTo(mousePosition.x, mousePosition.y);
    context.stroke();
    context.closePath();

    lastMousePosition = {
      x: mousePosition.x,
      y: mousePosition.y
    }

  };
});