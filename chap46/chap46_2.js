const infiniteFibonachi = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, cur + pre];
    yield cur;
  }
})();

for (const v of infiniteFibonachi) {
  if (v > 1000) break;
  console.log(v);
}

// 제네레이터를 이용해서 비동기를 동기처럼 동작하게끔 구현.
const _async = (generatorFunc) => {
  const generator = generatorFunc(); // 2

  const onResolved = (arg) => {
    const result = generator.next(arg); // 5

    return result.done
      ? result.value // 9
      : result.value.then((res) => onResolved(res)); // 7
  };

  return onResolved;
};

_async(function* fetchTodo() {
  // 1
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  const response = yield fetch(url); // 6
  const todo = yield response.json(); // 8
  console.log(todo);
})(); // 4
