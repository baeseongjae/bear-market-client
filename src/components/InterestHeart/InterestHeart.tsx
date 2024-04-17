"use client";

import API from "@/api/index.api";
import LogInModal from "@/app/(providers)/(root)/auth/sign-up/_components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { ComponentProps, useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { toast } from "react-toastify";

interface InterestHeartProps extends ComponentProps<"button"> {
  dealId: number;
}

function InterestHeart({ dealId, ...props }: InterestHeartProps) {
  const queryClient = useQueryClient();
  const { isLoggedIn } = useAuth();
  const modal = useModal();
  const { mutate: toggleInterest } = useMutation({
    mutationFn: API.deals.toggleInterest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["myInterests"],
      });
    },
  });
  const { data: myInterests, isLoading } = useQuery({
    queryKey: ["myInterests"],
    queryFn: API.deals.getMyInterests,
    enabled: isLoggedIn,
  });
  const [isClickedInterest, setIsClickedInterest] = useState<boolean>(false);

  // 처음 마운트시 해당유저의 관심버튼토글 서버상태 동기화.
  useEffect(() => {
    if (myInterests && !isLoading) {
      const isInterested = myInterests.some(
        (interest) => interest.dealId === dealId
      );
      setIsClickedInterest(isInterested);
    }
  });

  const handleClickInterestButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (isLoggedIn) {
      toggleInterest(dealId);
      setIsClickedInterest(!isClickedInterest);
    } else {
      toast.info("로그인이 필요한 서비스 입니다.");
      modal.open(<LogInModal />);
    }
  };

  return (
    <button
      onClick={handleClickInterestButton}
      className={`text-primary-100 text-[24px] ml-auto mr-2 p-2 ${
        !isClickedInterest && "hover:text-primary-100/60"
      }`}
      {...props}
    >
      {isClickedInterest ? <GoHeartFill /> : <GoHeart />}
    </button>
  );
}

const InterestHeartMemo = React.memo(InterestHeart);

export default InterestHeartMemo;
