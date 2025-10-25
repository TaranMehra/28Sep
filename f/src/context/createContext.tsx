import React, {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";

type NameContextType = {
  name: string;
  setName: (name: string) => void;
};

const NameContext = createContext<
  NameContextType | undefined
>(undefined);

export const NameProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [name, setName] = useState("");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error(
      "useName must be used within a NameProvider"
    );
  }
  return context;
};
