import { isEscKey } from './util.js';
import { validateTags } from './validate.js';
import { resetEffect } from './effect.js';

const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload');
const formUpload = document.querySelector('#upload-select-image');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const buttonUpload = formUpload.querySelector('#upload-file');
const divUploadPreview = formUpload.querySelector('.img-upload__preview');
const imgUploadPreview = divUploadPreview.querySelector('img');
const buttonImgUploadCansel = formUpload.querySelector('.img-upload__cancel');
// const buttonImgUploadSubmit = formUpload.querySelector('#upload-submit');
// const imjUploadPreveiw = formUpload.querySelector('.img-upload__preview');
const scaleControlValue = formUpload.querySelector('.scale__control--value');
const commentTextDescription = formUpload.querySelector('.text__description');
const hashtagTextField = formUpload.querySelector('.text__hashtags');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

function onOpenForm () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscKeyDown);
  onBlockEsc();
  formUpload.addEventListener('submit', onFormSubmit);
}

function onCloseForm () {
  resetEffect();
  formUpload.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  scaleControlValue.value = `${100}%`;
  formUpload.removeAttribute('style');
  imgUploadPreview.removeAttribute('style');
  formUpload.removeEventListener('submit', onFormSubmit);

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
}


pristine.addValidator(
  hashtagTextField,
  validateTags,
  'Неправильно заполнены хэштеги',
);

function onFormSubmit () {
  const isValid = pristine.validate();
  if (isValid) {
    // evt.preventDefault();
    onCloseForm();
  } else {
    resetEffect();
  }

}
buttonUpload.addEventListener('change', onOpenForm);
buttonImgUploadCansel.addEventListener('click', onCloseForm);


export {imgUpload, imgUploadPreview, onOpenForm, onCloseForm};
