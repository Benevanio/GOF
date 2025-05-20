import { EnterpriseCreateVehicleCustomerFactory } from "./factory/enterprice-vehicle-factory.js";

const enterprise = new EnterpriseCreateVehicleCustomerFactory();
const vehicle = enterprise.createVehicle("Car", "Enterprise");
vehicle.pickup();
const vehicle2 = enterprise.createVehicle("Truck", "Enterprise");
vehicle2.pickup();
const vehicle3 = enterprise.createVehicle("Bus", "Enterprise");
vehicle3.pickup();

const vehicle4 = enterprise.createVehicle("Van", "Enterprise");
vehicle4.pickup();