"use client";

import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";

function HeaderSignWrapper() {
  const auth = useAuth();

  const handleClickLogOut = () => {
    auth.setIsLoggedIn(false);
    alert("로그아웃 처리되었습니다.");
  };

  return (
    <ul className="flex items-center ml-auto gap-x-4">
      {auth.isLoggedIn ? (
        <li>
          <button onClick={handleClickLogOut}>로그아웃</button>
        </li>
      ) : (
        <>
          <li>
            <Link href="/auth/sign-up">회원가입</Link>
          </li>
          <li>
            <button>로그인</button>
          </li>
        </>
      )}
    </ul>
  );
}

export default HeaderSignWrapper;
