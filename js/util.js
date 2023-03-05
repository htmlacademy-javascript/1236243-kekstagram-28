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

export {getRandomInteger, getRandomArrayElement, generateCommentId};
