import axios from "axios";
import { redirect } from "react-router-dom";

interface LoginDataType {
  username: string;
  password: string;
}

interface SignUpDataType extends LoginDataType {
  email: string;
}
const ax_instance = axios.create({
  // baseURL: "http://192.168.1.19:3000/",
  withCredentials: true,
  baseURL: "http://localhost:4000/",
  // baseURL: "http://chatb.taranmehra.com/",
});

export const SendSignUpData = async (data: SignUpDataType) => {
  const result = await ax_instance.post("/api/auth/sign-up", data);
  return result;
};

export const SendLoginData = async (data: LoginDataType) => {
  try {
    // 1️⃣ Get CSRF token first
    const getToken = await ax_instance.get("/auth/csrf", { withCredentials: true });
    const { csrfToken } = getToken.data;

    // console.log("the crsf token is :", csrfToken);

    // if (csrfToken) {
    //   const getAuthSigninForm = await ax_instance.get("/auth/signin");
    // console.log(getAuthSigninForm);
    // console.log("failed to fetch", csrfToken);
    // return csrfToken;
    //   return getAuthSigninForm;
    // }
    // const csrfToken = "27283a888ee0c7c8124b979c516cf7f9258f754fc84f11040d6485f0b488b4d8"
    // return csrfToken;
    if (csrfToken) {
      // 2️⃣ Send signin credentials — form-encoded
      console.log("csrf before data sending : ", csrfToken);
      const result = await ax_instance.post(
        "/auth/callback/credentials",
        new URLSearchParams({
          username: data.username,
          password: data.password,
          csrfToken,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
          withCredentials: true, // ✅ important
        }
      );

      // console.log("✅ Signin response:", result);
      return result.data;
    }
  } catch (err: any) {
    // console.error("❌ Signin failed:", err.response ||err.message);
    throw err;
  }
};

export const AuthSessionGet = async () => {
  const result = await ax_instance.get("/auth/session", { withCredentials: true });
  return result;
};

export const FetchAllUsers = async () => {
  const result = await ax_instance.get("/api/getallUsers", { withCredentials: true });
  return result;
};
