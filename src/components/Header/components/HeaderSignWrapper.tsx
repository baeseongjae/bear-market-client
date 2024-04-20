"use client";

import LogInModal from "@/app/(providers)/(root)/auth/_components/LogInModal";
import { ContainerButton, GhostButton } from "@/components/Button";
import Icon from "@/components/Icon";
import { useAuth, useModal } from "@/contexts";
import Link from "next/link";
import { useState } from "react";
import HeaderDropdown from "./HeaderDropdown";

function HeaderSignWrapper() {
  const auth = useAuth();
  const modal = useModal();

  const [isTimeToShowDropdown, setIsTimeToShowDropdown] =
    useState<boolean>(false);

  const handleClickLogIn = () => {
    modal.open(<LogInModal />);
  };

  const handleClickProfileIcon = () => {
    setIsTimeToShowDropdown(!isTimeToShowDropdown);
  };

  return (
    <>
      {auth.isLoggedIn ? (
        <div className="ml-4 lg:ml-10 relative">
          <button onClick={handleClickProfileIcon}>
            <Icon
              src="/assets/header/profile.svg"
              alt="프로필"
              width={40}
              height={40}
            />
          </button>
          {isTimeToShowDropdown ? <HeaderDropdown /> : null}
        </div>
      ) : (
        <>
          <ul className="hidden lg:flex items-center ml-4 gap-x-4">
            <li>
              <Link href="/auth/sign-up">
                <GhostButton className="px-3 py-2">회원가입</GhostButton>
              </Link>
            </li>
            <li>
              <ContainerButton onClick={handleClickLogIn} className="px-3 py-2">
                로그인
              </ContainerButton>
            </li>
          </ul>
          <ContainerButton
            onClick={handleClickLogIn}
            className="lg:hidden px-3 py-2 ml-4"
          >
            함께하기
          </ContainerButton>
        </>
      )}
    </>
  );
}

export default HeaderSignWrapper;
