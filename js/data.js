import {getRandomArrayElement} from './util.js';
const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Петя',
  'Вася',
  'Натлья Петровна',
  'Евгений Николаевич',
  'Александр',
  'Анна',
  'Иван',
];

const DESCRIPTION = [
  'Семейный день!',
  'Ночное небо!',
  'Отдых на море',
  'Замечательный день!',
  'Любимые дети',
  'Наши питомцы'
];
const OBJECT_COUNT = 25;
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();
const generateUrlId = createIdGenerator();

const createMessege = () => getRandomInteger(0, 1)
  ? getRandomArrayElement(MESSAGE)
  : '${getRandomArrayElement(MESSAGE)} ${getRandomArrayElement(MESSAGE)}';

const createComment = () => ({
  id: generateCommentId(),
  avatar: 'img/avatar-/${getRandomInteger(1, 6)}.svg',
  message: createMessege(),
  name: getRandomArrayElement(NAMES)
});

const createDescriptionPhoto = () => ({
  id: generatePhotoId(),
  url: 'photos/${generateUrlId()}.jpg' ,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

export {createDescriptionPhoto};

