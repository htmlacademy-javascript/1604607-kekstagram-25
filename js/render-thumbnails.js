const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const fragment = document.createDocumentFragment();


const renderPopup = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  const closeWindow = function () {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    closeButton.removeEventListener('click', closeWindow);
  };

  closeButton.addEventListener('click', closeWindow);

  document.addEventListener('keyup', (evt) => {
    if (evt.key === 'Escape') {
      closeWindow();
    }
  });

  const setInfo = function () {
    const img = bigPicture.querySelector('.big-picture__img img');
    img.src = photo.url;
    const likes = bigPicture.querySelector('.likes-count');
    likes.textContent = photo.likes;
    const comments = bigPicture.querySelector('.comments-count');
    comments.textContent = photo.comments.length;
    const description = bigPicture.querySelector('.social__caption');
    description.textContent = photo.description;
  };
  setInfo();


  const socialComments = bigPicture.querySelector('.social__comments');
  socialComments.innerHTML = '';
  socialComments.appendChild(fragment);
};
export { renderPopup };
