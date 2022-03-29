import { multipleObject } from './data.js';
import { renderPopup } from './render-thumbnails.js';

const photos = multipleObject();
const containerPhotos = document.querySelector('.pictures');
const templateWrapper = document.querySelector('#picture').content;
const template = templateWrapper.querySelector('a');
const fragment = document.createDocumentFragment();

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

