import { NO_PREVIEW_EFFECT, PREVIEW_EFFECT_SETTINGS } from './consts.js';

const imageUploadFormElement = document.querySelector('.img-upload__form');
const imgUploadSectionElement = document.querySelector('.img-upload__overlay');
const effectSliderContainerElement = document.querySelector('.img-upload__effect-level');
const effectLevelSliderElement = imgUploadSectionElement.querySelector('.effect-level__slider');
const effectInputValueElement = imgUploadSectionElement.querySelector('.effect-level__value');
const imgUploadPreviewElement = imgUploadSectionElement.querySelector('.img-upload__preview img');
const imgEffectsFieldsetElement = document.querySelector('.img-upload__effects');

const updateSliderConfig = (effectName) => {
  effectLevelSliderElement.noUiSlider.updateOptions(effectName.options);
};

const imageEffectReset = () => {
  imgUploadPreviewElement.style.filter = NO_PREVIEW_EFFECT;
  imgUploadPreviewElement.className = '';
  effectInputValueElement.value = '';
  effectSliderContainerElement.classList.add('hidden');
};

const onChangeImageEffect = (evt) => {
  const effectName = evt.target.value;
  imgUploadPreviewElement.className = '';
  imgUploadPreviewElement.classList.add(`effects__preview--${effectName}`);
  if (effectName === NO_PREVIEW_EFFECT) {
    imageEffectReset();
  } else {
    effectSliderContainerElement.classList.remove('hidden');
    updateSliderConfig(PREVIEW_EFFECT_SETTINGS[effectName]);
  }
};

const onEffectValueChange = (handlersValue) => {
  const value = handlersValue[0];
  const effectName = imageUploadFormElement.effect.value;
  if (effectName === NO_PREVIEW_EFFECT) {
    return;
  }
  const filterName = PREVIEW_EFFECT_SETTINGS[effectName].style;
  const filterUnits = PREVIEW_EFFECT_SETTINGS[effectName].unit;
  imgUploadPreviewElement.style.filter = `${filterName}(${value}${filterUnits})`;
  effectInputValueElement.value = value;
};

export const initFilters = () => {
  effectSliderContainerElement.classList.add('hidden');
  const uiSlider = noUiSlider.create(effectLevelSliderElement, {
    range: {min: 0, max: 1,},
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  uiSlider.on('update', onEffectValueChange);

  imgEffectsFieldsetElement.addEventListener('change', onChangeImageEffect);
};

export const destroySlider = () => {
  imgEffectsFieldsetElement.removeEventListener('change', onChangeImageEffect);
  effectLevelSliderElement.noUiSlider.destroy();
};
