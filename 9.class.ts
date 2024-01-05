/**
 * Class
 * Define Class
 */

class Workout {
  workouts: string[];
  parts: string;
  sets: number;
  mainWorkout: string;
  date: Date;

  constructor(
    workouts: string[],
    parts: string,
    sets: number,
    mainWorkout: string,
    date: Date
  ) {
    this.workouts = workouts;
    this.parts = parts;
    this.sets = sets;
    this.mainWorkout = mainWorkout;
    this.date = date;
  }
}

const today = new Workout(
  [
    "incline bench press",
    "dummbell incline press",
    "pin loaded prerss",
    "cable fly",
    "machine dips",
    "laterals raise",
    "push ups",
  ],
  "Chest & Deltoid",
  30,
  "incline bench press",
  new Date()
);

/**
 * Read only
 */

class Human {
  readonly hasGirlFriend: boolean;

  constructor(hasGirlFriend: boolean) {
    this.hasGirlFriend = hasGirlFriend;
  }
}

const you = new Human(false);

// you cant change value
// you.hasGirlFriend = true; // Error

/**
 * Property Initilizer
 */

class Person {
  // Normal
  name: string;
  // Has value
  age: number = 20;
  // Optional
  address?: string;
  // Undefined
  phone: string | undefined;
  // Late
  gender!: string;

  constructor(name: string, age: number, address?: string, phone?: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.choidGender();
  }

  choidGender() {
    this.gender = "men";
  }
}

const who = new Person("Nguyen Van A", 20, "Ha Noi", "0123456789");

console.log(who.gender);

/**
 * Inheritance
 */

/**
 * Override
 */

/**
 * Abastract Class
 */
console.log("🧑 Abstract Class");
abstract class CrudRepository {
  abstract create(): void;
}

class UserRepository extends CrudRepository {
  create() {
    console.log("Create");
  }
}

const userRepository = new UserRepository();
userRepository.create();

/**
 * Visibility
 * 1. public - 아무나 접근 가능
 * 2. protected - 클래스 및 하위 클래스에서만 접근 가능
 * 3. private - 클래스 내 에서만 접근 가능
 */

class Crossfit {
  public dropin: string;
  private membership: string;
  #jsPrivate = "js private";
  constructor(dropin: string, membership: string) {
    this.membership = membership;
    this.dropin = dropin;
  }

  getMembershipPrice() {
    console.log(this.membership);
    console.log(this.#jsPrivate);
  }
}

const crossfitKutagym = new Crossfit("25000", "250000");

console.log(crossfitKutagym.dropin);
// console.log(crossfitKutagym.membership); // Error
crossfitKutagym.getMembershipPrice();
