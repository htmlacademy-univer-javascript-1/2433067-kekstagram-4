import { uploadHashtagInput, clearHashtagsField } from './hashtag.js';
import { pressEscape } from './util.js';
import { setScale } from './scale.js';
import { setEffects } from './effect.js';

const uploadingControl = document.querySelector('#upload-file');
const uploadingOverlay = document.querySelector('.img-upload__overlay');
const uploadingClose = document.querySelector('#upload-cancel');

const uploadingComments = uploadingOverlay.querySelector('.text__description');
const uploadingButton = uploadingOverlay.querySelector('#upload-submit');

const clearForm = () => {
  uploadingOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  uploadingControl.value = '';
  clearHashtagsField();
  uploadingComments.value = '';

  uploadingButton.disabled = false;
};

const onEscapeKeyDown = (evt) => {
  if(pressEscape(evt) && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    clearForm();

    document.removeEventListener('keydown', onEscapeKeyDown);
  }
};

uploadingClose.addEventListener('click', () => {
  clearForm();

  document.removeEventListener('keydown', onEscapeKeyDown);
});

const onUploadClick = () => {
  document.addEventListener('keydown', onEscapeKeyDown);

  uploadingOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  setScale();
  setEffects();

  uploadHashtagInput();
};

const uploadForm = () => {
  uploadingControl.addEventListener('change', onUploadClick);
};

export{uploadForm};
