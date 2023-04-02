import { renderMiniFoto} from'./miniatures.js';
import { renderBigFoto } from './bigFoto.js';
import {setUserSubmit } from './form.js';
import { getData } from './fetch.js';
import { onClickCloseError, onClickCloseSuccess } from './message.js';

getData(renderMiniFoto);
getData(renderBigFoto);

onClickCloseError();
onClickCloseSuccess();
setUserSubmit();
