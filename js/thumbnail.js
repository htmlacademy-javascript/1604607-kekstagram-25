import { loadImages } from './load.js';
import { renderPopup } from './render-thumbnails.js';

const templateWrapper = document.querySelector('#picture').content;
const template = templateWrapper.querySelector('a');

const init = async () => {
  const containerPhotos = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  loadImages().then((photos) => {
    photos.forEach((photo) => {
      const a = template.cloneNode(true);
      a.querySelector('.picture__img').src = photo.url;
      a.querySelector('.picture__comments').textContent = photo.comments.length;
      a.querySelector('.picture__likes').textContent = photo.likes;
      a.addEventListener('click', () => {
        renderPopup(photo);
      });
      fragment.appendChild(a);
    });

    containerPhotos.appendChild(fragment);
  });
};

export { init };

