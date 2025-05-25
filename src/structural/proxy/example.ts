import { AdminUser } from "./system-user/system-users";

const adminUser = new AdminUser("John", "Doe", "john.doe@example.com");
adminUser.getAddress().then(addresses => {
    console.log("Addresses:", addresses);
}).catch(error => {
    console.error("Error fetching addresses:", error);
});