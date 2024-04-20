"use client";

import { ContainerButton, GhostButton } from "@/components/Button";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useModal } from "@/contexts";
import { useRouter } from "next/navigation";

function EditModal({ dealId }: { dealId: number }) {
  const modal = useModal();
  const router = useRouter();

  const handleClickMove = () => {
    router.push(`./deals/${dealId}/edit`);
    modal.close();
  };

  return (
    <Modal>
      <Heading className="text-xl text-center my-4 mb-8">판매글 수정</Heading>
      <p>수정 페이지로 이동할까요?</p>
      <div className="flex items-center gap-x-2 mt-10">
        <GhostButton
          onClick={() => modal.close()}
          className="w-full inline-block h-12"
        >
          취소
        </GhostButton>
        <ContainerButton
          onClick={handleClickMove}
          className="w-full inline-block h-12"
        >
          이동
        </ContainerButton>
      </div>
    </Modal>
  );
}

export default EditModal;
