import { renderMiniFoto} from'./miniatures.js';
import { renderBigFoto } from './bigFoto.js';
import {setUserSubmit} from './form.js';
import { getData } from './fetch.js';
import { filterPictures } from './filters.js';
import { debounce, showAlert} from './util.js';


const RENDER_DELAY = 500;

try {
  getData((data) => {
    renderMiniFoto(data);
    filterPictures(debounce(renderMiniFoto, RENDER_DELAY), data);
    renderBigFoto(data);
  });
} catch (err) {
  showAlert(err.message);
}
setUserSubmit();