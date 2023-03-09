import { getFotos } from './data.js';

const allPictures = document.querySelector('.pictures'); // находим место, куда вставлять фото

const pictureTemplate = document.querySelector('#picture') // находим шаблон
  .content
  .querySelector('.picture');

const miniPictures = function () {
  const pictures = getFotos(); //массив фото
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesFragment.appendChild(pictureElement);
  });

  allPictures.appendChild(picturesFragment);
  return allPictures;
};

miniPictures();

export {allPictures};
