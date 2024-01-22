/**
 * 유틸리티 타입
 * 1. Partial - 객체의 속성을 선택적으로 만들어준다.
 * 2. Required - 객체의 속성을 필수적으로 만들어준다.
 * 3. Readonly - 객체의 속성을 읽기 전용으로 만들어준다.
 * 4. Pick - 객체의 속성을 선택적으로 만들어준다.
 * 5. Omit - Pick 의 반대
 * -----------------------------------1군
 * 6. Exclude - 유니언 타입에서 특정 타입을 제거한다.
 * 7. Extract - Exclude 의 반대
 * -------------------------------2군
 * 8. NonNullable - null, undefined 를 제거한다.
 * 9. Parameters - 함수의 파라미터 타입을 가져온다.
 * 10. ConstructorParameters - 클래스의 생성자 파라미터 타입을 가져온다.
 * 11. ReturnType - 함수의 반환 타입을 가져온다.
 * 12. TemplateLiteral - 문자열 리터럴 타입을 만든다.
 */

// Partial
interface Idol {
  name: string;
  age: number;
  group: string;
}

const karina2: Idol = {
  name: "karina",
  age: 20,
  group: "aespa",
};

function updateIdol(prev: Idol, next: Partial<Idol>) {
  return {
    ...prev,
    ...next,
  };
}

console.log(updateIdol(karina2, { name: "winter" }));

// Required
interface Crossfit2 {
  mental?: boolean;
  physical?: boolean;
  height?: number;
}

const requiredCrossfit2: Required<Crossfit2> = {
  mental: true,
  physical: true,
  height: 180,
};

const readonlyCrossfit3: Readonly<Crossfit2> = {
  mental: true,
  physical: true,
  height: 180,
};

// readonlyCrossfit3.mental = false; // error
Object.freeze(readonlyCrossfit3);
// 자바스크립트에서 객체를 동결하는 방법

// Pick
interface Post {
  title: string;
  content: string;
  subtitle: string;
}

type SubPost = Pick<Post, "title" | "content">;

const subPost: SubPost = {
  title: "안녕하세요?",
  content: "반갑습니다.",
};

// Omit
type SubPost2 = Omit<Post, "subtitle">;
const subPost2: SubPost2 = {
  title: "안녕하세요?",
  content: "반갑습니다.",
};

// Exclude
type StringOrNumber = string | number;
type NoString = Exclude<StringOrNumber, string>;
const excludeString: NoString = 123;

// Extract
type StringOrNumber2 = string | number;
type YesString = Extract<StringOrNumber2, string>;
const extractString: YesString = "123";

// NonNullable
type StringOrUndefined = string | undefined | null | number;
type NonUndefined = NonNullable<StringOrUndefined>;

// Parameters
function updateIdol2(name: string, age: number) {
  return {
    name,
    age,
  };
}
type IdolParams = Parameters<typeof updateIdol2>;

// ConstructorParameters
class Crossfit4 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type CrossfitParams = ConstructorParameters<typeof Crossfit4>;

// ReturnType
type IdolReturn = ReturnType<() => string>;

// TemplateLiteral
type KarinaLiteral = "Karina";
type KarinaUpper = Uppercase<KarinaLiteral>;
type KarinaLower = Lowercase<KarinaLiteral>;
type KarinaCapital = Capitalize<KarinaLiteral>;
type KarinaUncapital = Uncapitalize<KarinaLiteral>;
