import { ICustomer } from "@creational/abstract-factory/interface/Icustomer.js";
import { IVehicle } from "@creational/abstract-factory/interface/Ivehicle.js";

export class IndividualVehicle implements IVehicle {
    constructor(public name: string, private readonly customer: ICustomer) { }
    pickup(): void {
        console.log(`Individual vehicle ${this.name} is picking up the customer ${this.customer.name}`);
    }
}