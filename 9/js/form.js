import { validateHashTag } from './validation.js';
import { isFocused } from './util.js';
import { changeImageScale } from './edit-image.js';
const imgPreview = document.querySelector('.img-upload__preview');
const uploadFile = document.querySelector('#upload-file');
const imgOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');
const hashTag = document.querySelector('.text__hashtags');
const uploadForm = document.querySelector('.img-upload__form');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const IMAGE_SCALE_STEP = 25;
const MIN_IMAGE_SCALE = 25;
const MAX_IMAGE_SCALE = 100;

uploadFile.addEventListener('change', () => {
  imgOverlay.classList.remove('hidden');  //открыла форму
  document.body.classList.add('modal-open');
  imgUploadEffectLevel.classList.add('hidden');
  let imageScale = 100;
  hashTag.addEventListener('input', (evt) => {
    hashTag.setCustomValidity('');
    const validationResult = validateHashTag(evt.target.value);
    if (validationResult && validationResult.length) {
      hashTag.setCustomValidity(validationResult[0]);
      hashTag.reportValidity();
    }
  });

  document.addEventListener('keyup', (evt) => { // закрыла форму клавишей esc
    if (evt.key === 'Escape' && !isFocused(commentField) && !isFocused(hashTag)) {
      imgOverlay.classList.add('hidden');
    }
  });

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  scaleControlSmaller.addEventListener('click', () => {
    if (imageScale <= MIN_IMAGE_SCALE) {
      return;
    }
    changeImageScale(imageScale -= IMAGE_SCALE_STEP);
  });
  scaleControlBigger.addEventListener('click', () => {
    if (imageScale >= MAX_IMAGE_SCALE) {
      return;
    }
    changeImageScale(imageScale += IMAGE_SCALE_STEP);
  });
});


uploadCancel.addEventListener('click', () => {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgPreview.style = '';
  imgPreview.className = 'img-upload__preview';
});


