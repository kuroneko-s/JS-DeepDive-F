// const cls = require("./class2.js");

const obj = {
  test() {
    console.log("this - ", this);
  },
  test2: function () {
    console.log("this - ", this);
  },
};

obj.test();
obj.test2();
