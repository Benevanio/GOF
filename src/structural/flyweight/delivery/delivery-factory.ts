import { DeliveryLocationData } from "../types/delivery-types";
import { DeliveryLocation } from "./delivery-location";

export class DeliveryFactory {
    private readonly locations: Map<string, DeliveryLocation> = new Map();

    getDeliveryLocation(data: DeliveryLocationData): DeliveryLocation {
        const key = data.locationId;
        if (!this.locations.has(key)) {
            this.locations.set(key, new DeliveryLocation(data));
        }
        return this.locations.get(key)!;
    }
}
