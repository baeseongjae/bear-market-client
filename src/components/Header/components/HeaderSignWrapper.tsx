"use client";

import API from "@/api/index.api";
import LogInModal from "@/app/(providers)/(root)/auth/sign-up/_components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function HeaderSignWrapper() {
  const auth = useAuth();
  const modal = useModal();
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleClickLogIn = () => {
    modal.open(<LogInModal />);
  };

  const handleClickLogOut = () => {
    auth.setIsLoggedIn(false);
    API.auth.logOut();
    queryClient.invalidateQueries({ exact: true, queryKey: ["user"] });
    toast.success("로그아웃 처리되었습니다.");
    router.push("/");
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
            <button onClick={handleClickLogIn}>로그인</button>
          </li>
        </>
      )}
    </ul>
  );
}

export default HeaderSignWrapper;
