"use client";

import API from "@/api/index.api";
import DeleteCheckModal from "@/app/(providers)/(root)/deals/[dealId]/_components/DeleteCheckModal";
import InterestHeartMemo from "@/components/InterestHeart/InterestHeart";
import EditModal from "@/components/Modal/EditModal";
import { useAuth, useModal } from "@/contexts";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface ButtonWrapperByUser {
  dealId: number;
  authorEmail: string;
}

function ButtonWrapperByUser({ dealId, authorEmail }: ButtonWrapperByUser) {
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
  const handleClickDeleteDeal = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    modal.open(<DeleteCheckModal dealId={dealId} />);
  };

  const handleClickEditDeal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modal.open(<EditModal dealId={dealId} />);
  };

  return (
    <div className="flex items-center gap-x-1 ml-auto">
      {email === authorEmail ? (
        <>
          <button
            onClick={handleClickDeleteDeal}
            className="inline-block p-3 text-neutral-400 border-none text-xl rounded-full hover:bg-primary-100 hover:text-white"
          >
            <MdDelete />
          </button>
          <button
            className="hover:text-white hover:bg-primary-100 rounded-full text-neutral-400 text-xl font-semibold p-3 inline-block"
            onClick={handleClickEditDeal}
          >
            <FaEdit />
          </button>
        </>
      ) : (
        <InterestHeartMemo dealId={dealId} />
      )}
    </div>
  );
}

export default ButtonWrapperByUser;
