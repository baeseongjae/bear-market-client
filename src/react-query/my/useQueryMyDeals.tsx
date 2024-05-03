import API from "@/api/index.api";
import { useAuth } from "@/contexts";
import { useQuery } from "@tanstack/react-query";

export default function useQueryMyDeals() {
  const { isLoggedIn } = useAuth();

  return useQuery({
    queryKey: ["myDeals"],
    queryFn: API.deals.getMyDeals,
    enabled: isLoggedIn,
  });
}
