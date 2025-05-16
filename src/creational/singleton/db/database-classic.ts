interface User {
    name: string;
    age: number;
}
export class MyDatabaseClassic{
    private  static instance: MyDatabaseClassic | null = null;
    private users: User[] = [];
    private constructor() {}

    public static getInstance(): MyDatabaseClassic {
        if (MyDatabaseClassic.instance === null) {
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        }
        return MyDatabaseClassic.instance;
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
}