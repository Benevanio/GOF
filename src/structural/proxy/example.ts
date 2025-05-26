import { SystemUserProxy } from "./system-user/system-user-proxy";


const user = new SystemUserProxy("John ", "Doe", "john.doe@example.com");
user.getAddress().then(addresses => {
    console.log("User Addresses:", addresses);
}).catch(error => {
    console.error("Error fetching addresses:", error);
});