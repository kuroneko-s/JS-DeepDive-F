const log = (...data) => console.log(...data);
const dir = (...data) => console.dir(...data);

/**
 * for...in문
 * 프로퍼티를 순회하며 열거한다.
 */

const sym = Symbol();
const person = {
  name: "Choi",
  address: "경기",
  [sym]: 10,
  __proto__: { a: 10 }, // 상속
};

// 열거할 수 있는 프로퍼티만 가져옴. [[Enumerable]]
// Symbol을 열거할 수 없음. [[Enumerable]]가 true여도.
// 상속해준 프로토타입의 프로퍼티도 가져옴.
for (const key in person) {
  log(key);
}

// log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
// log(Object.getOwnPropertyDescriptor(person, sym));

for (const key in person) {
  // 속해있는 객체의 값만 가져오려면 검증 과정을 거쳐야함.
  if (!person.hasOwnProperty(key)) continue;
  log(key);
}

/**
 * for...in 문이 순서를 보장해주지는 않지만 대부분의 모던 브라우저에서 순서를 보장해주고, 숫자 프로퍼티 키에 대해서는 정렬을 실시해준다.
 * 배열에선 for...in 모단 forEach나 for, for...of 사용하는 것을 권장한다.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();

log("==================");

arr.x = 100;

// x값 출력 - o
for (const i in arr) {
  // log(arr[i]);
}

// x값 출력 - x
for (let i = 0; i < arr.length; i++) {
  // log(arr[i]);
}

// x값 출력 - x
// arr.forEach((v) => log(v));

for (const v of arr) {
  // log(v);
}

// 이런것들 다 빼고 그냥 Object.keys,values,entries 써라
log(Object.keys(person));
log(Object.values(person));
log(Object.entries(person));

for (const [key, value] of Object.entries(person)) {
  log(key, value);
}
Object.entries(person).forEach(([k, v]) => log(k, v));
