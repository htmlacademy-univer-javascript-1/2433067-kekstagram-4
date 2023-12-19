import {CreatedPhotos} from './data.js';
import {renderPictures} from './pictures.js';
import {uploadForm} from './upload-form.js';

const picturesArray = CreatedPhotos();
renderPictures(picturesArray);

uploadForm();

