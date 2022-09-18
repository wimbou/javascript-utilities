/**
 ** @author {your name}
 ** @function
 ** @return
 * @param collection
 **/
export default function isArray(collection) {
  if (collection === undefined) {
    throw Error("collection is required");
  }
  if (Array.isArray(collection) === true) {
    return true;
  } else {
    return false;
  }
}
