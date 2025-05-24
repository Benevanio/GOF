export interface DeviceImplementation {
    getName(): string;
    setPower(power: boolean): void;
    getPower(): boolean;
    setVolume(volume: number): void;
    getVolume(): number;
    powerOn(): void;
    powerOff(): void;
}