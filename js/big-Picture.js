import { isEscapeKey } from './utils.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCounter = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCounter =  bigPicture.querySelector('.comments-count');
const bigPictureComment = bigPicture.querySelector('.social__comments');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCloseButton =  bigPicture.querySelector('.big-picture__cancel');


const transformCommentToHTML = (comment) =>
  `<li class="social__comment">
  <img
      class="social__picture"
      src="${comment.avatar}"
      alt="${comment.name}"
      width="35" height="35">
  <p class="social__text">${comment.message}</p>
</li>`;

const initComments = (comments) => {
  bigPictureComment.innerHTML='';
  for (const comment of comments) {
    bigPictureComment.insertAdjacentHTML('beforeend',transformCommentToHTML(comment));
  }
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

const сloseKeyDownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  bigPictureCloseButton.removeEventListener('click', сloseButtonClickHandler);
  document.removeEventListener('keydown', сloseKeyDownHandler);
}

export const showBigPicture = (photo) => {
  initBigPicture(photo);
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPictureCloseButton.addEventListener('click', сloseButtonClickHandler);
  document.addEventListener('keydown', сloseKeyDownHandler);
};
