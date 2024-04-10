"use client";

import API from "@/api/index.api";
import LogInModal from "@/app/(providers)/(root)/auth/sign-up/_components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ComponentProps, useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

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
      alert("로그인이 필요한 서비스입니다.");
      modal.open(<LogInModal />);
    }
  };

  return (
    <button
      onClick={handleClickInterestButton}
      className={`text-red-400 text-[24px] hover:text-red-600 ml-auto mr-2 p-2`}
      {...props}
    >
      {isClickedInterest ? <GoHeartFill /> : <GoHeart />}
    </button>
  );
}

export default InterestHeart;
