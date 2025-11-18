import { checkConnection } from "../lib/connection.js";
import { GetAllUsersFunc } from "../lib/models/user.model.js";
import { ReturnResponse } from "../lib/ReturnResponse.js";
export const GetAllUsers = async (req, res) => {
    const db = await checkConnection();
    try {
        const users = await GetAllUsersFunc();
        console.log("users : ", users);
        return ReturnResponse(res, 200, true, "All Users Fetched Successfully", "controllers/GetAllUsers", undefined, users);
    }
    catch (error) {
        return ReturnResponse(res, 500, false, "Could't Fetch Users", "controllers/GetAllUsers", error);
    }
};
//# sourceMappingURL=GetAllUsers.js.map