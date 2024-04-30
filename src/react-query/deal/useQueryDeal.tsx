import API from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryDeal({ dealId }: { dealId: number }) {
  return useQuery({
    queryKey: ["deal", dealId],
    queryFn: () => API.deals.getDeal(dealId),
  });
}
