// 2636. Promise Pool

var promisePool = async function (functions, n) {
  async function nextFn() {
    if (functions.length === 0) return;

    const fn = functions.shift();

    await fn();

    await nextFn();
  }

  const promise = Array(n).fill().map(nextFn);

  await Promise.all(promise);
};
