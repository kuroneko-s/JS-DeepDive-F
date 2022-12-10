class Base {
  constructor(width, height) {
    /**
     * super를 타고 와서 부모 클래스의 생성자 내부에서 빈 객체를 생성 후 this에 바인딩
     * 이때 this는 new 연산자로 호출한 객체 ( Child )
     */
    console.log(this); // Child
    console.log(new.target); // Child
    this.width = width;
    this.height = height;
    // this 값들을 초기화 한 후 부모 클래스의 생성자 동작 종료 및 this 리턴.
  }

  toString() {
    return `width - ${this.width}, heigth - ${this.height}`;
  }
}

class Child extends Base {
  constructor(width, height, color) {
    // console.log(this); error. super 초기화 전에는 this 호출 불가능.
    super(width, height); // super 내부에서 this를 생성 및 리턴.
    console.log(this); // 부모클래스에서 초기화 한 값이 들어 있음.
    this.color = color;
  }

  toString() {
    return `${super.toString()}, color - ${this.color}`;
  }
}

// super를 통해서 인스턴스가 초기화가 되므로 super가 필수라는 의미가 된다.

const child = new Child(1, 2, "red");
// console.log(child.toString());

class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }

  uniq() {
    return this.filter((v, i, self) => {
      return self.indexOf(v) === i;
    });
  }

  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 2, 1, 3);
console.log(myArray.uniq().toString());
// Array method랑 메서드 체이닝 잘 되는데 ??
console.log(
  myArray
    .uniq()
    .map((v) => {
      console.log(v);
      return v;
    })
    .average()
);
console.log(myArray instanceof Array);
console.log(myArray instanceof MyArray);
