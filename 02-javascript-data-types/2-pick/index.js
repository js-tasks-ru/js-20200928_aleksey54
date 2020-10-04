/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  /* obj преобразуем в коллекцию Map функцией Object.entries() -> применяем к коллекции фильтр filter() в котором
  функцией-стрелкой проверяем содержит ли массив fields ключ элемента коллекции -> преобразуем отфильтрованную коллекцию
  в объект функцией Object.fromEntries
   */
  return Object.fromEntries(Object.entries(obj).filter(([key]) => fields.includes(key)));
};
