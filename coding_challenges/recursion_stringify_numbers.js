// Write a function 'stringifyNumbers' which takes in an object and finds all
// of the values which are numbers and converts them to strings.

function stringifyNumbers(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] instanceof Object && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === 'number') {
      newObj[key] = '' + obj[key];
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(stringifyNumbers(obj));
