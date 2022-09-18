/**
 ** @author {your name}
 ** @function
 ** @return {boolean}
 * @param args
 **/
export default function isDate(date) {
  if (date instanceof Date) {
    return true;
  } else {
    return false;
  }
}
