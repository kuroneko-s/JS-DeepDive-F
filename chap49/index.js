import * as lib from "./lib.js";

console.log(lib.pi);
console.log(lib.power(lib.pi, lib.pi));

const f = new lib.Foo();
console.log(f.foo());
console.log(f.bar());

console.log(
  new Promise((resolve) => {
    setTimeout(() => resolve(1), 100);
  })
);

console.log(Object.assign({}, { x: 1 }, { b: 3 }));
console.log(Array.from([1, 2, 3], (v) => v + v));
