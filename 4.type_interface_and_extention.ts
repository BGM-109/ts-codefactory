/**
 * Type 과 Interface의 차이
 */
 
// 리빙포인트: 인터페이스가 더 짬이 낮다. (코파일럿 짬의 뜻 모르네?)  
// Object 선언
interface IObject {
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
}

// function을 선언할때
interface IFunction {
    (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는것들
 */

// (1) primitive 타입 선언하기
type Name = string;

// (2) union 타입 선언하기
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

let rectangle: IRectangle = {
    height: 200,
    width: 100,
}

// type TRectangle = {
//     height: number;
// }

// type TRectangle = {
//     width: number;
// }

/**
 * Interface Merging
 */
// 프로퍼티와 메서드를 가진 인터페이스
class Review {
    // 프로퍼티
    getY = (x: number) => { return x };

    // 메서드
    getX(x: number) {
        return x;
    }
}

// 프로퍼티는 덮어쓸수없다.
interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number;
    // getY: (y: string) => number;
}

// 메서드는 덮어쓸수있다.
interface GetXnY2 {
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: string): number;
}


const testMethod: GetXnY2 = {
    getX(x){
        return x;
    },
    getY(y){
        return 1;
    }
}


/**
 * Type Extention
 */

interface WeightLight {
    weight: string;
}
interface Press extends WeightLight {
    name: string;
}

const bench: Press = {
    name: "bench press",
    weight: "100kg",
}

const push: Press = {
    name: "push press",
    weight: "50kg",
}

const jerk: Press = {
    name: "jerk",
    weight: "80kg",
}

// 타입의 경우
type TWeightLight = {
    weight: string;
}

interface Pull extends TWeightLight {
    name: string;
}

// 타입도 extends 를 사용할 수 있다.
const pullUp: Pull = {
    name: "pull up",
    weight: "100kg",
}

/** 
 * extending multiple types
 */

type BenchPress = {
    benchPress: number;
}

type DeadLift = {
    deadLift: number;
}

type Squat = {
    squat: number;
}

type PowerLift = BenchPress & DeadLift & Squat;

const samdae: PowerLift = {
    benchPress: 100,
    deadLift: 200,
    squat: 300,
}

interface IPowerLift extends BenchPress, DeadLift, Squat { }

const samdae2: IPowerLift = {
    benchPress: 100,
    deadLift: 200,
    squat: 300,
}

/**
 * Overriding
 */

type Meal = {
    rice: string;
}

type DietMeal = Meal & {
    rice: number;
    fish: string;

}

// const dietMeal: DietMeal = {
//     // rice: 0,
//     fish: "200g",
// }