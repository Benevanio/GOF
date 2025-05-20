import { ICustomer } from "../interface/Icustomer.js";

export class IndividualCustomer implements ICustomer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}