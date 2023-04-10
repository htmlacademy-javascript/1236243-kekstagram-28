const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__wrapper input[type=file]');
const preview = document.querySelector('.user-pic');

const changeURL = () => {
  const foto = fileChooser.files[0];
  const fotoName = foto.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fotoName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(foto);
  }
};

export {changeURL};
