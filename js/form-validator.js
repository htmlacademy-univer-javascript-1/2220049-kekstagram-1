import { MAX_COMMENT_LENGTH, HASHTAG_REGEXP, MAX_HASHTAG_LENGTH, MAX_HASHTAG_COUNT } from './consts.js';
import { chekMaxStringLength } from './utils.js';

const checkHashtagIsFirst = (value) => value.split(' ').every((word) => word.startsWith('#'));

const checkHashtagsSymbols = (value) => value.split(' ').every((word) => HASHTAG_REGEXP.test(word));

const checkMinHashtagsLength = (value) => value.split(' ').every((word) => word.length > 1);

const checkMaxHashtagLength = (value) => value.split(' ').every((word) => chekMaxStringLength(word, MAX_HASHTAG_LENGTH));

const checkHashtagCount = (value) => value.split(' ').length < MAX_HASHTAG_COUNT + 1;

const checkduplicateHashtags = (value) => {
  const hashtags = value.toLowerCase().split(' ');
  const uniqueHashtags = new Set(hashtags);
  return hashtags.length === uniqueHashtags.size;
};

export const addValidators = (pristine, hashtagsField, descriptionField) => {
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkHashtagCount(value),
    `Максимальное число хэш-тегов - ${MAX_HASHTAG_COUNT}`, 6, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkHashtagIsFirst(value),
    'Все хэш-теги должны начинаться с символа "#"', 5, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkMinHashtagsLength(value),
    'Хештег не может состоять только из символа "#"', 4, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkMaxHashtagLength(value),
    `Максимальная длина хэш-тега ${MAX_HASHTAG_LENGTH} символов`, 3, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkHashtagsSymbols(value),
    'Хэш-тег может состоять только из символа "#", букв и цифр', 2, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkduplicateHashtags(value),
    'Хэш-тэги не должны повторяться (не чувствительны к регистру)', 1, true);

  pristine.addValidator(descriptionField,
    (value) => value === '' ? true : chekMaxStringLength(value, MAX_COMMENT_LENGTH),
    `Максимальная длина комментария ${MAX_COMMENT_LENGTH} символов lkf`, 1, true);
};
