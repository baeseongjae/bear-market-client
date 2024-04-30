import { LogInDto } from "@/api/auth/auth.dto";
import API from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";

export default function useMutationLogIn() {
  return useMutation<unknown, unknown, LogInDto>({
    mutationFn: API.auth.logIn,
  });
}
