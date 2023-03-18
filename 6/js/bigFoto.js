import { allPictures, pictures} from './miniatures.js';
import { isEscKey } from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img').querySelector('img');
const closeButtonBigPicture = document.querySelector('.big-picture__cancel');
const bigPictureLike = document.querySelector('.likes-count');
const bigPictureComment = document.querySelector('.comments-count');
const social = document.querySelector('.big-picture__social');
const socialCaption = social.querySelector('.social__caption');
const socialComments = social.querySelector('.social__comments');
const socialCommentsCount = social.querySelector('.social__comment-count');
const socialCommentsButton = social.querySelector('.social__comments-loader');

const renderBigFoto = function () {
  allPictures.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.closest('a')) {
      onClickPicture();
      const i = evt.target.closest('a').dataset.index;

      socialCommentsCount.classList.add('hidden');
      socialCommentsButton.classList.add('hidden');

      bigPictureImg.src = pictures[i].url;
      socialCaption.textContent = pictures[i].description;
      bigPictureLike.textContent = pictures[i].likes;
      bigPictureComment.textContent = pictures[i].comments.length;

      socialComments.innerHTML = '';
      const commentsListFragment = document.createDocumentFragment();

      pictures[i].comments.map((comment) => {
        const li = document.createElement('li');
        const img = document.createElement ('img');
        const p = document.createElement('p');

        li.classList.add('social__comment');
        img.classList.add('social__picture');
        p.classList.add('social__text');
        img.src = comment.avatar;
        img.alt = comment.name;
        img.width = '35';
        img.height = '35';
        p.textContent = comment.message;

        li.append(img);
        li.append(p);
        commentsListFragment.appendChild(li);
      });

      socialComments.appendChild(commentsListFragment);
    }
  });
};


closeButtonBigPicture.addEventListener('click', () => {
  onClosePicture();
});

function onClickPicture () {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscKeyDown);
  body.classList.add('modal-open');
}


function onClosePicture () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  body.classList.remove('modal-open');
}

function onDocumentEscKeyDown (evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    onClosePicture();
  }
}

export {renderBigFoto};
