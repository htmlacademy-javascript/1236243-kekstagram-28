import { EFFECTS } from './const.js';

const effects = document.querySelector('.effects');
const effectsItem = effects.querySelector('.effects__list');
const effectSlider = document.querySelector('.img-upload__effect-level');
const sliderEffectValue = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const divUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadPreview = divUploadPreview.querySelector('img');


const DEFAULT_EFFECT = EFFECTS[0];

let chosenEffect = DEFAULT_EFFECT;

const showSlider = () => {
  effectSlider.classList.remove('hidden');
};

const hideSlider = () => {
  effectSlider.classList.add('hidden');
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max
    },
    step: chosenEffect.step,
    start: chosenEffect.max
  });

  if(chosenEffect === DEFAULT_EFFECT) {
    hideSlider();
  } else {
    showSlider();
  }
};


const onEffectClick = function (evt) {
  if(!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imgUploadPreview.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  if(chosenEffect === DEFAULT_EFFECT) {
    imgUploadPreview.style.filter = DEFAULT_EFFECT.style;
  } else {
    imgUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }
  sliderEffectValue.value = sliderValue;
};

const resetEffect = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});

hideSlider();
effectsItem.addEventListener('change', onEffectClick);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffect };
