import { Car } from "../classes/Vehicle/car.js";
import { Vehicle } from "../classes/Vehicle/Vehicle.js";

export class VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        const car = new Car(vehicleName);
        return car;
    }
}