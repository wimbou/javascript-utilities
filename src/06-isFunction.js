/**
 ** @author {your name}
 ** @function
 ** @return {boolean}
 * @param args
 **/
export default function isFunction(myFunction) {
  if (myFunction instanceof Function) {
    return true;
  } else {
    return false;
  }
}
