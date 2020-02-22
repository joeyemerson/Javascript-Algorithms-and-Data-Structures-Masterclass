// Write a function 'collectStrings' which accepts and object and returns
// an array of all the values in the  object that have a typeof string.

function collectStrings(obj) {
  let strings = [];

  function getStrings(o) {
    for (const key in o) {
      if (typeof o[key] === 'string') {
        strings.push(o[key]);
      } else if (typeof o[key] === 'object') {
        return getStrings(o[key]);
      }
    }
  }

  getStrings(obj);

  return strings;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
