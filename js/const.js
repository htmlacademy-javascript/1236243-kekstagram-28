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

const EFFECTS = [
  {
      name: 'none', 
      style: '', 
      min: 0,
      max: 100, 
      step: 1, 
      unit: '',
  },
  {
      name: 'chrome', 
      style: 'grayscale', 
      min: 0,
      max: 1, 
      step: 0.1, 
      unit: '',
  },
  {
      name: 'sepia', 
      style: 'sepia', 
      min: 0,
      max: 1, 
      step: 0.1, 
      unit: '',
  },
  {
      name: 'marvin', 
      style: 'invert', 
      min: 0,
      max: 100, 
      step: 1, 
      unit: '%',
  },
  {
      name: 'phobos', 
      style: 'blur', 
      min: 0,
      max: 3, 
      step: 0.1, 
      unit: 'px',
  },
  {
      name: 'heat', 
      style: 'brightness', 
      min: 0,
      max: 3, 
      step: 0.1, 
      unit: '',
  },
];

export {FOTOS, MESSAGE, NAME, DESCRIPTION, EFFECTS};
