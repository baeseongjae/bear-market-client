import API from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryMyDeals() {
  return useQuery({
    queryKey: ["myDeals"],
    queryFn: API.deals.getMyDeals,
  });
}
