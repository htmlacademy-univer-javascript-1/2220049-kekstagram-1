import { TIMEOUT_THUBNAILS_FILTERS, MAX_COUNT_RANDOM_PHOTO } from './consts.js';
import { drowThumbnails, removeThumbnails } from './thumbnails.js';
import { debounce, shuffleArray } from './utils.js';

const filtersContainer = document.querySelector('.img-filters');
const filtersForm = filtersContainer.querySelector('.img-filters__form');

let photos = [];

const getFilteredPhotos = (filterName) => {
  let filteredPhotos = [];

  switch(filterName) {
    case 'filter-random':
      filteredPhotos = shuffleArray(photos).slice(0, MAX_COUNT_RANDOM_PHOTO);
      break;
    case 'filter-discussed':
      filteredPhotos = photos.slice().sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length);
      break;
    default:
      filteredPhotos = photos.slice();
  }
  return filteredPhotos;
};

const filtersFormClickHandler = (evt) => {
  const filterName = evt.target.id;
  removeThumbnails();
  drowThumbnails(getFilteredPhotos(filterName));
  filtersContainer.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

export const initFilters = (data) => {
  photos = data.slice();
  drowThumbnails(photos);
  filtersContainer.classList.remove('img-filters--inactive');
  filtersForm.addEventListener('click', debounce(filtersFormClickHandler, TIMEOUT_THUBNAILS_FILTERS));
};
