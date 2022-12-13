import { isEscapeKey } from './utils.js';
import { COMMENTS_COUNT } from './consts.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCounter = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCounter =  bigPicture.querySelector('.comments-count');
const bigPictureComment = bigPicture.querySelector('.social__comments');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCloseButton =  bigPicture.querySelector('.big-picture__cancel');
const bigPictureCommentsLoaderButton = bigPicture.querySelector('.comments-loader');

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
  bigPictureCommentsCounter.innerHTML='';
  bigPictureCommentsCounter.insertAdjacentHTML('afterbegin', actualComments.length);
};

const renderComments = () => {
  getCounterComments();

  bigPictureComment.innerHTML='';
  const commentsTemplate = actualComments.slice(0, countRenderedComments).map((comment) => transformCommentToHTML(comment)).join('');
  bigPictureComment.insertAdjacentHTML('afterbegin', commentsTemplate);

  if (countRenderedComments >= actualComments.length) {
    bigPictureCommentsLoaderButton.removeEventListener('click', bigPictureCommentsLoaderButton);
    bigPictureCommentsLoaderButton.classList.add('hidden');
  }
};

const onBigPictureCommentsLoaderButtonClick = () => {
  countRenderedComments += COMMENTS_COUNT;
  renderComments();
};

const initComments = (comments) => {
  actualComments = comments.slice();
  bigPictureComment.innerHTML='';

  if (comments.length === 0) {
    bigPictureCommentsLoaderButton.classList.add('hidden');
    bigPictureCommentsCounter.textContent='Нет комментариев';
    return;
  }

  renderComments();
  bigPictureCommentsLoaderButton.addEventListener('click', onBigPictureCommentsLoaderButtonClick);
};

const initBigPicture = (photo) => {
  bigPictureImg.src = photo.url;
  bigPictureLikesCounter.textContent = photo.likes;
  bigPictureCommentsCounter.textContent = photo.comments.length;
  initComments(photo.comments);
  bigPictureDescription.textContent = `${photo.description}`;
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
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  bigPictureCloseButton.removeEventListener('click', сloseButtonClickHandler);
  document.removeEventListener('keydown', documentKeyDownHandler);
  countRenderedComments = COMMENTS_COUNT;
}

export const showBigPicture = (photo) => {
  initBigPicture(photo);
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPictureCloseButton.addEventListener('click', сloseButtonClickHandler);
  document.addEventListener('keydown', documentKeyDownHandler);
  bigPictureCommentsLoaderButton.removeEventListener('click', bigPictureCommentsLoaderButton);
};
