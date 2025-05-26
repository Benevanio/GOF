import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const deliveryFactory = new DeliveryFactory();

deliveryContext(
    deliveryFactory,
    "John Doe",
    123,
    "Main St",
    "Springfield",
    "location-001",
    "123 Main St, Springfield, IL",
    "IL"
);
console.log("Delivery locations created:", deliveryFactory.getLocation("location-001")); 