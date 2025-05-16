import { MyDatabaseClassic } from "./creational/singleton/db/database-classic.js";

const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();
console.log(db1 === db2); // true

db1.addUser({ name: "John", age: 30 });
const users = db2.getUsers();
console.log(users);
db1.getUsers().forEach(user => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
})
db1.removeUser({ name: "John", age: 30 });
db1.getUsers().forEach(user => {        
    console.log(`Name: ${user.name}, Age: ${user.age}`);
})