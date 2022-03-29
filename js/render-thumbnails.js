const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentButton = document.querySelector('.social__comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
const currentNumber = bigPicture.querySelector('.comment-current');


const createCommentElement = function (comment) { // создала комментарий со всем его содержимым - аватар, текст, имя. И все это "экспортировала"
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

const renderComments = function (commentsArray, limiter) { // проверяю длину массива комментария и ограничителя.
  socialComments.innerHTML = '';
  for (let i = 0; i < limiter; i++) {
    if (commentsArray[i]) {
      socialComments.appendChild(createCommentElement(commentsArray[i]));
    }
  }
};


const renderPopup = (photoObject) => {
  let maxVisibleComments = 5;
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


  const setLoadMoreButtonVisibility = function () { // проверяю, что указанные в комментариях числа соответсовали, от этого зависит нужно ли скрывать кнопку, или нет
    if (maxVisibleComments > photoObject.comments.length) {
      socialCommentButton.classList.add('hidden');
    }

  };


  const setInfo = function () {
    const img = bigPicture.querySelector('.big-picture__img img');
    img.src = photoObject.url;
    const likes = bigPicture.querySelector('.likes-count');
    likes.textContent = photoObject.likes;
    const comments = bigPicture.querySelector('.comments-count');
    comments.textContent = photoObject.comments.length;
    const description = bigPicture.querySelector('.social__caption');
    description.textContent = photoObject.description;
  };
  setInfo();

  renderComments(photoObject.comments, maxVisibleComments); // вызов функции
  setLoadMoreButtonVisibility(); //тоже вызов
  currentNumber.textContent = socialComments.childElementCount;
  socialCommentButton.addEventListener('click', () => {
    maxVisibleComments += 5;
    renderComments(photoObject.comments, maxVisibleComments);
    setLoadMoreButtonVisibility();
    currentNumber.textContent = socialComments.childElementCount;
  });
};

export { renderPopup };

