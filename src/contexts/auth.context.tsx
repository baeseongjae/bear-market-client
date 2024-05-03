"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useUser } from "./user.context";

type AuthContextValue = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  isAuthInitialized: boolean;
  setIsAuthInitialized: Dispatch<SetStateAction<boolean>>;
};

const initialValue = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isAuthInitialized: false,
  setIsAuthInitialized: () => {},
};

// 1. 컨텍스트 생성
const AuthContext = createContext<AuthContextValue>(initialValue);

// 2. 컨텍스트 사용
export const useAuth = () => useContext(AuthContext);

// 3. 범위지정 및 값 할당
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const { setEmail } = useUser();

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isAuthInitialized,
    setIsAuthInitialized,
  };

  // useEffect(() => {
  //   const isAccessTokenStored = !!(typeof window !== "undefined"
  //     ? localStorage.getItem("accessToken")
  //     : null);
  //   setIsLoggedIn(isAccessTokenStored);
  //   setIsAuthInitialized(true);
  //   const email = localStorage.getItem("userEmail");
  //   console.log("이메일은", email);
  //   email ? setEmail(email) : null;
  // }, [setEmail]);

  // // * 4분30초마다 리프레시 토큰 갱신
  // useEffect(() => {
  //   let timerId: number | undefined;
  //   if (isLoggedIn) {
  //     timerId = window.setInterval(async () => {
  //       await API.auth.refreshToken();
  //     }, 1000 * 60 * 4.5);
  //     return () => {
  //       window.clearInterval(timerId);
  //     };
  //   } else {
  //     if (!timerId) return;

  //     window.clearInterval(timerId);
  //   }
  // }, [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
