/**
 ** @author {your name}
 ** @function
 ** @return
 * @param collection
 * @param n
 **/
export default function last(collection, n = 0) {
  // Given a collection of elements, the first function will return the n first element of that collection
  if (collection === undefined) {
    throw Error("Collection is required");
  } else if (n === 0) {
    return collection[collection.length - 1];
  } else {
    return collection.slice(collection.length - n, collection.length);
  }
}
