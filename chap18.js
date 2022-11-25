/**
 * 무명의 리터럴(변수에 할당)로 생성할 수 있다. ( 런타임에 생성 가능 )
 * 변수나 자료구조에 저장할 수 있다.
 * 함수의 매개변수 전달 가능. 함수의 반환값으로 사용 가능
 */

const innerFn = () => {
  let num = 0;
  return () => {
    console.log("num = ", ++num);
  };
};

const hello = innerFn();
hello();
