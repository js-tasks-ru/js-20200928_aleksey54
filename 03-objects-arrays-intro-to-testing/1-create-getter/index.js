/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arrProperty = path.split('.');
  return function (obj) {
    return arrProperty.reduce(function (object, value) {
      if (object !== undefined) {
        return object[value];
      } else {
        object;
      }
    }, obj);
  };
}
