import { DeviceImplementation } from "./Idevice-implementation";

export class Radio implements DeviceImplementation {

    private power: boolean = false;
    private volume: number = 5;

    getName(): string {
        return "Radio";
    }

    setPower(power: boolean): void {
        this.power = power;
    }

    getPower(): boolean {
        return this.power;
    }

    setVolume(volume: number): void {
        this.volume = volume;
    }

    getVolume(): number {
        return this.volume;
    }

    powerOn(): void {
        this.setPower(true);
        console.log(`${this.getName()} is now ON`);
    }

    powerOff(): void {
        this.setPower(false);
        console.log(`${this.getName()} is now OFF`);
    }
}