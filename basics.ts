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

let course = "this is typescript course";
course = "ghgj";

//union types

let coursetype: string | number;
coursetype = 334;
