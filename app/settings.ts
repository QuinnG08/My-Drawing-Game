import {ctx, canvas} from './canvas';
import {makeButton, makeInput} from './controls';

let colorInput = makeInput('color');
colorInput.addEventListener(
  'change',
  function (event) {
    ctx.strokeStyle = colorInput.value;
  }
)

let sizeInput = makeInput('number');
sizeInput.addEventListener(
  'change',
  function (event){
    ctx.lineWidth = sizeInput.valueAsNumber;
  }
)

//let drawThick = makeButton('Th!ck')
//drawThick.addEventListener(
//'click',
 // function() {
  //  ctx.lineWidth = 20;
  //  }
 // )
//makeButton('Th!n')
 // .addEventListener(
//'click',
//  function() {
//   ctx.lineWidth = 1;
 //   }
 // )
