"use client";

import { ContainerButton } from "@/components/Button";
import InterestHeart from "@/components/InterestHeart/InterestHeart";
import { useModal } from "@/contexts";
import useQueryUserData from "@/react-query/user/useQueryUserData";
import useMutationViews from "@/react-query/views/useMutationViews";
import Link from "next/link";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
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
  const { mutate: updateViews } = useMutationViews(dealId);
  const email = userData?.email;

  // 2.삭제 버튼 핸들러
  const modal = useModal();
  const handleClickDeleteDeal = () => {
    modal.open(<DeleteCheckModal dealId={dealId} />);
  };

  // *3.페이지 마운트시 조회수 업데이트
  useEffect(() => {
    updateViews(dealId);
  }, [dealId]);

  return (
    <div className="flex items-center text-xl gap-x-4 ml-auto">
      {email === authorEmail ? (
        <>
          <ContainerButton
            onClick={handleClickDeleteDeal}
            className="inline-block p-3 bg-transparent rounded-full"
          >
            <MdDelete />
          </ContainerButton>
          <Link
            href={`./${dealId}/edit`}
            className="text-white font-semibold p-3 rounded-full hover:bg-primary-100 inline-block"
          >
            <FaEdit />
          </Link>
        </>
      ) : (
        <InterestHeart dealId={dealId} />
      )}
    </div>
  );
}

export default ButtonWrapperInDealsDetail;
