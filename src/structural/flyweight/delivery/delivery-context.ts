import { DeliveryFactory } from "./delivery-factory";

export const deliveryContext = function (
    factory: DeliveryFactory,
    name: string,
    number: number,
    street: string,
    city: string,
    locationId: string,
    address: string,
    state: string
): void {
    const location = factory.makeLocation({
        name,
        number,
        street,
        city,
        locationId,
        address,
        state
    });
    location.deliver(locationId, address);

}