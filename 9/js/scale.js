const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview');
// const effectsRadioInput = document.querySelector('.effects__radio');
// const imgUploadPreview = document.querySelector('.img-upload__preview');
const filterOriginal = document.querySelector('.effects__preview--none');
const filterChrome = document.querySelector('.effects__preview--chrome');
const filterSepia = document.querySelector('.effects__preview--sepia');
const filterMarvin = document.querySelector('.effects__preview--marvin');
const filterPhobos = document.querySelector('.effects__preview--phobos');
const filterHeat = document.querySelector('.effects__preview--heat');
const sliderValue = document.querySelector('.effect-level__slider');
const currentFilter = 'none';

noUiSlider.create(sliderValue, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderValue.noUiSlider.on('update', (_, handle, unencoded) => {
  const value = unencoded[handle];
  if (currentFilter === 'chrome') {
    imgPreview.style.filter = `grayscale(${value})`;
  }
  if (currentFilter === 'sepia') {
    imgPreview.style.filter = `sepia(${value})`;
  }
  if (currentFilter === 'marvin') {
    imgPreview.style.filter = `invert(${value}%)`;
  }
  if (currentFilter === 'phobos') {
    imgPreview.style.filter = `blur(${value}px)`;
  }
  if (currentFilter === 'heat') {
    imgPreview.style.filter = `brightness(${value})`;
  }
});

scaleControlSmaller.addEventListener('click', () => { // Значение должно изменяться с шагом в 25.
  scaleControlValue.value -= 25;
  const scaleValue = scaleControlValue.value / 100;
  imgPreview.style.transform = `scale(${scaleValue})`; // если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75)
});

scaleControlBigger.addEventListener('click', () => {
  scaleControlValue.value = +scaleControlValue.value + 25;
  const scaleValue = scaleControlValue.value / 100;
  imgPreview.style.transform = `scale(${scaleValue})`;
});

filterOriginal.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--none');
});

filterChrome.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--chrome');
});

filterSepia.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--sepia');
});

filterMarvin.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--marvin');
});

filterPhobos.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--fobos');
});

filterHeat.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--heat');
});
