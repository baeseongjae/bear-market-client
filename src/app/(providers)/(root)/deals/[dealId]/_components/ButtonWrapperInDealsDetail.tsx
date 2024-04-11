"use client";

import API from "@/api/index.api";
import InterestHeart from "@/components/InterestHeart";
import { useAuth } from "@/contexts/auth.context";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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

  //*1.로그인한 유저 이메일 정보 추출하여 => 해당 판매글의 authorEmail와 비교
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: API.auth.getUserEmail,
    enabled: isLoggedIn,
  });
  const email = userData?.email;

  //*2.판매글 삭제
  const { mutateAsync: deleteDeal } = useMutation({
    mutationFn: API.deals.deleteDeal,
    onSuccess: () => router.push("/my/deals"),
  });
  // 삭제 버튼 핸들러
  const handleClickDeleteDeal = async () => {
    await deleteDeal(dealId);
    alert("판매글 삭제에 성공했습니다.");
  };

  //*3.페이지 마운트시 조회수 업데이트
  const { mutate: updateViews, data: updatedViews } = useMutation({
    mutationFn: API.deals.updateViews,
  });

  useEffect(() => {
    updateViews(dealId);
  }, []);

  console.log("조회수", updatedViews);

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
        <InterestHeart dealId={dealId} />
      )}
    </div>
  );
}

export default ButtonWrapperInDealsDetail;
