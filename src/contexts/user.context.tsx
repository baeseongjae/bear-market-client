"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type UserContextValue = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

const initialValue = {
  email: "",
  setEmail: () => {},
};

// 1. 컨텍스트 생성
const UserContext = createContext<UserContextValue>(initialValue);

// 2. 컨텍스트 사용
export const useUser = () => useContext(UserContext);

// 3. 범위지정 및 값 할당
export function UserProvider({ children }: PropsWithChildren) {
  const [email, setEmail] = useState("");

  const value = {
    email,
    setEmail,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
