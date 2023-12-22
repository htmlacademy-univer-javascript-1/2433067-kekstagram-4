import {CreatedPhotos} from './data.js';
import {renderPictures} from './pictures.js';
import {uploadForm} from './form.js';

const picturesArray = CreatedPhotos();
renderPictures(picturesArray);

uploadForm();
