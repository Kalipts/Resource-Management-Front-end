export function* range(start, end, step = 1) {
  while (start < end) {
    yield start;
    // eslint-disable-next-line no-param-reassign
    start += step;
  }
}
export function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/* eslint-disable eqeqeq */
export function isEmpty(x) {
  return (
    typeof x === 'undefined' ||
    x == null ||
    x == false ||
    x.length == 0 ||
    x == ''
  );
}
