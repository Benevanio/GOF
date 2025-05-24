import { DeviceImplementation } from "../device/Idevice-implementation";

export class RemoteControl {

    constructor(protected device: DeviceImplementation) {

    }

    togglePower(): void {
        this.device.getPower() ? this.device.powerOff() : this.device.powerOn();
    }

}