
const validateHashTag = function (inputString) {
  const errors = [];
  let hashTagDuplicates = [];
  const arrayHashTag = inputString.split(' ');
  if (arrayHashTag.length > 5) {
    errors.push('нельзя указать больше пяти хэш-тегов;');
  }
  const arrayHashTagLowerCased = arrayHashTag.map((el) => el.toLowerCase());
  hashTagDuplicates = arrayHashTagLowerCased.filter((item, index) => {
    if (index !== arrayHashTagLowerCased.indexOf(item)) {
      return item;
    }
  });
  if (hashTagDuplicates.length) {
    errors.push('один и тот же хэш-тег не может быть использован дважды');
  }

  arrayHashTag.forEach((hash, index) => {
    if (hash[0] !== '#') {
      errors.push('хэш-тег начинается с символа #');
    }
    if (!hash.match(/(#[a-z0-9][a-z0-9\-_]*)/ig)) {
      errors.push('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;');
    }
    if (hash === '#') {
      errors.push('хеш-тег не может состоять только из одной решётки;');
    }
    if (hash.length > 20) {
      errors.push(`длина хештега ${hash} не должна быть больше 20`);
    }
    arrayHashTag[index] = hash.toLowerCase();
  });

  return errors;
};

export { validateHashTag };
