import { validateHashTag } from './validation.js';
import { isFocused } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const imgOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');
const hashTag = document.querySelector('.img-upload__text .text');
const uploadForm = document.querySelector('.img-upload__form');

uploadFile.addEventListener('change', () => {
  imgOverlay.classList.remove('hidden');  //открыла форму
  document.body.classList.add('modal-open');
  hashTag.addEventListener('input', (evt) => {
    hashTag.setCustomValidity('');
    const validationResult = validateHashTag(evt.target.value);
    if (validationResult && validationResult.length) {
      hashTag.setCustomValidity(validationResult[0]);
      hashTag.reportValidity();
    }
  });

  document.addEventListener('keyup', (evt) => { // закрыла форму клавишей esc
    if (evt.key === 'Escape' && !isFocused(commentField)) {
      imgOverlay.classList.add('hidden');
    }
  });

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
});

uploadCancel.addEventListener('click', () => {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
});


