// console.log("Hello, World")

var numberOfBallClicks = 0;
var timer = 0;
// var score =document.getElementById("click-count").innerHTML = String(numberOfBallClicks);
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var victory = document.getElementById("victory");
var gif = document.getElementById("gif");
var gif2 = document.getElementById("gif2");
var gif3 = document.getElementById("gif3");
// context.moveTo(0,0);
// Move the pen/tool to 100,100
context.moveTo(115,100);
// Draw a line to 200,200
context.lineTo(200,250);
// Without moving the pen, draw to 300,100
context.lineTo(285,100);
context.lineTo(100,200);
context.lineTo(300,150);
context.lineTo(115,100);
context.strokeStyle = "#ffff00"
// context.stroke();

// Draw a circle!
context.beginPath()
context.fillStyle = "#ff00ff"
context.arc(200,150,100,0,2*Math.PI)
// context.fill()
// context.stroke()

var x = 200;
var y = 200;
var r = 50;
var xDirection = 1;
var yDirection = 1;
// var rSize = 1;
var red = 0;
var blue = 0;
var green = 0;

function drawBall(){
  context.fillStyle = "white";
  context.beginPath();
  context.arc(x,y,r,0,2*Math.PI);
  context.shadowBlur = 50;
  context.shadowColor = "yellow";
  context.clearRect(0,0,500,500);
  context.fill();
  if((x>=500-r)||(x<=0+r)){
    xDirection = -xDirection;
  }
  if((y>=500-r)||(y<=0+r)){
    yDirection = -yDirection;
  }
  // if((r>30)||(r<10)){
  //   rSize = -rSize;
  // }
  var randomX = Math.random()*40;
  var randomY = Math.random()*40;
  x+=3 * xDirection;
  y+=2 * yDirection;
  // r+=1 * rSize;
  red += 3;
  blue += 25;
  green += 5;
};

console.log(victory.outerHTML);

var ball = setInterval(drawBall,20);

canvas.addEventListener("click",function(event){
  // console.log(event)
  if((event.x >= (x-r) && event.x <= (x+r)) && ((event.y-69) >= (y-r) && (event.y-69) <= (y+r))){
    numberOfBallClicks += 1;
    r-= 5;

    document.getElementById("click-count").innerHTML = String(numberOfBallClicks);
    if (numberOfBallClicks == 10){
      victory.style = "visbility:visible;"
      gif.style = "visbility:visible;"
      gif2.style = "visbility:visible;"
      gif3.style = "visbility:visible;"
    }
  }
});

setInterval(function(){
  document.getElementById("timer").innerHTML = String(timer);
  if (numberOfBallClicks !== 10){
    timer +=1;
  }
},1000)

// var x2 = 300;
// var y2 = 100;
// var r2 = 60;

// function drawBall2(){
//   context.fillStyle = "#ff0000";
//   context.beginPath();
//   context.arc(x2,y2,r2,0,2*Math.PI);
//   context.fill();
//   if((x>500-r)||(x<0+r)){
//     xDirection = -xDirection;
//   }
//   if((y>500-r)||(y<0+r)){
//     yDirection = -yDirection;
//   }
//   if((r>60)||(r<40)){
//     rSize = -rSize;
//   }
//   x+=3 * xDirection;
//   y+=2 * yDirection;
//   r+=1 * rSize;
// };

// var ball = setInterval(drawBall2,20);