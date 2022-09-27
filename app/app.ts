import {ctx, canvas} from './canvas';
import {makeButton} from './controls';
import './mcskin';
import './background';
import './settings';
//import './draw)nDrag';

let drawCircleButton = makeButton("Draw Circle");

// set up draw semicircle button
drawCircleButton.addEventListener(
  // when they click
  "click",
  // run this function
  function () {
    ctx.beginPath();
    ctx.arc(300,300,100,0,Math.PI*2);
    ctx.stroke();
  }
)

// create clearscreen button
let clearScreenButton = makeButton('Clear Screen');
clearScreenButton.addEventListener(
  'click',
  function () { // when they click clear screen, do this
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
);

// define a new function: draw0nDrag
function draw0nDrag (event : MouseEvent) {
  if(event.buttons) {
  console.log("entered draw0nDrag");
   ctx.lineTo(event.offsetX, event.offsetY);
   ctx.stroke();
    } else {
    ctx.beginPath();
  }
}
let drawingLines = false;
let drawLineButton = makeButton('Draw Lines');
drawLineButton.addEventListener(
  'click',
  function () {
    //console.log("i got here");
   // console.log(drawingLines);
    if (!drawingLines) {
      ctx.beginPath();
      // when there's a mousemove on canvas, run draw0nDrag
      canvas.addEventListener('mousemove', draw0nDrag);
      drawingLines = true;
      drawLineButton.textContent = 'Stop drawing lines';
    } else {
      drawingLines = false;
      canvas.removeEventListener('mousemove',draw0nDrag);
      drawLineButton.textContent = 'Draw Lines';
    }
  } 
)
