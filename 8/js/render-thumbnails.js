const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const fragment = document.createDocumentFragment();
let socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentButton = document.querySelector('.social__comments-loader');

const createCommentElement = function (comment) {
  // console.log(comment);
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  const commentsListItem = document.createElement('li'); //создать элемент 'li' с классом social__comment
  commentsListItem.classList.add('social__comment'); //создать элемент 'li' с классом social__comment
  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = 35;
  img.height = 35;
  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = comment.message;
  commentsListItem.appendChild(img);
  commentsListItem.appendChild(p);
  return commentsListItem;
};

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

  socialCommentButton.addEventListener('click', () => {
    socialCommentCount++; //увеличивать значение переменной , которая отвечает за лимит комментариев.
    // console.log(photo);
    for (let i = 0; i < 5; i++) {
      fragment.appendChild(createCommentElement(photo.comments[i]));
    }
    socialComments.appendChild(fragment);
    createCommentElement(socialCommentCount++);// вызвать функцию, которая будет отрисовывать комментарии в цикле,
    //по количеству ссылаясь на переменную
  });
};

export { renderPopup };
