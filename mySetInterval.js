function mySetInterval(callback, delay) {
  let timerId;

  function repeat() {
    timerId = setTimeout(() => {
      callback();
      repeat();
    }, delay);
  }

  repeat();

  return {
    stop() {
      clearTimeout(timerId);
    }
  };
}