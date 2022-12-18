const symbol1 = Symbol(123);

console.log(symbol1);
console.log(symbol1.toString()); // symbol(123)
console.log(symbol1.description); // 123
console.log(typeof symbol1.description);

const symbol2 = Symbol("123");
const symbol3 = Symbol("123");

console.log(symbol2);
console.log(symbol2.toString()); // symbol(123)
console.log(symbol2.description); // 123
console.log(typeof symbol2.description);

console.log(symbol2 === symbol3); // false
console.log(symbol2.description === symbol3.description); // true

// 전역 심벌 레지스트리에서 가져온다.
const symbol4 = Symbol.for(123);
const symbol5 = Symbol.for(123);
const symbol6 = Symbol(123); // 이렇게 선언하면 전역 심벌 레지스트리에서 가져오지 않는다.

console.log(symbol4 === symbol5); // true
console.log(symbol6 === symbol5); // false

console.log(Symbol.keyFor(symbol1));
console.log(Symbol.keyFor(symbol5));
