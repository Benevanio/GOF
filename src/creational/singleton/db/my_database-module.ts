import { User } from "../interfaces/IUser.js";

let users: User[] = []
export const  MyDatabaseModule = {
    addUser(user: User): void {
       users.push(user);
    },    
    removeUser(user: User): void {
        users = users.filter(u => u !== user);
    },
    showUsers(): User[] { 
        return users;
    }
}
