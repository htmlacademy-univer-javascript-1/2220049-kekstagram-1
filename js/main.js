const MIN_COUNT_LIKE = 15;
const MAX_COUNT_LIKE = 200;
const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 5;
const COMMENTS_MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Илья','Артем','Ксения','Евгений','Максим','Денис','Ольга','Анастасия'];
const DESCRIPTIONS = ['А мы поехали на море',
  'Горы прекрасны всегда!',
  'Любите ли вы кофе так, как люблю его я?',
  'Семейный поход в театр удался!',
  'Новая фотосессия',
  'Как часто вы занимаетесь спортом?',
  'Побывал на концерте любимого исполнителя'];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const chekStringLenght = (string, max) => string.Length < max + 1;

const createNewComment = (id) => ({
  id,
  avatar: `img/avatar-${id}.svg`,
  message: COMMENTS_MESSAGES[getRandomPositiveInteger(0, COMMENTS_MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});

const createNewPhotosData = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(MIN_COUNT_LIKE, MAX_COUNT_LIKE),
  comments: Array.from({length: COMMENTS_COUNT}, (value, index) => createNewComment(index + 1))
});

const photos = Array.from({length: PHOTOS_COUNT}, (value, index) => createNewPhotosData(index + 1));

//Заглушки, чтобы линтер не ругался
chekStringLenght('djjd');
