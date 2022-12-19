import {showAlertMessage} from './alert-message.js';

const API_URL = 'https://26.javascript.pages.academy/kekstagram';
const API_URL1 = 'https://26.javascript.pages.acaemy/kekstagram';


export const getDataFromServer = (onSuccess) => {
  fetch(`${API_URL}/data`)
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
    API_URL1,
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
