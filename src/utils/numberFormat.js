/**
 * Returns number with thousand seprators
 * @param {Number} x
 */
const numberFormat = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default numberFormat;
