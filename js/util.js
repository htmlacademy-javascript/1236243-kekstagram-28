const isEscKey = (evt) => evt.key === 'Escape';

const compareComments = function (commentA, commentB) {
  return commentB.comments.length - commentA.comments.length;
};

function debounce (callback, timeoutDelay) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;
  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);
    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.classList.add('alert');
  alert.textContent = message;
  document.body.append(alert);
  setTimeout(() => {
    alert.remove();
  }, 5000);
};

export {isEscKey, compareComments, debounce, showAlert};