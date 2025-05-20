import { IVehicle } from "../interfaces/IVehicle.js";

export class Bicycle implements IVehicle {
    constructor(private name: string) {
    }
    pickUp(Customer: string): void {
        console.log(`Bicycle ${this.name} is picking up ${Customer}`);
    }
    stop(): void {
        console.log(`Bicycle ${this.name} has stopped`);
    }

}
