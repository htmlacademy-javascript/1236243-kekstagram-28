import { allPictures, pictures} from './miniatures.js';
import { isEscKey } from './util.js';
import { createComment} from './create-comment.js';

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
const socialCommentMin = social.querySelector('.comment-min')
const COMMENTS_PER_PORTION = 5

let countShow = 0

let allComments = []

const createComments = function  (dataComments) {
  socialComments.innerHTML = '';
  const commentsListFragment = document.createDocumentFragment();
  dataComments.map((comment) => {
    commentsListFragment.appendChild(createComment(comment));
  });
  
  return socialComments.appendChild(commentsListFragment);
}

const renderBigFoto = function () {
  allPictures.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.closest('a')) {
      onClickPicture();
      const i = evt.target.closest('a').dataset.index;
      allComments = pictures[i].comments

      bigPictureImg.src = pictures[i].url;
      socialCaption.textContent = pictures[i].description;
      bigPictureLike.textContent = pictures[i].likes;
      bigPictureComment.textContent = pictures[i].comments.length;

      countShow = 0
      addComments()
      if (allComments.length <= countShow) {
        socialCommentMin.textContent = allComments.length
        socialCommentsButton.classList.add('hidden')
      } else {
        socialCommentMin.textContent = countShow
      }
      socialCommentsButton.addEventListener('click', addComments) 
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
  socialCommentsButton.addEventListener('click', addComments)
}

function addComments () {
  countShow += COMMENTS_PER_PORTION
  let commentSlice = allComments.slice(0, countShow)
  createComments(commentSlice)
  socialCommentMin.textContent = commentSlice.length
  if (allComments.length <= countShow) {
    socialCommentsButton.classList.add('hidden')
  }
}

function onClosePicture () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  body.classList.remove('modal-open');
  countShow = 0
  socialCommentsButton.classList.remove('hidden')
  socialCommentsButton.removeEventListener('click', addComments)
}

function onDocumentEscKeyDown (evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    onClosePicture();
  }
}

export {renderBigFoto};
