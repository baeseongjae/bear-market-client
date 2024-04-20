"use client";

import API from "@/api/index.api";
import { useAuth, useUser } from "@/contexts";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { CgProfile } from "react-icons/cg";
import { FiCornerUpRight, FiLogOut } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";
import { HiAnnotation, HiCollection } from "react-icons/hi";
import { toast } from "react-toastify";

interface HeaderDropdownProps {
  setIsTimeToShowDropdown: Dispatch<SetStateAction<boolean>>;
}

function HeaderDropdown({ setIsTimeToShowDropdown }: HeaderDropdownProps) {
  const { setIsLoggedIn } = useAuth();
  const { email } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleClickLogOut = () => {
    setIsLoggedIn(false);
    setIsTimeToShowDropdown(false);
    API.auth.logOut();
    queryClient.invalidateQueries({ exact: true, queryKey: ["user"] });
    toast.success("로그아웃 처리되었습니다.");
    router.push("/");
    window.location.reload();
  };

  return (
    <nav className="absolute top-10 right-0 py-4">
      <ul className="bg-white rounded-2xl border border-slate-300 shadow-xl">
        <li className="px-3 py-2 text-sm">{email}</li>

        <hr className="block xs:hidden" />
        <li className="block xs:hidden">
          <Link
            href="/deals/create"
            className="flex items-center gap-x-1 px-3 py-2 hover:text-rose-400"
            onClick={() => setIsTimeToShowDropdown(false)}
          >
            <FiCornerUpRight />
            판매하기
          </Link>
        </li>
        <li className="block xs:hidden">
          <Link
            href="#"
            className="flex items-center gap-x-1 px-3 py-2 hover:text-rose-400"
            onClick={() => setIsTimeToShowDropdown(false)}
          >
            <HiAnnotation />
            채팅하기
          </Link>
        </li>

        <hr className="border-slate-300" />
        <li>
          <Link
            href="#"
            className="flex items-center gap-x-1 px-3 py-2 hover:text-rose-400"
            onClick={() => setIsTimeToShowDropdown(false)}
          >
            <CgProfile />내 프로필
          </Link>
        </li>
        <li>
          <Link
            href="/my/deals"
            className="flex items-center gap-x-1 px-3 py-2 hover:text-rose-400"
            onClick={() => setIsTimeToShowDropdown(false)}
          >
            <HiCollection />내 판매글
          </Link>
        </li>
        <li>
          <Link
            href="/my/interests"
            className="flex items-center gap-x-1 px-3 py-2 hover:text-rose-400"
            onClick={() => setIsTimeToShowDropdown(false)}
          >
            <GoHeartFill />내 관심목록
          </Link>
        </li>

        <hr className="border-slate-300" />
        <li>
          <button
            className="flex items-center w-full rounded-b-2xl gap-x-1 px-3 py-2 hover:text-rose-400"
            onClick={handleClickLogOut}
          >
            <FiLogOut />
            로그아웃
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderDropdown;
