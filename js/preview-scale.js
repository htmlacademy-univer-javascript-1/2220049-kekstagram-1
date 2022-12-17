import { PREVIEW_MIN_SCALE, PREVIEW_MAX_SCALE, PREVIEW_SCALE_STEP, PREVIEW_DEFAULT_SCALE } from './consts.js' ;
import { putInInterval } from './utils.js';

const uploadImageScaleControllsContainerElement = document.querySelector('.img-upload__scale');
const previewImgElement = document.querySelector('.img-upload__preview img');
const scaleValueInputElement = document.querySelector('.scale__control--value');

const getCurrentScale = () => parseInt(scaleValueInputElement.value, 10);

const setPreviewScale = (scale) => {
  scale = putInInterval(scale, PREVIEW_MIN_SCALE, PREVIEW_MAX_SCALE);
  scaleValueInputElement.value = `${scale}%`;
  previewImgElement.style.transform = `scale(${scale / 100})`;
};

const changeScaleClickHandler = (evt) => {
  const currentScale = getCurrentScale();
  if (evt.target.classList.contains('scale__control--smaller')) {
    setPreviewScale(currentScale - PREVIEW_SCALE_STEP);
    return;
  }
  if (evt.target.classList.contains('scale__control--bigger')) {
    setPreviewScale(currentScale + PREVIEW_SCALE_STEP);
  }
};

const resetPreviewScaleControlls = () => {
  setPreviewScale(PREVIEW_DEFAULT_SCALE);
};

export const initPreviewScaleControlls = () => {
  resetPreviewScaleControlls();
  uploadImageScaleControllsContainerElement.addEventListener('click', changeScaleClickHandler);
};

export const removeEvtListenerScaleControls = () =>
  uploadImageScaleControllsContainerElement.removeEventListener('click', changeScaleClickHandler);
