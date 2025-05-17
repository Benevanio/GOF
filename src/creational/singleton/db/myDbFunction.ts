import { User } from "../interfaces/IUser.js";

export const MyDatabaseFunction = (() => {
   let users: User[] = [];
   return {
      addUser(user: User): void {
           users.push(user);
        },    
        removeUser(user: User): void {
            users = users.filter(u => u !== user);
        },
        showUsers(): User[] { 
            return users;
        },
        getUserCount(): number {
            return users.length;
        }
   }

})();