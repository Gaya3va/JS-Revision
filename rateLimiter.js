function rateLimiter(fn, limit, interval) {
  let count = 0;

  return function (...args) {
    if (count >= limit) {
      return "Limit exceeded";
    }

    count++;
    fn(...args);

    setTimeout(() => {
      count--;
    }, interval);
  };
}