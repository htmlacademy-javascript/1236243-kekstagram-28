import { isEscKey } from './util.js';
import { validateTags } from './validate.js';
import { resetEffect } from './effect.js';
import { changeScaleMin, changeScaleMax } from './scale.js';
import { sendData } from './fetch.js';
import { closeSuccessEsc, showError, showSuccess } from './message.js';
import { changeURL } from './foto.js';

const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload');
const formUpload = document.querySelector('#upload-select-image');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const buttonUpload = formUpload.querySelector('#upload-file');
const divUploadPreview = formUpload.querySelector('.img-upload__preview');
const imgUploadPreview = divUploadPreview.querySelector('img');
const buttonImgUploadCansel = formUpload.querySelector('.img-upload__cancel');
const scaleControlValue = formUpload.querySelector('.scale__control--value');
const commentTextDescription = formUpload.querySelector('.text__description');
const hashtagTextField = formUpload.querySelector('.text__hashtags');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

function onOpenForm () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscKeyDown);
  onBlockEsc();
  changeScaleMin();
  changeScaleMax();
  changeURL();
}

function onCloseForm () {
  formUpload.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  scaleControlValue.value = `${100}%`;
  formUpload.removeAttribute('style');
  imgUploadPreview.removeAttribute('style');
  imgUploadPreview.className = '';
  resetEffect();
  
}

function onDocumentEscKeyDown (evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    onCloseForm();
  }
}

function onBlockEsc () {
  commentTextDescription.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
  hashtagTextField.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
}


pristine.addValidator(
  hashtagTextField,
  validateTags,
  'Неправильно заполнены хэштеги',
);


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserSubmit = () => {
  formUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(evt.target);
      blockSubmitButton();
      sendData(showSuccess, showError, formData);
    } else {
      showError();
    }
  });
};

buttonUpload.addEventListener('change', onOpenForm);
buttonImgUploadCansel.addEventListener('click', onCloseForm);

export {imgUpload, imgUploadPreview, onOpenForm, onCloseForm, setUserSubmit, unBlockSubmitButton, onDocumentEscKeyDown};
