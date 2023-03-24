const createComment = function (comment) {
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

  return li;
};

export {createComment};
