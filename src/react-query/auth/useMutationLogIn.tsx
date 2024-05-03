import { LogInDto } from "@/api/auth/auth.dto";
import API from "@/api/index.api";
import { useAuth, useModal, useUser } from "@/contexts";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function useMutationLogIn(email: string, pathToGo?: string) {
  const auth = useAuth();
  const modal = useModal();
  const router = useRouter();
  const user = useUser();

  return useMutation<string, Error, LogInDto>({
    mutationFn: API.auth.logIn,
    onSuccess: (data) => {
      auth.setIsLoggedIn(true);
      localStorage.setItem("accessToken", data);
      user.setEmail(email);
      localStorage.setItem("userEmail", email);
      toast.success("로그인 성공!");
      modal.close();
      if (pathToGo) {
        router.push(`${pathToGo}`);
      }
    },
    onError: (error) => {
      toast.error(`로그인 실패: ${error.message}`);
    },
  });
}
