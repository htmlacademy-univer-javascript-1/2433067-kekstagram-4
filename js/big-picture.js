import {setComments, bigPicture} from './comment.js';
import {pressEscape} from './util.js';

const closeButton = bigPicture.querySelector('#picture-cancel');

const bigMenu = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};


const onDocumentKeydown = (evt) => {
  if(pressEscape(evt)){
    bigMenu();

    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

closeButton.addEventListener('click', () => {bigMenu();

  document.removeEventListener('keydown', onDocumentKeydown);
});

const addBigPicture = (data) => {
  document.addEventListener('keydown', onDocumentKeydown);

  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.social__caption').textContent = data.description;

  setComments(data.comments);

  document.querySelector('body').classList.add('modal-open');
};

export {addBigPicture};
