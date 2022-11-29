"use strict";

// Strict mode
const log = (...data) => console.log(...data);
const dir = (...data) => console.log(...data);

function foo() {
  x = 10;
}
foo();

log(x);

// 그냥 이것저것 까다로우니깐 비슷한 역할 해주는 EsLint로 설정 잡아주고 저건 쓰지 말아라....
