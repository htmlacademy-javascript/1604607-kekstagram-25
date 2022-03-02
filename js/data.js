import { getRandomNumber, getRandomArrayElement } from './util.js';


let currentId = 0;
const DESCRIPTIONS = [
  'музыка исцеляет мою душу',
  'люблю порядок во всем',
  'дорогу осилит идущий',
  'просто хороший день',
];

const NAMES = [
  'Мария',
  'Вася',
  'Иван',
  'Саша',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const OBJECT_COUNT = 25;

const createObject = function () {
  currentId++;
  return {
    id: currentId,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    url: `photos/${currentId}.jpg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: Array.from(getRandomNumber(3, 15), () => getRandomArrayElement(MESSAGES))
  };
};

const multipleObject = () => Array.from({ length: OBJECT_COUNT }, createObject);
multipleObject();
