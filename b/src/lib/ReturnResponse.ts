import { response, type Response } from "express";
import { string } from "zod";

interface ReturnResponseApiType {
  success: boolean;
  message: string;
  path?: string | undefined;
  data?: string | undefined;
  error?: Error | undefined;
  errorCode?: number | undefined;
}
export const ReturnResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  path?: string,
  error?: any,
  data?: any,
  errorCode?: number //even in sequence of optional parameter required parameter decalring show error
): Response => {
  const payload: ReturnResponseApiType = {
    success,
    message,
    data,
    errorCode,
    error,
    path,
  };
  return res.status(statusCode).json(payload);
};
