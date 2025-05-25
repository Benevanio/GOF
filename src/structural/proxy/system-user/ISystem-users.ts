import { Address } from "../types/address";

export interface SystemUserProtocol {
    FirstName: string;
    LastName: string;
    Email: string;
    getAddress(): Promise<Address[]>;
}