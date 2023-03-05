import {FOTOS, MESSAGE, NAME, DESCRIPTION} from './const.js';
import {getRandomInteger, getRandomArrayElement, generateCommentId} from './util.js';

const createComment = () => {

  const comment = {
    id: generateCommentId(), // Рандомное число, не повторяется
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE), //Рандомное предложение
    name: getRandomArrayElement(NAME) // Рандомное имя
  };
  return comment;
};

const createArrayComments = () => Array.from({length: getRandomInteger(1, 5)}, () => createComment());

const getDescriptionFoto = function (index) {
  const descriptionFoto = {
    id: index, // Рандомное число от 1 до 25, не повторяется
    url: `photos/${index}.jpg`, //Рандомное число от 1 до 25, не повторяется
    description: getRandomArrayElement(DESCRIPTION), // Рандомное описание
    likes: getRandomInteger(15,200), // Рандомное число от 15 до 200
    comments: createArrayComments(), // массив комментариев
  };

  return descriptionFoto;
};


const getFotos = () => Array.from({length: FOTOS}, (_, pictureIndex) => getDescriptionFoto(pictureIndex + 1));

export { getFotos };
