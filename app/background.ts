import {ctx, canvas} from './canvas';
import {makeButton} from './controls';

makeButton(
  'JiDionBG'
  ).addEventListener(
  'click',
  function (){
    canvas.style.backgroundImage = 'url(JiDion.jpg)';
    canvas.style.backgroundSize = 'cover';
    }
  )

makeButton(
  'ClearBG'
  ).addEventListener(
  'click',
  function (){
    canvas.style.backgroundColor = 'white';
    canvas.style.backgroundImage = '';
    }
  )

