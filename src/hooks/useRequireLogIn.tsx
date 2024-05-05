"use client";

import LogInModal from "@/app/(providers)/(root)/auth/_components/LogInModal";
import { useAuth, useModal } from "@/contexts";
import { useEffect } from "react";
import { toast } from "react-toastify";

export function useRequireLogIn() {
  const { isLoggedIn } = useAuth();
  const modal = useModal();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.info("로그인이 필요한 페이지입니다.");
      modal.open(<LogInModal />);
    }
  }, []);
}
