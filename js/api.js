import {showAlertMessage} from './alert-message.js';

const API_URL = {
  load:'https://26.javascript.pages.academy/kekstagram',
  send:'https://26.javascript.pages.academy/kekstagram'
};

export const getDataFromServer = (onSuccess) => {
  fetch(`${API_URL.load}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((posts) => {
      onSuccess(posts);
    })
    .catch(() => {
      showAlertMessage('Не удалось загрузить данные с сервера');
    });
};


export const sendDataToServer = (formData, onSuccess, onError) => {
  fetch(
    API_URL.send,
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onError();
    })
    .catch(() => onError());
};
