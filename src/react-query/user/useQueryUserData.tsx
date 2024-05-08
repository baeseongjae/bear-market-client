import API from "@/api/index.api";
import { useAuth } from "@/contexts";
import { useQuery } from "@tanstack/react-query";

export default function useQueryUserData() {
  const { isLoggedIn } = useAuth();

  return useQuery({
    queryKey: ["user"],
    queryFn: API.auth.getUserEmail,
    staleTime: Infinity,
    enabled: isLoggedIn,
  });
}
