import API from "@/api/index.api";
import { Deal } from "@/types/Deal.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useMutationUpdateDeal({ dealId }: { dealId: number }) {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation<Deal, Error, { formData: FormData; dealId: number }>({
    mutationFn: ({ formData, dealId }) =>
      API.deals.updateDeal(formData, dealId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["deal", dealId],
      }); // 'deal' 쿼리 캐시 무효화
      router.push("/my/deals");
    },
  });
}
