import { DeliveryLocationData } from "../types/delivery-types";
import { IDeliveryFlyweight } from "./Idelivery-flyweight";

export class DeliveryLocation implements IDeliveryFlyweight {
    constructor(private readonly data: DeliveryLocationData) { }
    deliver(orderId: string, address: string): void {
        console.log(
            `Delivering order ${orderId} to ${this.data.locationId} at address: ${address}`
        );
    }

}