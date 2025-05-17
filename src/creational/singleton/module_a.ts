
import { MyDatabaseModule } from "./db/my_database-module.js";
export const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.addUser({ name: "John", age: 30 });
myDatabaseModule.addUser({ name: "Jane", age: 25 });
myDatabaseModule.addUser({ name: "Doe", age: 40 });
myDatabaseModule.addUser({ name: "Alice", age: 35 });
myDatabaseModule.showUsers();

