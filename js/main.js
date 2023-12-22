import {setData} from './api.js';
import {uploadForm} from './form.js';
import {renderPictures} from './pictures.js';

setData(renderPictures,
  () => {showUnloadingErrorMessage('Не удалось загрузить данные из сервера :(');
  },
  'GET');

uploadForm();
