// modules
import { UserRole } from "../models/index.js";


// Create a new user role
const createUserRole = async (userID, roleID) => {
    try {
        const userRole = await UserRole.create({
            UserID: userID,
            RoleID: roleID,
        });
        return userRole;
    } catch (error) {
        console.error("Error creating user role:", error);
        throw error;
    }
}
// exports

export default {
    createUserRole,
};
