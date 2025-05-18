import { Person } from "./proto/prototype.js";

const person1 = new Person("John Doe", 30, "123 Main St");
const person2 = person1.clone();

console.log(person1);
console.log(person2);