import { signUpSchema } from "../schemas/signUpSchema.js";
import { ReturnResponse } from "../lib/ReturnResponse.js";
export const signUpmiddleware = async (req, res, next) => {
    try {
        const result = signUpSchema.safeParse(req.body);
        if (!result.success) {
            console.log("safeParse Error : ", result.error);
        }
        else {
            result.data;
            next();
        }
        // next();
    }
    catch (error) {
        console.log("Error while parsing the data", error);
        return ReturnResponse(res, 500, false, "Error while parsing", "middlewares/signUpmiddleware", error);
    }
};
//# sourceMappingURL=signUpmiddleware.js.map