import { EnterpriseCreateVehicleCustomerFactory } from "./factory/enterprice-vehicle-factory.js";

const enterprise = new EnterpriseCreateVehicleCustomerFactory();
const vehicle = enterprise.createVehicle("Car", "paula");
vehicle.pickup();
const vehicle2 = enterprise.createVehicle("Truck", "Joana");
vehicle2.pickup();
const vehicle3 = enterprise.createVehicle("Bus", "Matheus");
vehicle3.pickup();

const vehicle4 = enterprise.createVehicle("Van", "Lucas");
vehicle4.pickup();