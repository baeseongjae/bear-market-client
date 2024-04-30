"use client";

import { ContainerButton, GhostButton } from "@/components/Button";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useModal } from "@/contexts";
import useMutationDeleteDeal from "@/react-query/deal/useMutationDeleteDeal";

function DeleteCheckModal({ dealId }: { dealId: number }) {
  const modal = useModal();

  //*2.판매글 삭제
  const { mutate: deleteDeal } = useMutationDeleteDeal();

  const handleClickDeleteButton = () => {
    deleteDeal(dealId);
    alert("판매글 삭제에 성공했습니다.");
    modal.close();
  };

  return (
    <Modal className="md:max-w-[390px] xs:w-[350px] w-[330px]">
      <Heading className="text-xl text-center my-4 mb-8 xs:text-xl md:text-[22px] lg:text-2xl">
        판매글 삭제
      </Heading>
      <p>정말로 삭제하시겠습니까?</p>
      <div className="flex items-center gap-x-2 mt-10">
        <GhostButton
          onClick={() => modal.close()}
          className="w-full inline-block h-12"
        >
          취소
        </GhostButton>
        <ContainerButton
          onClick={handleClickDeleteButton}
          className="w-full inline-block h-12"
        >
          삭제
        </ContainerButton>
      </div>
    </Modal>
  );
}

export default DeleteCheckModal;
