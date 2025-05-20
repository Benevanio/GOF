import { Vehicle } from "../classes/Vehicle/Vehicle.js";
import { BicycleFactory } from "../factories/bicycle-factory.js";
import { VehicleFactory } from "../factories/vehicle-factory.js";

export function getRandomVehicle(): Vehicle {
    const carFactory = new VehicleFactory();
    const bicycleFactory = new BicycleFactory();
    const car1 = carFactory.getVehicle("Fusca");
    const arrayFactories = [
        "Fusca",
        "Civic",
        "Corolla",
        "Palio",
        "Gol",
        "Onix"
    ]
    const bicycleFactories = [
        "Mountain Bike",
        "Road Bike",
        "Hybrid Bike",
        "BMX",
        "Cruiser Bike"
    ];
    const randomVehicle = Math.random() < 0.5 ? carFactory.getVehicle(arrayFactories[Math.floor(Math.random() * arrayFactories.length)]) : bicycleFactory.getVehicle(bicycleFactories[Math.floor(Math.random() * bicycleFactories.length)]);
    randomVehicle.pickUp("John Doe");
    randomVehicle.stop();
    return randomVehicle;
}