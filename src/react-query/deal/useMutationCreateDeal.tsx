import API from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useMutationCreateDeal() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: API.deals.createDeal,
    onSuccess: () => {
      router.push("/my/deals");
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["myDeals"],
      });
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["deals"],
      });
    },
  });
}
