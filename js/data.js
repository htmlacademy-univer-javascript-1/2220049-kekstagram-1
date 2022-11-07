import {getRandomArrayElement, getRandomPositiveInteger} from './utils.js';
const MIN_COUNT_LIKE = 15;
const MAX_COUNT_LIKE = 200;
const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 5;
const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Илья',
  'Артем',
  'Ксения',
  'Евгений',
  'Максим',
  'Денис',
  'Ольга',
  'Анастасия'
];
const DESCRIPTIONS = [
  'А мы поехали на море',
  'Горы прекрасны всегда!',
  'Любите ли вы кофе так, как люблю его я?',
  'Семейный поход в театр удался!',
  'Новая фотосессия',
  'Как часто вы занимаетесь спортом?',
  'Побывал на концерте любимого исполнителя'
];

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
  comments: Array.from({length: COMMENTS_COUNT}, (value, index) => createNewComment(index + 1))
});

const createPhotos = () => Array.from({length: PHOTOS_COUNT}, (value, index) => createNewPhotosData(index + 1));
export {createPhotos};
