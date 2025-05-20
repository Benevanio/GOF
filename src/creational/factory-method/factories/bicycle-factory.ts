import { Bicycle } from "../classes/Vehicle/Bicycle.js";
import { Vehicle } from "../classes/Vehicle/Vehicle.js";

export class BicycleFactory {
    getVehicle(vehicleName: string): Vehicle {
        const bicycle = new Bicycle(vehicleName);
        return bicycle;
    }
}