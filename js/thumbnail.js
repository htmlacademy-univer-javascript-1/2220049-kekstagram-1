import { showBigPicture } from './bigPicture.js';
const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const addThumbnailClickHandler = (picture, photo) => {
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
    addThumbnailClickHandler(picture, photo);
    picturesFragment.appendChild(picture);
  }
  pictures.appendChild(picturesFragment);
};
