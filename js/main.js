const getRandomIntInclusive = (min, max) => {
  if (min > max){
    return -1;
  }

  if (min === max){
    return min;
  }

  if (min < 0){
    getRandomIntInclusive(0, max);
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const chekStringLenght = (string, max) => string.Length < max + 1;
