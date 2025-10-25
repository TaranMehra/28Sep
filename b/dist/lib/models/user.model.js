import { checkConnection } from "../connection.js";
import { ReturnResponse } from "../ReturnResponse.js";
import { UserModel } from "./Schemas.Model.js";
export const UserSignUpStoreFunction = async (username, email, password) => {
    const result = await UserModel.create({ username, email, password }); //this is document
    return result;
    // await UserModel.insertMany([{ username, email, password }, {  }]); //inserting large batches array
};
export const findUserByUsername = async (username) => {
    const result = await UserModel.findOne({ username: username });
    return result;
};
//# sourceMappingURL=user.model.js.map