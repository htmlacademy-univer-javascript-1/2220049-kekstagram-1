export const HASHTAG_REGEXP = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
export const MIN_COUNT_LIKE = 15;
export const MAX_COUNT_LIKE = 200;
export const PHOTOS_COUNT = 25;
export const COMMENTS_COUNT = 5;
export const MAX_HASHTAG_LENGTH = 20;
export const MAX_HASHTAG_COUNT = 5;
export const MAX_COMMENT_LENGTH = 140;
export const PREVIEW_SCALE_STEP = 25;
export const PREVIEW_MIN_SCALE = 25;
export const PREVIEW_MAX_SCALE = 100;
export const PREVIEW_DEFAULT_SCALE = 100;
export const ALERT_SHOW_TIME = 5000;
export const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
export const NAMES = [
  'Илья',
  'Артем',
  'Ксения',
  'Евгений',
  'Максим',
  'Денис',
  'Ольга',
  'Анастасия'
];
export const DESCRIPTIONS = [
  'А мы поехали на море',
  'Горы прекрасны всегда!',
  'Любите ли вы кофе так, как люблю его я?',
  'Семейный поход в театр удался!',
  'Новая фотосессия',
  'Как часто вы занимаетесь спортом?',
  'Побывал на концерте любимого исполнителя'
];

export const ERROR_MESSAGES = {
  MAX_HASHTAG_COUNT: `Максимальное число хэш-тегов - ${MAX_HASHTAG_COUNT}`,
  HASHTAG_IS_FIRST: 'Все хэш-теги должны начинаться с символа "#"',
  MIN_HASHTAGS_LENGTH: 'Хэш-тег не может состоять только из символа "#"',
  MAX_HASHTAGS_LENGTH: `Максимальная длина хэш-тега ${MAX_HASHTAG_LENGTH} символов`,
  HASHTAGS_SYMBOLS: 'Хэш-тег может состоять только из символа "#", букв и цифр',
  DUPLICATE_HASTAGS_ERROR: 'Хэш-тэги не должны повторяться (не чувствительны к регистру)',
  MAX_DESCRIPTION_LENGTH_ERROR: `Максимальная длина комментария ${MAX_COMMENT_LENGTH} символов`
};

export const NO_PREVIEW_EFFECT = 'none';

export const PREVIEW_EFFECT_SETTINGS = {
  chrome: {
    options: {
      range: { min: 0, max: 1, },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: { min: 0, max: 1, },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: { min: 0, max: 100, },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: { min: 0, max: 3, },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: { min: 1, max: 3, },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};

export const UPLOAD_MESSAGE_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error'
};
