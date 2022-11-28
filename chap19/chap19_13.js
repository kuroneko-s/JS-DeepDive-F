const log = (...data) => console.log(...data);
const dir = (...data) => console.dir(...data);

/**
 * in 연산자는 프로퍼티 존재 유무를 확인한다.
 * 프로토타입 체인을 타기때문에 상속 프로토타입도 체크하니깐 주의가 필요함.
 * ES6는 Reflect.has로 동일하게 사용 가능.
 */

const Person = {
  name: "Lee",
  address: "Seoul",
};

log("address" in Person); // true
log("phone" in Person); // false
log("toString" in Person); // true

log(Reflect.has(Person, "address")); // true
log(Reflect.has(Person, "phone")); // false
log(Reflect.has(Person, "toString")); // true

// hasOwnProperty...는 지금까지 썻으니 생략..
