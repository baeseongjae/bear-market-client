import API from "@/api/index.api";
import { QueryClient, useMutation } from "@tanstack/react-query";

export default function useMutationInterest() {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: API.deals.toggleInterest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["myInterests"],
      });
    },
  });
}
