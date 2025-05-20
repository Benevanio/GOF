import { EnterpriseCustomer } from "../class/enterprise-customer.js";
import { EnterpriseCar } from "../class/vehicle/enterprise-car.js";
import { ICustomer } from "../interface/Icustomer.js";
import { IVehicle } from "../interface/Ivehicle.js";

export class EnterpriseCreateVehicleCustomerFactory {
    createCustomer(customerName: string): ICustomer {
        return new EnterpriseCustomer(customerName);

    }
    createVehicle(vehicleType: string, customerName: string): IVehicle {
        const customer = this.createCustomer(customerName);
        return new EnterpriseCar(vehicleType, customer);
    }
}