import { MyDatabaseClassic } from "./db/database-classic.js";
export const myDatabaseClassic2 = MyDatabaseClassic.getInstance();
myDatabaseClassic2.addUser({ name: "PEdro", age: 30 });
myDatabaseClassic2.addUser({ name: "Jane", age: 25 });
myDatabaseClassic2.addUser({ name: "Doe", age: 40 });
myDatabaseClassic2.addUser({ name: "Carlos", age: 35 });
myDatabaseClassic2.showUsers();

