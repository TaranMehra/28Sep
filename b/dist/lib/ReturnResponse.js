import { response } from "express";
import { string } from "zod";
export const ReturnResponse = (res, statusCode, success, message, path, error, data, errorCode //even in sequence of optional parameter required parameter decalring show error
) => {
    const payload = {
        success,
        message,
        data,
        errorCode,
        error,
        path,
    };
    return res.status(statusCode).json(payload);
};
//# sourceMappingURL=ReturnResponse.js.map