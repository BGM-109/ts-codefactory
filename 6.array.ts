/**
 * Problem Array
 */

// 아무거나 담을 수 있는 배열
const number = [1, "2", 3, "4", 5];

let strs: string[] = ["hello", "world"];

// strs.push(1); // error

let strOrNum: (string | number)[] = ["hello", 1];

let strArrNumArr: string[] | number[] = ["hello"];

/**
 * Spread Operator
 */

const array1 = [1, 2, 3];
const arrasy2 = [...array1];

/**
 * Multi demensional Array
 */

const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

const DMatrix: number[][][] = [];

for (let i of matrix) {
  for (let j of i) {
    console.log(j);
  }
}
