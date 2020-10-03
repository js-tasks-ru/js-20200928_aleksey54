/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  function orderCode (param) {
    switch (param) {
    case 'asc':
      return 1;
      break;
    case 'desc':
      return -1;
      break;
    default:
      return 1;
    }
  }
    return [...arr].sort(
      function(a,b) {
        return a.localeCompare(b, 'ru', {caseFirst: 'upper'}) * orderCode(param)
      }
      )
}
