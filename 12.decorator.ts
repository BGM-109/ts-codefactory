/**
 * Decorator
 * 1. class decorator
 */

// Decorator 는 함수로, 클래스의 정의를 받아서 클래스의 동작을 확장할 수 있다.

function Hello(constructor: Function) {
  console.log(constructor);
}

@Hello
class Person3 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const helloPerson = new Person3("hello");
