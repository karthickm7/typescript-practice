var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
//primitives
var age;
age = 22.5;
var userName;
userName = "johnwick";
var isinstructor;
isinstructor = true;
// array types
var hobbies;
hobbies = ["games", "coding"];
//object types
//assigned type name as a type declaration
var person;
person = {
  age: 12,
  name: "karthick",
};
//Array of objects
var people;
people = [
  { age: 23, name: "kowsig" },
  { age: 24, name: "kothandam" },
];
//Type inference
var course = "this is typescript course";
course = "ghgj";
//union types
var coursetype;
coursetype = 334;
//Generics
function insertAtBeggining(array, value) {
  var newArray = __spreadArray([value], array, true);
  return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeggining(demoArray, -1);
var stringArray = insertAtBeggining(["a", "b", "c"], "d");
//const splitting=stringArray[0].split("")
console.log(stringArray);
