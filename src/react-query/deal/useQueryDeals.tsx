import API from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryDeals() {
  return useQuery({
    queryKey: ["deals"],
    queryFn: API.deals.getDeals,
    staleTime: Infinity,
  });
}
