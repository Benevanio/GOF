import { User } from "../interfaces/IUser.js";

export class MyDatabaseClassic{
    private  static _instance: MyDatabaseClassic | null = null;
    private users: User[] = [];
    private constructor() {}

    public static getInstance(): MyDatabaseClassic {
        if (MyDatabaseClassic._instance === null) {
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        }
        return MyDatabaseClassic._instance;
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    getUsers(): User[] {
        return this.users;
    }
    removeUser(user: User): void {
        this.users = this.users.filter(u => u !== user);
    }
    showUsers(): void {
        for (const user of this.users) {

            console.log(`Name: ${user.name}, Age: ${user.age}`);
        }
    }
}