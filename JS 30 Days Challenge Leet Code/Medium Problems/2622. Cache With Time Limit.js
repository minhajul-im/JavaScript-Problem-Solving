// 2622. Cache With Time Limit

function TimeLimitedCache() {
  this.cache = new Map();
}

// set function
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const valueInCache = this.cache.get(key);

  if (valueInCache) {
    clearTimeout(valueInCache.timeout);
  }

  const timeout = setTimeout(() => this.cache.delete(key), duration);
  this.cache.set(key, { value, timeout });

  return Boolean(valueInCache);
};

// get function
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

// count function
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};
