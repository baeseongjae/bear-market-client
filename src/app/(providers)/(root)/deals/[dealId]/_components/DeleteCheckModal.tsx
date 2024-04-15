"use client";

import API from "@/api/index.api";
import { ContainerButton, GhostButton } from "@/components/Button";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useModal } from "@/contexts/modal.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

function DeleteCheckModal({ dealId }: { dealId: number }) {
  const modal = useModal();
  const router = useRouter();

  //*2.판매글 삭제
  const { mutate: deleteDeal } = useMutation({
    mutationFn: API.deals.deleteDeal,
    onSuccess: () => {
      router.push("/my/deals");
    },
  });

  const handleClickDeleteButton = () => {
    deleteDeal(dealId);
    alert("판매글 삭제에 성공했습니다.");
    modal.close();
  };

  return (
    <Modal>
      <Heading className="text-xl text-center my-4 mb-8">판매글 삭제</Heading>
      <p>정말로 삭제하시겠습니까?</p>
      <div className="flex items-center gap-x-2">
        <GhostButton onClick={() => modal.close()} className="w-full">
          취소
        </GhostButton>
        <ContainerButton onClick={handleClickDeleteButton} className="w-full">
          삭제
        </ContainerButton>
      </div>
    </Modal>
  );
}

export default DeleteCheckModal;
