import {getRandInt, getId, generateArray} from './util.js';

const COUNT_PHOTO = 25;
const COUNT_COMMENT = 10;
const photosId = generateArray(25,25);
const usersId = generateArray(25,25);

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
const CreateComment = () => ({
  id: getId(usersId),
  avatar: `img/avatar-${ getRandInt(1, 6) }.svg`,
  message: MESSAGE[getRandInt(0, 1)],
  name: NAMES[getRandInt(0,NAMES.length-1)]
});

const CreatePhoto = () => ({
  id: photosId[getRandInt(1,COUNT_PHOTO-1)],
  url: `photos/${getRandInt(1,COUNT_PHOTO-1)}.jpg`,
  description: DESCRIPTION[getRandInt(0, DESCRIPTION.length-1)],
  likes:getRandInt(15, 200),
  comments: Array.from({length: getRandInt(1, COUNT_COMMENT) }, CreateComment)
});

const CreatedPhotos = () => Array.from({length: COUNT_PHOTO}, CreatePhoto);

export {CreatedPhotos};
