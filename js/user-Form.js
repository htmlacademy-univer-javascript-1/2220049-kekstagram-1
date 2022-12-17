import { isEscapeKey } from './utils.js';
import { addValidators } from './form-validator.js';
import { initPreviewScaleControlls, removeEvtListenerScaleControls } from './preview-scale.js';
import { initFilters, destroySlider } from './preview-filters.js';
const uploadFileElement = document.querySelector('.img-upload__input');
const formElement = document.querySelector('.img-upload__form');
const imgUploadOverlayElement = formElement.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeButtonElement = formElement.querySelector('.img-upload__cancel');
const hashtagsFieldElement = formElement.querySelector('.text__hashtags');
const descriptionFieldElement = document.querySelector('.text__description');
const submitButtonElement = document.querySelector('.img-upload__submit');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

const сloseKeyDownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    closeForm();
  }
};

const closeButttonClickHandler = () => {
  closeForm();
};

const hashtagsFieldEscHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const descriptionFieldEscHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const hashtagsFieldInputHandler = () => {
  submitButtonElement.disabled = !pristine.validate();
};

const descriptionFieldInputHandler = () => {
  submitButtonElement.disabled = !pristine.validate();
};

const openForm = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  initPreviewScaleControlls();
  document.addEventListener('keydown', сloseKeyDownHandler);
  closeButtonElement.addEventListener('click', closeButttonClickHandler);
  hashtagsFieldElement.addEventListener('keydown', hashtagsFieldEscHandler);
  descriptionFieldElement.addEventListener('keydown', descriptionFieldEscHandler);
  addValidators(pristine, hashtagsFieldElement, descriptionFieldElement);
  hashtagsFieldElement.addEventListener('input', hashtagsFieldInputHandler);
  descriptionFieldElement.addEventListener('input', descriptionFieldInputHandler);
  initFilters();
};

const uploadFileChangeHandler = () => {
  const file = uploadFileElement.files[0];
  if (!file.type.startsWith('image/')) {
    return;
  }
  openForm();
};

export const connectUploadModule = () => {
  uploadFileElement.addEventListener('change', uploadFileChangeHandler);
};

function closeForm() {
  imgUploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', сloseKeyDownHandler);
  closeButtonElement.removeEventListener('click', closeButttonClickHandler);
  hashtagsFieldElement.removeEventListener('keydown', hashtagsFieldEscHandler);
  descriptionFieldElement.removeEventListener('keydown', descriptionFieldEscHandler);
  hashtagsFieldElement.removeEventListener('input', hashtagsFieldInputHandler);
  descriptionFieldElement.removeEventListener('input', descriptionFieldInputHandler);
  removeEvtListenerScaleControls();
  destroySlider();
  uploadFileElement.value = '';
}
