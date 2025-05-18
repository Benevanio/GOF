import { IPrototype } from "../interface/Iprototype.js";

export class Person implements IPrototype {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  clone(): Person {
    return new Person(this.name, this.age, this.address);
  }
}