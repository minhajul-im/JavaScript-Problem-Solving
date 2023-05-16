// 2637. Promise Time Limit

var timeLimit = function (fn, t) {
  return async function (...args) {
    const time1 = fn(...args);
    const time2 = new Promise((res, rej) => {
      setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([time1, time2]);
  };
};
