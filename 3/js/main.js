const FOTOS = 25;

// массив message
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// массив name
const NAME = [
  'Андрей',
  'Александра',
  'Игорь',
  'Софиn',
  'Серж',
  'Кот'
];
// массив description
const DESCRIPTION = [
  'Если смогу, я сделаю это. Конец истории.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.',
  'Улыбка — единственный тренд в моде, который актуален всегда.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Ни о чем не беспокойтесь. Потому что все лучшие умы на работе.',
  'Живите во всех тех моментах, которые вы не можете выразить словами.',
  'Признай это. Без меня, твоя жизнь была бы действительно скучной.',
  'Никогда не позволяйте никому скучать.',
  'Все только начинает становиться действительно хорошим.',
  'Утром, только одна хорошая мысль меняет смысл целого дня.',
  'Любите меня, от этого я буду сиять еще ярче.',
  'Мне нравится и улыбаюсь!'
];

//функция генератор id
const createIdGenerator = function () {
  let currentValue = 0;

  return () => {
    currentValue += 1;
    return currentValue;
  };
};
// Функция генератор случайного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//функция генератор случайного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];


const generateCommentId = createIdGenerator();

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

getFotos();
