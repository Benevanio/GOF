import { DeliveryLocationData } from "../types/delivery-types";
import { DeliveryLocation } from "./delivery-location";
import { IDeliveryFlyweight } from "./Idelivery-flyweight";

export class DeliveryFactory {
    private readonly locations: Map<string, DeliveryLocation> = new Map();
    private createID(data: DeliveryLocationData): string {
        return Object.values(data).map(item => item.replace(/\s+/g, '-').toLowerCase()).join('-');

    }
    makeLocation(
        locationData: DeliveryLocationData): IDeliveryFlyweight {
        const id = this.createID(locationData);
        if (!this.locations.has(id)) {
            this.locations.set(
                id,
                new DeliveryLocation(locationData)
            );
        }
        return this.locations.get(id) as IDeliveryFlyweight;
    }

}
