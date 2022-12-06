function makeCounter(fn) {
  let count = 0;

  return function () {
    count = fn(count);
    return count;
  };
}

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

const increaser = makeCounter(increase);
// console.log(increaser());
// console.log(increaser());

const decreaser = makeCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());

const counter = (function () {
  let counter = 0;

  return function (aux) {
    counter = aux(counter);
    return counter;
  };
})();
