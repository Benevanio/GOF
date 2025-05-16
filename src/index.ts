import { myDatabaseClassic1 } from "./creational/singleton/module_a.js";
import { myDatabaseClassic2 } from "./creational/singleton/module_b.js";

for (const user of myDatabaseClassic1.getUsers()) {
  console.log(`User from module A: ${user.name}, Age: ${user.age}`);
}
for (const user of myDatabaseClassic2.getUsers()) {
  console.log(`User from module B: ${user.name}, Age: ${user.age}`);
}