import { SubmitButton, VisibleToggleButton } from "@/components/Button";
import AuthInput from "@/components/Input/AuthInput";
import { useModal } from "@/contexts";
import useMutationLogIn from "@/react-query/auth/useMutationLogIn";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

function LogInForm({ pathToGo }: { pathToGo?: string }) {
  const modal = useModal();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { mutate: logIn, isPending } = useMutationLogIn(email, pathToGo);

  const handleClickLogIn = () => {
    if (!email.trim()) return toast.error("이메일을 입력해 주세요");
    if (!password.trim()) return toast.error("비밀번호를 입력해 주세요");

    // useMutationLogIn에서 로그인 관련 사이드 이펙트 일괄 관리
    logIn({ email, password });
  };

  return (
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
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <VisibleToggleButton
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
          />
        </li>
      </ul>

      <SubmitButton
        onClick={handleClickLogIn}
        className="text-sm md:text-[15px] mt-5"
        disabled={isPending}
      >
        로그인하기
      </SubmitButton>
      <Link
        href="/auth/sign-up"
        onClick={() => modal.close()}
        className="text-primary-100 text-[11px] md:text-[13px] text-center outline-none rounded-md focus:border focus:border-primary-100"
      >
        아직 회원이 아니신가요?
        <span className="ml-1 md:ml-2 underline font-bold hover:text-primary-100/50">
          가입하기
        </span>
      </Link>
    </form>
  );
}

export default LogInForm;
