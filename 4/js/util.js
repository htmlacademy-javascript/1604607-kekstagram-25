function getRandomNumber(from, to) {
  //TODO: упростить return для критерия Д18
  if (to <= from && from >= 0 && to >= 0) {
    return new Error('переданный параметр не соответсвует условию');
  }
  const random = from + Math.random() * (to + 1 - from);
  return Math.floor(random);
}
getRandomNumber(0, 20);


function isSuitableStringLength(line, maxLine) {
  return line.length <= maxLine;
}
isSuitableStringLength('test', 5);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export { getRandomNumber, isSuitableStringLength, getRandomArrayElement };

