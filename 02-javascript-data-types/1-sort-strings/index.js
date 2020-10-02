/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let orderCode = 0;
    param === 'asc' ? orderCode = 1 : orderCode = -1;
    return [...arr].sort(
      function(a,b) {
        return a.localeCompare(b, 'ru', {caseFirst: 'upper'}) * orderCode;
      }
      )
}
