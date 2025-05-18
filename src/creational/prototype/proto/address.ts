export class Address {
    constructor(public street: string, public city: string, public country: string) {}
    clone(): Address {
        return new Address(this.street, this.city, this.country);
    }
}