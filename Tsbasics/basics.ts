//primitives
let age: number;
age = 22.5;

let userName: string;
userName = "johnwick";

let isinstructor: boolean;
isinstructor = true;

// array types
let hobbies: string[];
hobbies = ["games", "coding"];

// type alias
type person = {
  age: number;
  name: string;
};
//object types
//assigned type name as a type declaration
let person: person;
person = {
  age: 12,
  name: "karthick",
};

//Array of objects
let people: person[];

people = [
  { age: 23, name: "kowsig" },
  { age: 24, name: "kothandam" },
];

//Type inference

let course = "ghgj";
course = "ghgj";

//union types

let coursetype: string | number | boolean;
coursetype = 334;

//Generics
function insertAtBeggining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeggining(demoArray, -1);
const stringArray = insertAtBeggining(["a", "b", "c"], "d");

//const splitting=stringArray[0].split("")

console.log(stringArray);

//generics 2

function log<T>(param: T): T {
  console.info(param);
  return param;
}
const result1 = log("typescript");
const result2 = log("amir");
const result = log(1234);

export default log;

//array of numbers
let integers: number[];
integers = [1, 2, 3, 4, 5, 6];

//example
type name = {
  fname: string;
  roles: string[];
  age: number;
};
let employee: name[];
employee = [{ fname: "jhhhk", roles: ["fhhhhh"], age: 8 }];

//generics

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};
const l = last([1, 2, 3, 4, 5]);
const l2 = last(["a", "b", "c"]);

//two generic types
const makeArr = <T, Y = number>(x: T, y: Y): [T, Y] => {
  return [x, y];
};

const v = makeArr("a", "b");
const v2 = makeArr(5, 6);
const v3 = makeArr<string>("a", 5);

//extends in generics
//extending a firstname and  LastName mandatorily
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + "" + obj.lastName,
  };
};

const v4 = makeFullName({ firstName: "karthick", lastName: "maohan", age: 12 });

//interfaces

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type stringTab = Tab<string>;
