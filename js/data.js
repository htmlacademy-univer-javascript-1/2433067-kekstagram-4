import {getRandInt, getId, generateArray} from './util.js';

const COUNT_PHOTO = 25;
const COUNT_COMMENT = 10;
const photosId = generateArray(25,25);
const usersId = generateArray(25,25);

const MESSAGES = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Не могу разглядеть',
  'Такая красота',
  'Тяжело',
  'Не понимаю как сделать',
  'Что-то явно не так'
];

const NAMES = [
  'Александр Петрович',
  'Красивый пейзаж',
  'Лелик',
  'Jack',
  'Lokki',
  'Иван Юрьевич'
];

const DESCRIPTIONS = [
  'Отых с семьей',
  'Вкусный ужин',
  'Вид красивый открывается'
];


const CreateComment = () => ({
  id: getId(usersId),
  avatar: `img/avatar-${ getRandInt(1, 6) }.svg`,
  message: MESSAGES[getRandInt(0, 1)],
  name: NAMES[getRandInt(0,NAMES.length-1)]
});

const CreatePhoto = () => ({
  id: photosId[getRandInt(1,COUNT_PHOTO-1)],
  url: `photos/${getRandInt(1,COUNT_PHOTO-1)}.jpg`,
  description: DESCRIPTIONS[getRandInt(0, DESCRIPTIONS.length-1)],
  likes:getRandInt(15, 200),
  comments: Array.from({length: getRandInt(1, COUNT_COMMENT) }, CreateComment)
});

const CreatedPhotos = () => Array.from({length: COUNT_PHOTO}, CreatePhoto);

export {CreatedPhotos};

