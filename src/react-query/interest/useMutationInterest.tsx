import API from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationInterest(dealId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: API.deals.toggleInterest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["myInterests"],
      });
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["deal", dealId],
      });
    },
  });
}
