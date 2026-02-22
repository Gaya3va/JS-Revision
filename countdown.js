function createCountdown(seconds, onTick, onComplete) {
  let remaining = seconds;
  let timer = null;

  function start() {
    timer = setInterval(() => {
      remaining--;
      onTick(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        onComplete();
      }
    }, 1000);
  }

  start();

  return {
    pause() {
      clearInterval(timer);
    },
    resume() {
      start();
    }
  };
}