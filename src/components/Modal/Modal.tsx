import { useModal } from "@/contexts/modal.context";
import { PropsWithChildren } from "react";

interface ModalProps {
  className?: string;
}

function Modal({ children, className }: PropsWithChildren<ModalProps>) {
  const modal = useModal();
  const handleClickBackdrop = () => modal.close();

  return (
    <div
      onClick={handleClickBackdrop}
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-2xl min-w-80 md:w-full max-w-[370px] px-5 py-8 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
