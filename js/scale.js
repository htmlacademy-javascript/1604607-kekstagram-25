import filterConfiguration from './filter-configuration.js';

const scaleControlValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');
const filterOriginal = document.querySelector('.effects__preview--none');
const filterChrome = document.querySelector('.effects__preview--chrome');
const filterSepia = document.querySelector('.effects__preview--sepia');
const filterMarvin = document.querySelector('.effects__preview--marvin');
const filterPhobos = document.querySelector('.effects__preview--phobos');
const filterHeat = document.querySelector('.effects__preview--heat');
const sliderValue = document.querySelector('.effect-level__slider');
let currentFilter = '';


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
  start: 20,
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
    imgPreview.style.filter = `grayscale(${value})`;
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

const changeImageScale = function (scaleValue) {
  scaleControlValue.value = `${scaleValue}%`;
  imgPreview.style.transform = `scale(${scaleValue / 100})`;
};

filterOriginal.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--none');
});

filterChrome.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--chrome');
  currentFilter = FilterNames.CHROME;
  sliderValue.noUiSlider.updateOptions(filterConfiguration.chrome);
});

filterSepia.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--sepia');
  currentFilter = FilterNames.SEPIA;
  sliderValue.noUiSlider.updateOptions(filterConfiguration.sepia); //почему-то фильтр не меняется
});

filterMarvin.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--marvin');
  currentFilter = FilterNames.MARVIN;
  sliderValue.noUiSlider.updateOptions(filterConfiguration.marvin);
});

filterPhobos.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--fobos');
  currentFilter = FilterNames.PHOBOS;
  sliderValue.noUiSlider.updateOptions(filterConfiguration.phobos);
});

filterHeat.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--heat');
  currentFilter = FilterNames.HEAT;
  sliderValue.noUiSlider.updateOptions(filterConfiguration.heat);
});

export { changeImageScale };
