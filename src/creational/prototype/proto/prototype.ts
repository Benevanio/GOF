import { IPrototype } from "../interface/Iprototype.js";
import { Address } from "./address.js";
export class Person implements IPrototype {
    public  addresses: Address[] = [];
    constructor(
        public name: string,
        public age: number,
        public address: string
    ) {}

    clone(): Person {
        const clonedPerson = new Person(this.name, this.age, this.address);
        clonedPerson.addresses = this.addresses.map(address => address.clone());
        return clonedPerson;
    }
}

