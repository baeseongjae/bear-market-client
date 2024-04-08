"use client";

import API from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface ButtonWrapperInDealsDetailProps {
  dealId: number;
  authorEmail: string;
}

function ButtonWrapperInDealsDetail({
  dealId,
  authorEmail,
}: ButtonWrapperInDealsDetailProps) {
  // 로그인한 유저 이메일 정보 추출하여 => 해당 판매글의 authorEmail와 비교
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: API.auth.getUserEmail,
  });

  const email = userData?.email;

  return (
    <div className="flex justify-end gap-x-8">
      {email === authorEmail ? (
        <>
          <Link
            href={`./${dealId}/edit`}
            className="bg-violet-500 text-white px-3 py-2 rounded-md hover:bg-violet-400 inline-block mt-4"
          >
            글 수정하기
          </Link>
          <button className="bg-violet-500 text-white px-3 py-2 rounded-md hover:bg-violet-400 inline-block mt-4">
            글 삭제하기
          </button>
        </>
      ) : (
        <button className="bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-300 inline-block mt-4">
          관심 표하기
        </button>
      )}
    </div>
  );
}

export default ButtonWrapperInDealsDetail;
