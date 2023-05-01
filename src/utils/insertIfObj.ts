export function insertIfObj<T>(condition: boolean, object: T) {
  return condition ? object : ({} as T);
}
