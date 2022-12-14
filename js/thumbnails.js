import { showBigPicture } from './big-picture.js';
const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const addThumbnailClickHandlers = (picture, photo) => {
  picture.addEventListener('click', () => {
    showBigPicture(photo);
  });
};

export const drowThumbnails = (photos)  => {
  const picturesFragment = document.createDocumentFragment();
  for (const photo of photos) {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = photo.url;
    picture.querySelector('.picture__likes').textContent = photo.likes;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;
    addThumbnailClickHandlers(picture, photo);
    picturesFragment.appendChild(picture);
  }
  picturesElement.appendChild(picturesFragment);
};

export const removeThumbnails = () => {
  const photos = document.querySelectorAll('.picture');
  photos.forEach((element) => element.remove());
};
