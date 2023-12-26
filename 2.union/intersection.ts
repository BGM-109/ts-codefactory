// intersection

// 타입을 더 해 줍니다.

type Brand = {
  company: string;
};

type WeightMachine = {
  type: string;
  part: string;
  name: string;
};

type HammerStrength = Brand & WeightMachine;

const hammerStrength: HammerStrength = {
  company: "Hammer Strength",
  type: "ISO",
  part: "chest",
  name: "Incline Chest Press",
};

const hammerStrength2: HammerStrength = {
  company: "Hammer Strength",
  type: "ISO",
  part: "back",
  name: "dy Row",
};

const prime: HammerStrength = {
  company: "Prime",
  type: "ISO",
  part: "chest",
  name: "Incline Chest Press",
};

// Never Type

// never는 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.
// 하지만 never에는 그 어떤 것도 할당 할 수 없다. any조차도 never에게 할당 할 수 없다.
// 잘못된 타입의 연산자 (never를 제외한)는 모두 never를 반환한다.

type Never = string & number;

// let never: Never = 1; // error
