import { isEscapeKey } from './utils.js';
import { addValidators } from './form-validator.js';
import { initPreviewScaleControlls, removeEvtListenerScaleControls } from './preview-scale.js';
import { initFilters, destroySlider } from './preview-filters.js';
import { UPLOAD_MESSAGE_TYPE, FILE_TYPES } from './consts.js';
import { openUploadResultMessage } from './upload-messages.js';
import { sendDataToServer } from './api.js';

const uploadFileElement = document.querySelector('#upload-file');
const formElement = document.querySelector('.img-upload__form');
const imgUploadOverlayElement = formElement.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeButtonElement = formElement.querySelector('#upload-cancel');
const hashtagsFieldElement = formElement.querySelector('.text__hashtags');
const descriptionFieldElement = document.querySelector('.text__description');
const submitButtonElement = document.querySelector('.img-upload__submit');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');
const effectsPreviewElements = document.querySelectorAll('.effects__preview');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

const closeKeyDownHandler = (evt) => {
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

const sendPostSuccessHandler = () => {
  openUploadResultMessage(UPLOAD_MESSAGE_TYPE.SUCCESS);
  closeForm();
};
const sendPostFailedHandler = () => {
  openUploadResultMessage(UPLOAD_MESSAGE_TYPE.ERROR);
  submitButtonElement.disabled = false;
};

const submitHandler = (evt) => {
  submitButtonElement.disabled = true;
  evt.preventDefault();
  const formData = new FormData(formElement);
  sendDataToServer(formData, sendPostSuccessHandler, sendPostFailedHandler);
};

const openForm = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  initPreviewScaleControlls();
  document.addEventListener('keydown', closeKeyDownHandler);
  closeButtonElement.addEventListener('click', closeButttonClickHandler);
  hashtagsFieldElement.addEventListener('keydown', hashtagsFieldEscHandler);
  descriptionFieldElement.addEventListener('keydown', descriptionFieldEscHandler);
  addValidators(pristine, hashtagsFieldElement, descriptionFieldElement);
  hashtagsFieldElement.addEventListener('input', hashtagsFieldInputHandler);
  descriptionFieldElement.addEventListener('input', descriptionFieldInputHandler);
  formElement.addEventListener('submit', submitHandler);
  initFilters();
};

const uploadFileChangeHandler = () => {
  const file = uploadFileElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((ending) => fileName.endsWith(ending));

  if (matches) {
    const pictureUrl = URL.createObjectURL(file);
    imgUploadPreviewElement.src = pictureUrl;
    effectsPreviewElements.forEach((effect) => {
      effect.style.backgroundImage = `url(${pictureUrl})`;
    });
  }
  openForm();
};

export const connectUploadModule = () => {
  uploadFileElement.addEventListener('change', uploadFileChangeHandler);
};

function closeForm() {
  formElement.reset();  imgUploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', closeKeyDownHandler);
  closeButtonElement.removeEventListener('click', closeButttonClickHandler);
  hashtagsFieldElement.removeEventListener('keydown', hashtagsFieldEscHandler);
  descriptionFieldElement.removeEventListener('keydown', descriptionFieldEscHandler);
  hashtagsFieldElement.removeEventListener('input', hashtagsFieldInputHandler);
  descriptionFieldElement.removeEventListener('input', descriptionFieldInputHandler);
  removeEvtListenerScaleControls();
  destroySlider();
  uploadFileElement.value = '';
}

