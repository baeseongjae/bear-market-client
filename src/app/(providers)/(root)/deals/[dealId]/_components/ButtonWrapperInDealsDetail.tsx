"use client";

import { ContainerButton } from "@/components/Button";
import InterestHeartMemo from "@/components/InterestHeart/InterestHeart";
import { useModal } from "@/contexts";
import useQueryUserData from "@/react-query/user/useQueryUserData";
import useMutationViews from "@/react-query/views/useMutationViews";
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
  // *1.로그인한 유저 이메일 정보 추출하여 => 해당 판매글의 authorEmail와 비교
  const { data: userData } = useQueryUserData();
  const { mutate: updateViews } = useMutationViews();
  const email = userData?.email;

  // 2.삭제 버튼 핸들러
  const modal = useModal();
  const handleClickDeleteDeal = () => {
    modal.open(<DeleteCheckModal dealId={dealId} />);
  };

  // *3.페이지 마운트시 조회수 업데이트
  useEffect(() => {
    updateViews(dealId);
  }, []);

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
