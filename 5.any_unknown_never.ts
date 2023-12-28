/**
 * Any
 * 코드를 변경할 때 에러를 확인할 수 없다.
 * 자바스크립트를 사용할 때와 같이 위험요소가 크기 때문에
 * 타입스크립으에서 사용을 권장하지 않는다.
 */

/**
 * Unknown
 * 비교적 최근에 나온 타입으로 any와 같이 모든 타입을 허용한다.
 * 하지만 any와 다르게 타입을 체크해야만 사용할 수 있다.
 */

let anie: any;

anie = "karina";
anie = 1;
anie = true;

let unknownValue: unknown;
unknownValue = "karina";
unknownValue = 1;
unknownValue = true;

let stringValue: string;

// stringValue = unknownValue; // error

// 알지 못하는 타입은 구현할 수 없다.
// unknownValue.toUpperCase(); // error

/**
 * Union
 */

// type UnionType = string | unknown;
// unknown 으로 흡수 된다.
type AnyType = any | unknown;
// any로 흡수 된다.

/**
 * Intersection
 */

type IntersectionType = string & unknown;
// string 으로  흡수 된다.
type IntersectionType2 = any & unknown;
// any로 흡수 된다.

/**
 * Never
 */

// 1. 에러
function throwError(message: string): never {
  throw new Error(message);
}

// 2. 무한루프
function loop(): never {
  while (true) {}
}

// 3. 타입 가드
type StringANdNumber = string | number;
// let unionValue: never = 10;
