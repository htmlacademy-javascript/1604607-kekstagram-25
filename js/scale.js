const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview');
const filterOriginal = document.querySelector('.effects__preview--none');
const filterChrome = document.querySelector('.effects__preview--chrome');
const filterSepia = document.querySelector('.effects__preview--sepia');
const filterMarvin = document.querySelector('.effects__preview--marvin');
const filterPhobos = document.querySelector('.effects__preview--phobos');
const filterHeat = document.querySelector('.effects__preview--heat');
const sliderValue = document.querySelector('.effect-level__slider');
let currentFilter = 'none';
let currentScaleValue = 100;
const FilterNames = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

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
  if (currentFilter === FilterNames.CHROME) {
    imgPreview.style.filter = `grayscale(${value / 100})`;
  }
  if (currentFilter === FilterNames.SEPIA) {
    imgPreview.style.filter = `sepia(${value})`;
  }
  if (currentFilter === FilterNames.MARVIN) {
    imgPreview.style.filter = `invert(${value}%)`;
  }
  if (currentFilter === FilterNames.PHOBOS) {
    imgPreview.style.filter = `blur(${value}px)`;
  }
  if (currentFilter === FilterNames.HEAT) {
    imgPreview.style.filter = `brightness(${value})`;
  }
});

scaleControlSmaller.addEventListener('click', () => { // Значение должно изменяться с шагом в 25.
  if (currentScaleValue === 25) {
    return;
  }
  currentScaleValue -= 25;
  scaleControlValue.value = `${currentScaleValue}%`;
  imgPreview.style.transform = `scale(${currentScaleValue / 100})`; // если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75)
});

scaleControlBigger.addEventListener('click', () => {
  if (currentScaleValue === 100) {
    return;
  }
  currentScaleValue += 25;
  scaleControlValue.value = `${currentScaleValue}%`;
  imgPreview.style.transform = `scale(${currentScaleValue / 100})`;
}
);

filterOriginal.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--none');
});

filterChrome.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--chrome');
  currentFilter = FilterNames.CHROME;
});

filterSepia.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--sepia');
  currentFilter = FilterNames.SEPIA;
});

filterMarvin.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--marvin');
  currentFilter = FilterNames.MARVIN;
});

filterPhobos.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--fobos');
  currentFilter = FilterNames.PHOBOS;
});

filterHeat.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--heat');
  currentFilter = FilterNames.HEAT;
});
