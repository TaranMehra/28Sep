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
  baseURL: "http://localhost:3000/",
});

export const SendSignUpData = async (data: SignUpDataType) => {
  const result = await ax_instance.post("/api/auth/sign-up", data);
  return result;
};
// export const SendLoginData = async (data: LoginDataType) => {
// const getToken = await ax_instance.get("/auth/csrf");
// const csrfRes = await ax_instance.get("/auth/csrf", { withCredentials: true });
// const csrfToken = csrfRes.data.csrfToken;

// const { csrfToken } = getToken.data;
// console.log(csrfToken);
//   if (csrfToken) {
//     console.log("got csrf making req with creds", csrfToken);
//     const result = await ax_instance.post("/auth/signin", data);
//     console.log(result);
//     return result;
//   } else {
//     return null;
//   }
// }

export const SendLoginData = async (data: LoginDataType) => {
  try {
    // 1️⃣ Get CSRF token first
    const getToken = await ax_instance.get("/auth/csrf", { withCredentials: true });
    const { csrfToken } = getToken.data;

    // console.log("the crsf token is :", csrfToken);

    // if (csrfToken) {
    //   const getAuthSigninForm = await ax_instance.get("/auth/signin");
    //   console.log(getAuthSigninForm);
    //   return getAuthSigninForm;
    // }

    // 2️⃣ Send signin credentials — form-encoded
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

    console.log("✅ Signin response:", result);
    return result.data;
  } catch (err: any) {
    // console.error("❌ Signin failed:", err.response ||err.message);
    throw err;
  }
};
