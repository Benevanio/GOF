import { ICustomer } from "../interface/Icustomer.js";

export class EnterpriseCustomer implements ICustomer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}