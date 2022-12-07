import { isEscapeKey } from './utils.js';
import { addValidators } from './form-validator.js';
const uploadFile = document.querySelector('#upload-file');
const form = document.querySelector('.img-upload__form');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButtton = form.querySelector('#upload-cancel');
const hashtagsField = form.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
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
  submitButton.disabled = !pristine.validate();
};

const descriptionFieldInputHandler = () => {
  submitButton.disabled = !pristine.validate();
};

const openForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', сloseKeyDownHandler);
  closeButtton.addEventListener('click', closeButttonClickHandler);
  hashtagsField.addEventListener('keydown', hashtagsFieldEscHandler);
  descriptionField.addEventListener('keydown', descriptionFieldEscHandler);
  addValidators(pristine, hashtagsField, descriptionField);
  hashtagsField.addEventListener('input', hashtagsFieldInputHandler);
  descriptionField.addEventListener('input', descriptionFieldInputHandler);
};

const uploadFileChangeHandler = () => {
  openForm();
};

export const connectUploadModule = () => {
  uploadFile.addEventListener('change', uploadFileChangeHandler);
};

function closeForm() {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', сloseKeyDownHandler);
  closeButtton.removeEventListener('click', closeButttonClickHandler);
  hashtagsField.removeEventListener('keydown', hashtagsFieldEscHandler);
  descriptionField.removeEventListener('keydown', descriptionFieldEscHandler);
  hashtagsField.removeEventListener('input', hashtagsFieldInputHandler);
  descriptionField.removeEventListener('input', descriptionFieldInputHandler);
  uploadFile.value = '';
}
