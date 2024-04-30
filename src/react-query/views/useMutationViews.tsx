import API from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";

export default function useMutationViews() {
  return useMutation({
    mutationFn: API.deals.updateViews,
  });
}
