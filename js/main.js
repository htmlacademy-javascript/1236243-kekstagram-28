import { renderMiniFoto } from'./miniatures.js';
import { renderBigFoto } from './bigFoto.js';
import './form.js';
import {changeScaleMin, changeScaleMax} from './scale.js';

renderMiniFoto();
renderBigFoto();

changeScaleMin();
changeScaleMax();
