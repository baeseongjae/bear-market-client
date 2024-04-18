import API from "@/api/index.api";
import { SubmitButton } from "@/components/Button";
import Heading from "@/components/Heading";
import AuthInput from "@/components/Input/AuthInput";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import { useUser } from "@/contexts/user.context";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogInModal({ pathToGo }: { pathToGo?: string }) {
  const auth = useAuth();
  const user = useUser();
  const modal = useModal();
  const router = useRouter();
  const { mutateAsync: logIn } = useMutation({ mutationFn: API.auth.logIn });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClickLogIn = async () => {
    if (!email.trim()) return toast.error("이메일을 입력해 주세요");
    if (!password.trim()) return toast.error("비밀번호를 입력해 주세요");

    try {
      await logIn({ email, password });
      auth.setIsLoggedIn(true);
      user.setEmail(email);
      toast.success("로그인 성공!");
      if (pathToGo) {
        router.push(`${pathToGo}`);
      }
      modal.close();
    } catch (e) {
      toast.error("로그인 실패!");
    }
  };

  return (
    <Modal className="px-5 py-[27px] lg:px-5 lg:max-w-[390px] text-neutral-90">
      <Heading className="text-center my-4 mb-8 md:text-2xl">로그인</Heading>
      <form
        className="flex flex-col gap-y-4 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <ul className="flex flex-col gap-y-3">
          <li className="flex flex-col gap-y-1 relative">
            <AuthInput
              label="이메일"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li className="flex flex-col gap-y-1 relative">
            <AuthInput
              label="비밀번호"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>

        <SubmitButton onClick={handleClickLogIn}>로그인하기</SubmitButton>
        <Link
          href="/auth/sign-up"
          onClick={() => modal.close()}
          className="text-primary-100 text-[11px] text-center"
        >
          아직 회원이 아니신가요?{" "}
          <span className="underline font-bold hover:text-primary-100/50">
            가입하기
          </span>
        </Link>
      </form>
    </Modal>
  );
}

export default LogInModal;
