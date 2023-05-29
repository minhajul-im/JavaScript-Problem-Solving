// 2700. Differences Between Two Objects

function objDiff(obj1, obj2) {
  if (obj1 === obj2) {
    return {};
  } else if (obj1 === null || obj2 === null) {
    return [obj1, obj2];
  } else if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return [obj1, obj2];
  } else if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return [obj1, obj2];
  } else {
    let out = {};

    for (let key of Object.keys(obj1)) {
      if (key in obj2) {
        out[key] = objDiff(obj1[key], obj2[key]);
        if (Object.keys(out[key]).length == 0) delete out[key];
      }
    }

    return out;
  }
}
