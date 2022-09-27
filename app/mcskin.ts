import {ctx, canvas} from './canvas';
import {makeButton} from './controls';
let drawMcskin = makeButton('McSkin Button');
drawMcskin.addEventListener(
  'click',
  function Mcskin() {
  ctx.strokeRect(100,100,100,100);
  ctx.strokeRect(100,200,100,150);
  ctx.strokeRect(200,200,75,150);
  ctx.strokeRect(25,200,75,150);
  ctx.strokeRect(100,350,100,150);
  ctx.beginPath();
  ctx.moveTo(150,350);
  ctx.lineTo(150,500);
  ctx.stroke();
  ctx.closePath()
  ctx.beginPath();
  ctx.moveTo(125,175);
  ctx.lineTo(175,175);
  ctx.beginPath()
  ctx.arc(150,125,50,Math.PI*0.3,Math.PI*0.7,false);
  ctx.stroke();
  ctx.closePath()
  let eyeY=130;
  let eyeX=135;
  let eyeX2=165;
  ctx.beginPath();
  ctx.moveTo(eyeX,eyeY)
  ctx.lineTo(eyeX,150)
  ctx.stroke();
  ctx.closePath()
  ctx.moveTo(eyeX2,eyeY)
  ctx.lineTo(eyeX2,150)
  ctx.stroke();
  Mcskin();
Mcskin();
}
);
