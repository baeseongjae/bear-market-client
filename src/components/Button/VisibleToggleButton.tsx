"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface VisibleToggleButtonProps {
  isPasswordVisible: boolean;
  setIsPasswordVisible: Dispatch<SetStateAction<boolean>>;
}

function VisibleToggleButton({
  isPasswordVisible,
  setIsPasswordVisible,
}: VisibleToggleButtonProps) {
  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
    >
      {isPasswordVisible ? (
        <Image
          src="/assets/sign_up_page/password_hide.svg"
          alt="비밀번호 가리기"
          width={17}
          height={17}
          className="absolute right-[14px] top-1/2 -translate-y-1/2"
        />
      ) : (
        <Image
          src="/assets/sign_up_page/password_view.svg"
          alt="비밀번호 보이기"
          width={17}
          height={17}
          className="absolute right-[14px] top-1/2 -translate-y-1/2"
        />
      )}
    </button>
  );
}

export default VisibleToggleButton;
