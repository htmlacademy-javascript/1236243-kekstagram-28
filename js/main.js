import { renderMiniFoto } from'./miniatures.js';
import { renderBigFoto } from './bigFoto.js';
import { onOpenForm, onCloseForm } from './form.js';
import { changeScaleMin, changeScaleMax } from './scale.js';


renderMiniFoto();
renderBigFoto();

onOpenForm();
onCloseForm();

changeScaleMin();
changeScaleMax();
