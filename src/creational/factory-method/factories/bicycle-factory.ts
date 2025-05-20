import { Bicycle } from "../classes/Vehicle/Bicycle.js";
import { Vehicle } from "../classes/Vehicle/Vehicle.js";

export abstract class VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        const bicycle = new Bicycle(vehicleName);
        return bicycle;
    }
}