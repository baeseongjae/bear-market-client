import API from "@/api/index.api";
import { QueryClient, useMutation } from "@tanstack/react-query";

// 함수이름이 get인데 왜 mutation으로 했엇는지 나중에 체크하기.
export default function useMutationMyInterestedDeals() {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: API.deals.getMyInterestedDeals,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["myInterests"] }),
  });
}
