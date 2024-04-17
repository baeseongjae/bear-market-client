"use client";

import LogInModal from "@/app/(providers)/(root)/auth/sign-up/_components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import Link from "next/link";
import { toast } from "react-toastify";

function HeaderMenu() {
  const { isLoggedIn } = useAuth();
  const { open } = useModal();

  const handleClickServiceNeedLogIn = (path?: string) => {
    if (!isLoggedIn) {
      toast.info("로그인이 필요한 서비스입니다.");
      open(<LogInModal pathToGo={path} />);
    }
  };

  return (
    <nav className="ml-20">
      <ul className="flex items-center gap-x-4">
        <li>
          <Link href="/">구입하기</Link>
        </li>
        <li>
          <Link
            href={isLoggedIn ? "/deals/create" : ""}
            onClick={() => {
              handleClickServiceNeedLogIn("/deals/create");
            }}
          >
            판매하기
          </Link>
        </li>
        <li>
          <Link
            href={isLoggedIn ? "/my/deals" : ""}
            onClick={() => handleClickServiceNeedLogIn("/my/deals")}
          >
            내 판매글
          </Link>
        </li>
        <li>
          <Link
            href={isLoggedIn ? "/my/interests" : ""}
            onClick={() => handleClickServiceNeedLogIn("/my/interests")}
          >
            내 관심목록
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
