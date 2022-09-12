export function getTypeOf(object) {
  const objectType = typeof object;
  let returnType = objectType;
  if (objectType === "object") {
    const stringifiedObject = Object.prototype.toString.call(object);
    returnType = stringifiedObject
      .replace(/^\[object (\S+)\]$/, "$1")
      .toLowerCase();
  }
  return returnType;
}
