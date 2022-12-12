import { MAX_COMMENT_LENGTH, HASHTAG_REGEXP, MAX_HASHTAG_LENGTH, MAX_HASHTAG_COUNT, ERROR_MESSAGES } from './consts.js';
import { chekMaxStringLength } from './utils.js';

const checkHashtagIsFirst = (value) => value.split(' ').every((word) => word.startsWith('#'));

const checkHashtagsSymbols = (value) => value.split(' ').every((word) => HASHTAG_REGEXP.test(word));

const checkMinHashtagsLength = (value) => value.split(' ').every((word) => word.length > 1);

const checkMaxHashtagLength = (value) => value.split(' ').every((word) => chekMaxStringLength(word, MAX_HASHTAG_LENGTH));

const checkHashtagCount = (value) => value.split(' ').length < MAX_HASHTAG_COUNT + 1;

const checkDuplicateHashtags = (value) => {
  const hashtags = value.toLowerCase().split(' ');
  const uniqueHashtags = new Set(hashtags);
  return hashtags.length === uniqueHashtags.size;
};

export const addValidators = (pristine, hashtagsField, descriptionField) => {
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkHashtagCount(value),
    ERROR_MESSAGES.MAX_HASHTAG_COUNT_ERROR, 6, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkHashtagIsFirst(value),
    ERROR_MESSAGES.HASHTAG_IS_FIRST_ERROR, 5, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkMinHashtagsLength(value),
    ERROR_MESSAGES.MIN_HASHTAGS_LENGTH_ERROR, 4, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkMaxHashtagLength(value),
    ERROR_MESSAGES.MAX_HASHTAGS_LENGTH_ERROR, 3, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkHashtagsSymbols(value),
    ERROR_MESSAGES.HASHTAGS_SYMBOLS_ERROR, 2, true);
  pristine.addValidator(hashtagsField,
    (value) => value === '' ? true : checkDuplicateHashtags(value),
    ERROR_MESSAGES.DUPLICATE_HASTAGS_ERROR, 1, true);

  pristine.addValidator(descriptionField,
    (value) => value === '' ? true : chekMaxStringLength(value, MAX_COMMENT_LENGTH),
    ERROR_MESSAGES.MAX_DESCRIPTION_LENGTH_ERROR, 1, true);
};
