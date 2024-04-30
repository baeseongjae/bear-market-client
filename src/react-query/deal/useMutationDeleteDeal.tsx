import API from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useMutationDeleteDeal() {
  const router = useRouter();

  return useMutation({
    mutationFn: API.deals.deleteDeal,
    onSuccess: () => {
      router.push("/my/deals");
    },
  });
}
