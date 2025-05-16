import { MyDatabaseClassic } from "./db/database-classic.js";
export const myDatabaseClassic1 = MyDatabaseClassic.getInstance();
myDatabaseClassic1.addUser({ name: "John", age: 30 });
myDatabaseClassic1.addUser({ name: "Jane", age: 25 });
myDatabaseClassic1.addUser({ name: "Doe", age: 40 });
myDatabaseClassic1.addUser({ name: "Alice", age: 35 });
myDatabaseClassic1.showUsers();

