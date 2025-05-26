import { Address } from "../types/address";
import { ISystemUserProtocol } from "./ISystem-users";
import { AdminUser } from "./system-users";

export class SystemUserProxy implements ISystemUserProtocol {
    private realUser: ISystemUserProtocol | null = null;
    private realUSerAddresses: Address[] | null = null;

    constructor(public FirstName: string, public LastName: string, public Email: string) { }

    private createRealUser(): ISystemUserProtocol {
        if (!this.realUser) {
            this.realUser = new AdminUser(this.FirstName, this.LastName, this.Email);
        }
        return this.realUser;
    }


    async getAddress(): Promise<Address[]> {
        if (!this.realUSerAddresses) {
            this.realUSerAddresses = await this.createRealUser().getAddress();
        }
        return this.realUSerAddresses;

    }

}