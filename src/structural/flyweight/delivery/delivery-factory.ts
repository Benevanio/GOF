import { DeliveryLocationData } from "../types/delivery-types";
import { DeliveryLocation } from "./delivery-location";
import { IDeliveryFlyweight } from "./Idelivery-flyweight";

export class DeliveryFactory {
    private readonly locations: Map<string, DeliveryLocation> = new Map();

    makeLocation(
        locationData: DeliveryLocationData): IDeliveryFlyweight {
        const { locationId } = locationData;
        if (!this.locations.has(locationId)) {
            this.locations.set(
                locationId,
                new DeliveryLocation(locationData)
            );
        }
        return this.locations.get(locationId) as IDeliveryFlyweight;
    }

}
