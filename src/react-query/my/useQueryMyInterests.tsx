import API from "@/api/index.api";
import { useAuth } from "@/contexts";
import { useQuery } from "@tanstack/react-query";

export default function useQueryMyInterests() {
  const { isLoggedIn } = useAuth();

  return useQuery({
    queryKey: ["myInterests"],
    queryFn: API.deals.getMyInterests,
    staleTime: Infinity,
    enabled: isLoggedIn,
  });
}
