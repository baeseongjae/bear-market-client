"use client";

import API from "@/api/index.api";
import { useAuth } from "@/contexts/auth.context";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { FiCornerUpRight, FiLogOut } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";
import { HiAnnotation, HiCollection } from "react-icons/hi";
import { toast } from "react-toastify";

function HeaderDropdown() {
  const auth = useAuth();
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleClickLogOut = () => {
    auth.setIsLoggedIn(false);
    API.auth.logOut();
    queryClient.invalidateQueries({ exact: true, queryKey: ["user"] });
    toast.success("로그아웃 처리되었습니다.");
    router.push("/");
  };

  return (
    <nav className="absolute w-40 top-10 right-0 py-2">
      <ul className="bg-white rounded-2xl border border-slate-300 shadow-xl">
        <li className="px-3 py-2">이메일</li>

        <hr className="block xs:hidden" />
        <li className="block xs:hidden">
          <Link
            href="/deals/create"
            className="flex items-center gap-x-1 px-3 py-2 hover:text-rose-400"
          >
            <FiCornerUpRight />
            판매하기
          </Link>
        </li>
        <li className="block xs:hidden">
          <Link
            href="#"
            className="flex items-center gap-x-1 px-3 py-2 hover:text-rose-400"
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
          >
            <CgProfile />내 프로필
          </Link>
        </li>
        <li>
          <Link
            href="/my/deals"
            className="flex items-center gap-x-1 px-3 py-2 hover:text-rose-400"
          >
            <HiCollection />내 판매글
          </Link>
        </li>
        <li>
          <Link
            href="/my/interests"
            className="flex items-center gap-x-1 px-3 py-2 hover:text-rose-400"
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
