import { isEscKey } from './util.js';

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_COUNT = 5;

const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload');
const formUpload = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const buttonUpload = formUpload.querySelector('.img-upload__label');
const imgUploadPreview = formUpload.querySelector('.img-upload__preview')
const buttonImgUploadCansel = formUpload.querySelector('.img-upload__cancel');
// const buttonImgUploadSubmit = formUpload.querySelector('#upload-submit');
const imjUploadPreveiw = formUpload.querySelector('.img-upload__preview');
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
}

function onCloseForm () {
  formUpload.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  scaleControlValue.value = `${100}%`;
  formUpload.removeAttribute('style');
  imgUploadPreview.removeAttribute('style');
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

const hasValidCount = (hashtags) =>
  hashtags.length <= HASHTAG_MAX_COUNT;

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasUniqeTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqeTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagTextField,
  validateTags,
  'Неправильно заполнены хэштеги',
);
const onFormSubmit = function () {
  formUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      console.log('Send');
    } else {
      console.log('Dont Send');
    }
  });
};
buttonUpload.addEventListener('click', onOpenForm);
buttonImgUploadCansel.addEventListener('click', onCloseForm);



export {imgUpload, imjUploadPreveiw};