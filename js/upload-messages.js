import { isEscapeKey } from './utils.js';
import { UPLOAD_MESSAGE_TYPE, ALERT_SHOW_TIME } from './consts.js';

const uploadMessageTemplateSelector = {
  [UPLOAD_MESSAGE_TYPE.SUCCESS]: '#success',
  [UPLOAD_MESSAGE_TYPE.ERROR]: '#error'
};

export const openUploadResultMessage = (uploadMessage) => {

  const templateSelector = uploadMessageTemplateSelector[uploadMessage];
  const templateElement = document.querySelector(templateSelector);
  const uploadMessageElement = templateElement.content.firstElementChild.cloneNode(true);
  const uploadMessageContentElement = uploadMessageElement.querySelector(`.${uploadMessage}__inner`);
  const uploadMessageCloseButtonElement = uploadMessageElement.querySelector(`.${uploadMessage}__button`);

  const closeUploadMessage = () => {
    uploadMessageElement.removeEventListener('click', outsideClickHandler);
    uploadMessageElement.remove();
  };

  function outsideClickHandler (evt) {
    if (evt.composedPath().includes(uploadMessageContentElement)) {
      return;
    }
    closeUploadMessage();
  }

  const uploadMessageCloseHandler = () => {
    closeUploadMessage();
  };

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      closeUploadMessage();
    }
  }, { once: true });

  uploadMessageElement.addEventListener('click', outsideClickHandler);

  uploadMessageCloseButtonElement.addEventListener('click', uploadMessageCloseHandler, {
    once: true,
  });

  setTimeout(() => {
    closeUploadMessage();
  }, ALERT_SHOW_TIME);

  document.body.append(uploadMessageElement);
};

