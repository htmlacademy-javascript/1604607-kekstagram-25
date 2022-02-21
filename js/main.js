
function getRandomNumber(from, to) {
  const random = from + Math.random() * (to + 1 - from);
  return Math.floor(random)
}
console.log(getRandomNumber(0, 20));

function isSuitableStringLength(line, maxLine) {
  const lengthLine = line.length;
  if (lengthLine > maxLine) {
    return true;
  }
  return false;
};
console.log(isSuitableStringLength('hello', 20));


