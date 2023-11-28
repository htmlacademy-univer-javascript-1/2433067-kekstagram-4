import {createDescriptionPhoto} from './data.js';
const photoTemplate = document.querySelector('#picture').textContent.querySelector('.picture');
const photoList = document.querySelector('pictures');
const photoListFragment = document.createDocumentFragment();
const photosArray = createDescriptionPhoto();

photosArray.forEach((pictureData) => {
  const picture = photoTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');

  pictureImg.src = pictureData.url;
  pictureImg.dataset.pictureData = JSON.stringify(pictureData);

  picture.querySelector('.picture__comments').textContent = pictureData.comments.length.toString();
  picture.querySelector('.picture__likes').textContent = pictureData.likes;

  photoListFragment.appendChild(picture);
});

photoList.appendChild(photoListFragment);
