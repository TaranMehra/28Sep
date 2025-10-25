import { findUserByUsername, UserSignUpStoreFunction } from "../lib/models/user.model.js";
import bcrypt from "bcryptjs";
import { ReturnResponse } from "../lib/ReturnResponse.js";
import { checkConnection } from "../lib/connection.js";
//adding new user
export const signUpController = async (req, res) => {
    await checkConnection();
    try {
        const { username, email, password } = req.body;
        let alreadyUserRegistered = await findUserByUsername(username); //check is user already
        if (alreadyUserRegistered) {
            return ReturnResponse(res, 201, false, "User Already Registered", "/user.model.ts/checkUserNew");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await UserSignUpStoreFunction(username, email, hashedPassword);
        if (result?.id) {
            return ReturnResponse(res, 200, true, "User Registerd", "/user.model.ts");
        }
        else {
            new Error("Got error to register the user");
        }
    }
    catch (error) {
        throw new Error("Got the Error While SignUp : ");
        console.log("signUp error : ", error);
    }
};
//# sourceMappingURL=authControllers.js.map