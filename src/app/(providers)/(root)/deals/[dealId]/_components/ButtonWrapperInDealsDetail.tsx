"use client";

import API from "@/api/index.api";
import { ContainerButton } from "@/components/Button";
import InterestHeartMemo from "@/components/InterestHeart/InterestHeart";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";
import DeleteCheckModal from "./DeleteCheckModal";

interface ButtonWrapperInDealsDetailProps {
  dealId: number;
  authorEmail: string;
}

function ButtonWrapperInDealsDetail({
  dealId,
  authorEmail,
}: ButtonWrapperInDealsDetailProps) {
  const { isLoggedIn } = useAuth();
  const modal = useModal();

  //*1.로그인한 유저 이메일 정보 추출하여 => 해당 판매글의 authorEmail와 비교
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: API.auth.getUserEmail,
    enabled: isLoggedIn,
  });
  const email = userData?.email;

  // 2.삭제 버튼 핸들러
  const handleClickDeleteDeal = () => {
    modal.open(<DeleteCheckModal dealId={dealId} />);
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
    <div className="flex items-center text-[15px] gap-x-8 ml-auto">
      {email === authorEmail ? (
        <>
          <Link
            href={`./${dealId}/edit`}
            className="bg-primary-100 text-white font-semibold p-3 rounded-lg hover:bg-primary-100/70 inline-block"
          >
            글 수정하기
          </Link>
          <ContainerButton
            onClick={handleClickDeleteDeal}
            className="inline-block p-3"
          >
            글 삭제하기
          </ContainerButton>
        </>
      ) : (
        <InterestHeartMemo dealId={dealId} />
      )}
    </div>
  );
}

export default ButtonWrapperInDealsDetail;
