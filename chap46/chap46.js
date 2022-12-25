function* genFunc() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (err) {
    console.error(err);
  }
}

// [Symbol.iterator] 구현체
// 제네레이터 객체는 이터러블이면서 이터레이터이다.
const func = genFunc();

// console.log(func.next());
// console.log(func.return("End"));
// console.log(func.throw("Error"));

function* genFunc2() {
  const x = yield 1;
  const y = yield x + 10;
  return x + y;
}

const func2 = genFunc2();
console.log(func2.next());
console.log(func2.next(10));
console.log(func2.next(20));
