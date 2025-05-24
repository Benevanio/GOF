import { TV } from "./device/tv";
import { RemoteControl } from "./remote/remote-control";
import { RemoteControlWithVolume } from "./remote/remote-control-with-volume";

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
    abstraction.togglePower();
    if (abstraction instanceof RemoteControlWithVolume) {
        abstraction.volumeUp();
    }
}

console.log("--------------------------------------------------");
const tv = new TV();
const tvRemote = new RemoteControl(tv);
clientCode(tvRemote);
console.log("--------------------------------------------------");
const tvRemoteWithVolume = new RemoteControlWithVolume(tv);
clientCode(tvRemoteWithVolume);
console.log("--------------------------------------------------");
const radio = new (require("./device/radio").Radio)();
const radioRemote = new RemoteControl(radio);
clientCode(radioRemote);
console.log("--------------------------------------------------");
const radioRemoteWithVolume = new RemoteControlWithVolume(radio);
clientCode(radioRemoteWithVolume);
console.log("--------------------------------------------------");