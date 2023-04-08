const allPictures = document.querySelector('.pictures'); // находим место, куда вставлять фото

const pictureTemplate = document.querySelector('#picture') // находим шаблон
  .content
  .querySelector('.picture');

const renderMiniFoto = function (dataPictures) {
  const picturesFragment = document.createDocumentFragment();
  allPictures.querySelectorAll('.picture').forEach((element) => element.remove());
  dataPictures
    .forEach((picture, index) => {
      const pictureElement = pictureTemplate.cloneNode(true);
      pictureElement.querySelector('.picture__img').src = picture.url;
      pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
      pictureElement.querySelector('.picture__likes').textContent = picture.likes;
      pictureElement.dataset.index = index;
      picturesFragment.appendChild(pictureElement);

    });

  allPictures.appendChild(picturesFragment);

};

export {renderMiniFoto, allPictures};
