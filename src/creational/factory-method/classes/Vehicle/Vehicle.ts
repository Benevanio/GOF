export class Vehicle {
    pickUp(arg0: string) {
        console.log(`Vehicle ${this.name} is picking up ${arg0}`);
    }
    stop() {
        console.log(`Vehicle ${this.name} has stopped.`);
    }
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}