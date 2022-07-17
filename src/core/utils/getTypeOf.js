export function getTypeOf(object) {
  const type = typeof object;
  let result = type;
  if (type === "object") {
    const stringifiedObject = Object.prototype.toString.call(object);
    result = stringifiedObject
      .replace(/^\[object (\S+)\]$/, "$1")
      .toLowerCase();
  }
  return result;
}
