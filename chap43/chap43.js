const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  console.log(xhr.response);

  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
  } else {
    console.error("error", xhr.status, xhr.statusText);
  }
};

xhr.onload = () => {
  console.log(xhr.response);

  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
  } else {
    console.error("error", xhr.status, xhr.statusText);
  }
};
