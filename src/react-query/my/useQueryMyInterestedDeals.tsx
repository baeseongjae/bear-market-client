import API from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryMyInterestedDeals(dealIds: number[]) {
  return useQuery({
    queryKey: ["myInterestedDeals", dealIds],
    queryFn: () => API.deals.getMyInterestedDeals({ dealIds }),
    enabled: !!dealIds.length,
  });
}
