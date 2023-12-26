/**
 * Define Function
 * Function Types
 */

type Mapper = (m: string) => string;

const runner = (callback: Mapper) => {
  return ["카리나", "윈터", "닝닝"].map(callback);
};

console.log(
  runner((m) => {
    return m + "님";
  })
);

type MultiplyTwoNumbers = (a: number, b: number) => number;

const multiply: MultiplyTwoNumbers = (a, b) => {
  return a * b;
};

/**
 * Interface로 함수 타입 선언 하기
 */

interface IMultiplyTwoNumbers {
  (a: number, b: number): number;
}

const multiply2: IMultiplyTwoNumbers = (a, b) => {
  return a * b;
};

/**
 * Overloading
 * 1) 파라미터를 하나를 받거나
 * 2) 세개를 받는 함수
 * 한번에
 */

/**
 * 하나의 파라미터만 입력이 되면
 * 하나의 스트링으로 입력 받는다
 * 세개의 파라미터가 입력이 되면
 * 세개의 스트링으로 입력 받는다
 */
console.log("⌛ 2. Overloading ");

function stringOrString(a: string): string;
function stringOrString(a: string, b: string, c: string): string;

function stringOrString(a: string, b?: string, c?: string) {
  if (b && c) {
    return `에스파: ${a}, ${b}, ${c}`;
  }
  return `에스파: ${a}`;
}
console.log(stringOrString("카리나", "윈터", "닝닝"));
console.log(stringOrString("카리나, 윈터, 닝닝"));
// console.log(stringOrString("카리나", "윈터")); / Error

/**
 * Statement and Expression
 */

console.log("⌛ 3. Statement and Expression ");

function statement(x: number, y: number) {
  return x + y;
}

const expression = (x: number, y: number) => {
  return x + y;
};

function add(x: number, y: number) {
  return x + y;
}

type Add = (x: number, y: number) => number;

const eAdd: Add = function (x: number, y: number) {
  return x + y;
};

/**
 * Type Predicate
 */

console.log("⌛ 4. Type Predicate ");

function isNumber(a: unknown): a is number {
  return typeof a === "number";
}
function isNumber2(a: unknown): boolean {
  return typeof a === "number";
}

let five: any = 5;
if (isNumber(five)) {
  console.log(five + 5);
}

if (isNumber2(five)) {
  //isnt Error, but type is any
  console.log(five + 5);
}

interface Espa {
  name: string;
  age: number;
}

function isEspa(a: unknown): a is Espa {
  return (a as Espa).age !== undefined;
}
