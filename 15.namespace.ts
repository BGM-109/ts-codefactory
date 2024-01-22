/**
 * Namesapce
 * Ecma 모듈로 변경되었습니다.
 * 과거 프로젝트에서는 namespace를 사용했지만, 현재는 Ecma 모듈을 사용합니다.
 * 현재 프로젝트에는 쓰지 마시옷
 */

namespace MySpace {
  const mySpaceValue = 123;
  export interface MySpaceInterface {}
  export class MySpaceClass {}
}

namespace YourSpace {
  export const yourSpaceValue = 123;
  export interface YourSpaceInterface {}
  export class YourSpaceClass {}

  //   mySpaceValue = 123; Cant Find
  const c = new MySpace.MySpaceClass();
}
