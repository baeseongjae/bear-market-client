import API from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationViews(dealId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: API.deals.updateViews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["deal", dealId],
      });
    },
  });
}
