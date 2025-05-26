import { Address } from "../types/address";

export interface ISystemUserProtocol {
    FirstName: string;
    LastName: string;
    Email: string;
    getAddress(): Promise<Address[]>;
}