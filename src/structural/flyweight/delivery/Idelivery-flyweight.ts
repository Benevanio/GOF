export interface IDeliveryFlyweight {
    deliver(orderId: string, address: string): void;
}