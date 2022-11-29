let result = eval("1 + 2"); // 표현식을 문자열로 넘김.
result = eval("1 + 2; 3 + 4"); // 마지막 결과값만 리턴.

const x = 1;

function foo() {
  //   eval("var x = 2");
  console.log(x);
}

foo();

console.log(x);
// eval는 쓰지 말아라. 최적화 수행 안되고 처리 속도 느려지니깐.

isFinite(NaN); // false
isFinite("Hello"); // false
isFinite(Infinity); // false
isFinite(-Infinity); // false
isFinite(1); // true 유한수일 경우에만 true

const url = "http://www.naver.com?name=최동혁&account=kuroneko@naver.com";

const encode = encodeURI(url); // 넘겨준 문자열이 완전 URI 전체라고 간주해서 쿼리부분의 = ? &은 인코딩 해주지 않고 http:// 이부분의 특수문자도 안해줌.
console.log("🚀 ~ file: chap21.js ~ line 25 ~ encode", encode);
const encodeComponent = encodeURIComponent(url); // 그런거 없고 싹다 인코딩해서 아스키 문자로 바꿔버림
console.log(
  "🚀 ~ file: chap21.js ~ line 27 ~ encodeComponent",
  encodeComponent
);

const decode = decodeURI(encode);
console.log("🚀 ~ file: chap21.js ~ line 33 ~ decode", decode);
const decodeComponent = decodeURIComponent(encodeComponent);
console.log(
  "🚀 ~ file: chap21.js ~ line 34 ~ decodeComponent",
  decodeComponent
);
