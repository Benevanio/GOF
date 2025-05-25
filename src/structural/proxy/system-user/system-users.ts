import { Address } from "../types/address";
import { SystemUserProtocol } from "./ISystem-users";

export class AdminUser implements SystemUserProtocol {
    public FirstName: string;
    public LastName: string;
    public Email: string;
    constructor(firstName: string, lastName: string, email: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
    }
    async getAddress(): Promise<Address[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        street: "123 Main St",
                        number: "1A",
                        city: "Anytown",
                        state: "CA",
                        zipCode: "12345"
                    },
                    {
                        street: "456 Elm St",
                        number: "2B",
                        city: "Othertown",
                        state: "TX",
                        zipCode: "67890"
                    }
                ]);
            }, 1000);
        }
        );
    }

}