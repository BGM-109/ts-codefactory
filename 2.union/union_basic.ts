// Union Basics

// 유니언은 TS에서 타입을 병합할 수 있는 방법이다. 유니언은 파이프(|)를 사용하여 표현한다.

type StringOrBoolean = string | boolean;

let karina: StringOrBoolean = "karina";
karina = true;

// karina = 1; // error

type StrBoolNull = string | boolean | null;

let winter: StrBoolNull = "winter";
winter = true;
winter = null;

type AsyncValue = "Asyncloading" | "AsyncData" | "AsyncError";

let asyncState: AsyncValue = "Asyncloading";

asyncState = "AsyncData";

// asyncState = "AsyncGuard";

// Union Of List

type StringListOrBooleanList = string[] | boolean[];

let aespa: StringListOrBooleanList = ["karina", "winter", "gisele", "ningning"];

aespa = [true, false, true];

// aespa = ["karina", false, true]; // error

type StringWithBoolean = (string | boolean)[];

let redVelvet: StringWithBoolean = ["irene", true, "seulgi", false];

redVelvet = [true, "wendy", false, "joy"];

// Interface List

interface Barbell {
  weight: number;
  plate: number;
}

interface Dumbbell {
  weight: number;
  arm: number;
}

interface Machine {
  plate: number;
}

type Equipments = Barbell | Dumbbell;

// 바벨 벤치 프레스
let benchPress: Equipments = {
  weight: 20,
  plate: 60,
};

const isBarbell = benchPress as Barbell;

//덤벨 벤치 프레스
benchPress = {
  weight: 30,
  arm: 2,
};

// const isBarbel = benchPress as Barbel;
