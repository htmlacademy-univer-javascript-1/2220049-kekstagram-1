import { isEscapeKey } from './utils.js';
import { COMMENTS_COUNT } from './consts.js';
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCounterElement = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentsCounterElement =  bigPictureElement.querySelector('.comments-count');
const bigPictureCommentElement = bigPictureElement.querySelector('.social__comments');
const bigPictureDescriptionElement = bigPictureElement.querySelector('.social__caption');
const bigPictureCloseButtonElement =  bigPictureElement.querySelector('.big-picture__cancel');
const bigPictureCommentsLoaderButtonElement = bigPictureElement.querySelector('.comments-loader');

let actualComments = [];
let countRenderedComments = COMMENTS_COUNT;


const transformCommentToHTML = (comment) =>
  `<li class="social__comment">
  <img
      class="social__picture"
      src="${comment.avatar}"
      alt="${comment.name}"
      width="35" height="35">
  <p class="social__text">${comment.message}</p>
</li>`;

const getCounterComments = () => {
  bigPictureCommentsCounterElement.innerHTML='';
  bigPictureCommentsCounterElement.insertAdjacentHTML('afterbegin', actualComments.length);
};

const renderComments = () => {
  getCounterComments();

  bigPictureCommentElement.innerHTML='';
  const commentsTemplate = actualComments.slice(0, countRenderedComments).map((comment) => transformCommentToHTML(comment)).join('');
  bigPictureCommentElement.insertAdjacentHTML('afterbegin', commentsTemplate);

  if (countRenderedComments >= actualComments.length) {
    bigPictureCommentsLoaderButtonElement.removeEventListener('click', bigPictureCommentsLoaderButtonElement);
    bigPictureCommentsLoaderButtonElement.classList.add('hidden');
  }
};

const onBigPictureCommentsLoaderButtonClick = () => {
  countRenderedComments += COMMENTS_COUNT;
  renderComments();
};

const initComments = (comments) => {
  actualComments = comments.slice();
  bigPictureCommentElement.innerHTML='';

  if (comments.length === 0) {
    bigPictureCommentsLoaderButtonElement.classList.add('hidden');
    bigPictureCommentsCounterElement.textContent='Нет комментариев';
    return;
  }

  renderComments();
  bigPictureCommentsLoaderButtonElement.addEventListener('click', onBigPictureCommentsLoaderButtonClick);
};

const initBigPicture = (photo) => {
  bigPictureImgElement.src = photo.url;
  bigPictureLikesCounterElement.textContent = photo.likes;
  bigPictureCommentsCounterElement.textContent = photo.comments.length;
  initComments(photo.comments);
  bigPictureDescriptionElement.textContent = `${photo.description}`;
};

const сloseButtonClickHandler = () => {
  closeBigPicture();
};

const documentKeyDownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

function closeBigPicture() {
  bigPictureElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  bigPictureCloseButtonElement.removeEventListener('click', сloseButtonClickHandler);
  document.removeEventListener('keydown', documentKeyDownHandler);
  countRenderedComments = COMMENTS_COUNT;
}

export const showBigPicture = (photo) => {
  initBigPicture(photo);
  bigPictureElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPictureCloseButtonElement.addEventListener('click', сloseButtonClickHandler);
  document.addEventListener('keydown', documentKeyDownHandler);
  bigPictureCommentsLoaderButtonElement.removeEventListener('click', bigPictureCommentsLoaderButtonElement);
};
