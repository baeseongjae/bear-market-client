"use client";

import API from "@/api/index.api";
import { useAuth } from "@/contexts/auth.context";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ButtonWrapperInDealsDetailProps {
  dealId: number;
  authorEmail: string;
}

function ButtonWrapperInDealsDetail({
  dealId,
  authorEmail,
}: ButtonWrapperInDealsDetailProps) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  // 로그인한 유저 이메일 정보 추출하여 => 해당 판매글의 authorEmail와 비교
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: API.auth.getUserEmail,
    enabled: isLoggedIn,
  });
  const email = userData?.email;

  const { mutateAsync: deleteDeal } = useMutation({
    mutationFn: API.deals.deleteDeal,
    onSuccess: () => router.push("/my/deals"),
  });

  const handleClickDeleteDeal = async () => {
    await deleteDeal(dealId);
    alert("판매글 삭제에 성공했습니다.");
  };

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
          <button
            onClick={handleClickDeleteDeal}
            className="bg-violet-500 text-white px-3 py-2 rounded-md hover:bg-violet-400 inline-block mt-4"
          >
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
