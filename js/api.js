// eslint-disable-next-line no-unused-vars
const URL = {
  'GET': 'https://29.javascript.pages.academy/kekstagram/data',
  'POST': 'https://29.javascript.pages.academy/kekstagram'
};

const setData = (onSuccess, onFail, method, body) => {fetch(URL[method], {method: method,body})
  .then((response) => response.json()).then((pictures) => { onSuccess(pictures);
  }).catch((message) => {onFail(message);
  });
};

export {setData};
