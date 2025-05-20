import { ICustomer } from "../interface/Icustomer.js";
import { IVehicle } from "../interface/Ivehicle.js";

export interface CreateVehicleCustomer {
    createCustomer(customerName: string): ICustomer;
    createVehicle(vehicleType: string, customerName: string): IVehicle;
}