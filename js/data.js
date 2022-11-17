import {getRandomArrayElement, getRandomPositiveInteger} from './utils.js';
import { DESCRIPTIONS, COMMENTS_MESSAGES, NAMES, MIN_COUNT_LIKE, MAX_COUNT_LIKE, COMMENTS_COUNT, PHOTOS_COUNT } from './consts.js';

const createNewComment = (id) => ({
  id,
  avatar: `img/avatar-${id}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createNewPhotosData = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(MIN_COUNT_LIKE, MAX_COUNT_LIKE),
  comments: Array.from({length: COMMENTS_COUNT}, (_, index) => createNewComment(index + 1))
});

export const createPhotos = () => Array.from({length: PHOTOS_COUNT}, (_, index) => createNewPhotosData(index + 1));
