import { unBlockSubmitButton } from './form.js';
import { showAlert } from './util.js';

const getData = (onSuccess) => {
  fetch('https://28.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch((err) => {
      showAlert(err);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://28.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: body,
    })
    .then((responce) => {
      if(responce.ok) {
        onSuccess();
        unBlockSubmitButton();
      } else {
        onFail();
        unBlockSubmitButton();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
