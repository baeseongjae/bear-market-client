"use client";

import API from "@/api/index.api";
import { SubmitButton } from "@/components/Button";
import AuthInput from "@/components/Input/AuthInput";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function SignUpForm() {
  const auth = useAuth();
  const router = useRouter();
  const { mutateAsync: signUp } = useMutation({
    mutationFn: API.auth.signUp,
  });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const handleClickSignUp = async () => {
    if (!email.trim()) return alert("이메일을 입력해 주세요.");
    if (!password.trim()) return alert("비밀번호를 입력해 주세요");
    if (!passwordCheck.trim()) return alert("비밀번호 확인을 입력해 주세요");
    if (password.trim() !== passwordCheck.trim())
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");

    try {
      await signUp({ email, password });
      auth.setIsLoggedIn(true); // isLoggedIn 전역상태를 true로 변경
      toast.success("회원가입에 성공하였습니다!");
    } catch (e) {
      toast.error("회원가입에 실패하였습니다."); // alert창 toastify로 바꿀예정
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.push("/");
    }
  }, [auth.isLoggedIn, router]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-y-4"
    >
      <ul className="flex flex-col gap-y-4">
        <li className="flex flex-col relative">
          <AuthInput
            label="이메일"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li className="flex flex-col relative">
          <AuthInput
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </li>
        <li className="flex flex-col relative">
          <AuthInput
            label="비밀번호 확인"
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </li>
      </ul>
      <SubmitButton
        onClick={handleClickSignUp}
        className="text-sm md:text-[15px] mt-5"
      >
        가입하기
      </SubmitButton>
    </form>
  );
}

export default SignUpForm;
