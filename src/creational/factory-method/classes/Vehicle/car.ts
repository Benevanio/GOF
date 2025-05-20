import { IVehicle } from "../interfaces/IVehicle.js";

export class Car implements IVehicle {
    pickUp(Customer: string): void {
        console.log(`Car is picking up ${Customer}`);
    }
    stop(): void {
        console.log(`Car has stopped`);
    }

}