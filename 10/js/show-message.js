const uploadSuccess = document.querySelector('#success').content;
const uploadError = document.querySelector('#error').content;
const successButton = uploadSuccess.querySelector('.success__button');
const errorButton = uploadError.querySelector('.error__button');

const showSuccessMessage = () => {
  const template = uploadSuccess.querySelector('section');
  document.body.appendChild(template);
  successButton.addEventListener('click', () => {
    document.body.removeChild(template);
  });
  template.addEventListener('click', () => {
    document.body.removeChild(template);
  });
  document.addEventListener('keyup', (evt) => {
    if (evt.key === 'Escape') {
      document.body.removeChild(template);
    }
  });
};

const showErrorMessage = () => {
  const template = uploadError.querySelector('section');
  document.body.appendChild(template);
  errorButton.addEventListener('click', () => {
    document.body.removeChild(template);
  });
  template.addEventListener('click', () => {
    document.body.removeChild(template);
  });
  document.addEventListener('keyup', (evt) => {
    if (evt.key === 'Escape') {
      document.body.removeChild(template);
    }
  });
};

export { showSuccessMessage, showErrorMessage };
