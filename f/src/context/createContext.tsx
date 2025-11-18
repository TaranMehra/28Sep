import { AuthSessionGet } from "@/lib/dbOperations";
import { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

type NameContextType = {
  logedIn: boolean;
  userInfo:
    | {
        id: string | undefined;
        username: string | undefined;
        email: string | undefined;
      }
    | undefined;
};

type setUserLoginInfoParms = ()=> void;

// 1
const NameContext = createContext<NameContextType | undefined>(undefined);


export const loginFunc = (setUserLoginInfo: React.SetStateAction<NameContextType>) => {
  // setUserLoginInfo(()=>({
    
  // }))
};

// 2
export const NameProvider = ({ children }: { children: ReactNode }) => {
  // const [userInfo, setUserInfo] = useState();
  const [userLoginInfo, setUserLoginInfo] = useState<NameContextType>({
    logedIn: false,
    userInfo: undefined,
  });

  useEffect(() => {
    (async () => {
      const user = (await AuthSessionGet()) as any;
      const data = user?.data?.user;
      console.table(`ALready Loged in user  : `, user.data.user);
      if (data) {
        setUserLoginInfo({
          logedIn: true,
          userInfo: { id: data.id, username: data.username, email: data.email },
        }); //return user object
      } else {
        setUserLoginInfo(() => ({
          logedIn: false,
          userInfo: undefined,
        }));
      }
    })();
  }, []);
  console.log(userLoginInfo);
  return <NameContext.Provider value={userLoginInfo}>{children}</NameContext.Provider>;
};

// 3
export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
};
