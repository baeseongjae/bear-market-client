import { SignUpDto } from "@/api/auth/auth.dto";
import API from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";

export default function useMutationSignUp() {
  return useMutation<unknown, unknown, SignUpDto>({
    mutationFn: API.auth.signUp,
  });
}
