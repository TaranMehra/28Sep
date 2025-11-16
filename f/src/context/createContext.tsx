import { AuthSessionGet } from "@/lib/dbOperations";
import React, { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

type NameContextType = {
  name: string;
  setName: (name: string) => void;
};

// 1
const NameContext = createContext<NameContextType | undefined>(undefined);

// 2
export const NameProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState();
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const user = (await AuthSessionGet()) as any;
      console.log("got user like this ", user.data);
      setUserInfo(user);
    })();
  }, []);
  return <NameContext.Provider value={{ name, setName }}>{children}</NameContext.Provider>;
};

// 3
export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
};
