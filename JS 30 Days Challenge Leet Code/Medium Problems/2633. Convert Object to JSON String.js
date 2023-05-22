// 2633. Convert Object to JSON String

var jsonStringify = function (object) {
  if (object === null) return "null";

  if (typeof object === "string") return `"${object}"`;

  if (Array.isArray(object)) {
    const items = object.map((item) => jsonStringify(item));
    return `[${items.join(",")}]`;
  }

  if (typeof object === "object") {
    const obj = Object.keys(object);
    const keys = obj.map((key) => `"${key}":${jsonStringify(object[key])}`);

    return `{${keys.join(",")}}`;
  }

  return object.toString();
};
