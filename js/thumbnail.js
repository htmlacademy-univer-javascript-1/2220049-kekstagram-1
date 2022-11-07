import {createPhotos} from './data.js';

export const drowThumbnails = ()  => {
  const pictures = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const photos = createPhotos();
  const picturesFragment = document.createDocumentFragment();
  photos.forEach(({url, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.appendChild(picture);
  });
  pictures.appendChild(picturesFragment);
};
