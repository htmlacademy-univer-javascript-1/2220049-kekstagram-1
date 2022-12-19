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

export const MAX_COUNT_RANDOM_PHOTO = 10;
export const TIMEOUT_THUBNAILS_FILTERS = 500;

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


export const ALERT_SHOW_TIME = 5000;

export const UPLOAD_MESSAGE_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error'
};
