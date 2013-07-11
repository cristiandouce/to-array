/**
 * Expose toArray
 */

module.exports = toArray;

/**
 * Takes a NodeList Object and
 * returns an array
 *
 * @param {NodeList|Arguments} list to convert
 * @return {Array} `Array` object
 * @api private
 */

function toArray (list) {
  return Array.prototype.concat.apply([], list);
}
