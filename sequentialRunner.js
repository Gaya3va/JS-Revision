async function runSequential(tasks, delay) {
  const results = [];

  for (let task of tasks) {
    const res = await task();
    results.push(res);

    await new Promise(resolve =>
      setTimeout(resolve, delay)
    );
  }

  return results;
}