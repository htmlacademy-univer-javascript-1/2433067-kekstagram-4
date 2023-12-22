import {uploadHashtagInput, clearHashtagsField, checkFormValidation, form} from './hashtag.js';
import {pressEscape} from './util.js';
import {setScale, uploadingOverlay} from './scale.js';
import {setEffects} from './effect.js';
import {setData} from './api.js';
import {addPostMessages, showSuccessMessage, closeMessage, showErrorMessage} from './post-message.js';
import { uploadUserPicture} from './user-picture.js';

const uploadingControl = form.querySelector('#upload-file');
const uploadingClose = form.querySelector('#upload-cancel');

const uploadingComments = uploadingOverlay.querySelector('.text__description');
const uploadingButton = uploadingOverlay.querySelector('#upload-submit');

const clearForm = () => {
  uploadingOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  uploadingControl.value = '';
  clearHashtagsField();
  uploadingComments.value = '';

  closeMessage();

  uploadingButton.disabled = false;
};

const onEscapeKeyDown = (evt) => {
  if(pressEscape(evt) && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    clearForm();

    document.removeEventListener('keydown', onEscapeKeyDown);
  }
};

const closeForm = () => {
  clearForm();

  document.removeEventListener('keydown', onEscapeKeyDown);
};

uploadingClose.addEventListener('click', closeForm);

const onUploadClick = () => {
  document.addEventListener('keydown', onEscapeKeyDown);

  uploadUserPicture(uploadingControl.files[0]);

  uploadingOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  setScale();
  setEffects();

  uploadHashtagInput();
};

const uploadForm = () => {
  uploadingControl.addEventListener('change', onUploadClick);
  addPostMessages();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  if(checkFormValidation()) {
    setData(showSuccessMessage, showErrorMessage, 'POST', new FormData(form));
  }
};

form.addEventListener('submit', onFormSubmit);

export{uploadForm, closeForm, onEscapeKeyDown};
