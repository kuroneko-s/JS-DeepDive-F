const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

xhr.send();

xhr.onload = () => {
  console.log(xhr.response);

  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
  } else {
    console.error("error", xhr.status, xhr.statusText);
  }
};

const promiseGet = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    xhr.send();

    xhr.onload = () => {
      console.log(xhr.response);

      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject("error", xhr.status, xhr.statusText);
      }
    };
  });
};

const promise1 = new Promise((resolve) => setTimeout(resolve({ a: 1 }), 3000));
const promise2 = new Promise((resolve) => setTimeout(resolve({ b: 2 }), 2000));
const promise3 = new Promise((resolve) => setTimeout(resolve({ c: 3 }), 1000));

/* const promise1 = () => new Promise((resolve) => setTimeout(resolve(1), 3000));
const promise2 = () => new Promise((resolve) => setTimeout(resolve(2), 2000));
const promise3 = () => new Promise((resolve) => setTimeout(resolve(3), 1000)); */

// 모든 Promise가 fulfilled 상태면 종료. 내부에 있는 프로미스들은 모두 병렬로 동작한다.
const promiseAll = Promise.all([promise1(), promise2(), promise3()]);

promiseAll.then(console.log).catch(console.error);

Promise.all();
