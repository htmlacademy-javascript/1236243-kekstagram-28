import { getFotos } from './data.js';

const allPictures = document.querySelector('.pictures'); // находим место, куда вставлять фото

const pictureTemplate = document.querySelector('#picture') // находим шаблон
  .content
  .querySelector('.picture');


const pictures = getFotos(); //массив фото
const picturesFragment = document.createDocumentFragment();

pictures.forEach((picture, index) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.dataset.index = index;
  picturesFragment.appendChild(pictureElement);

});


const renderMiniFoto = function () {
  allPictures.appendChild(picturesFragment);
};

export {renderMiniFoto, allPictures, pictures};
