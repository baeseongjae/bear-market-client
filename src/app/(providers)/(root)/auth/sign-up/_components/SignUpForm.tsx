"use client";

import API from "@/api/index.api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
      alert("회원가입에 성공하였습니다!");
    } catch (e) {
      alert("회원가입에 실패하였습니다."); // alert창 toastify로 바꿀예정
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
        <li className="flex flex-col">
          <Input
            label="이메일"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="market@gmail.com"
          />
        </li>
        <li className="flex flex-col">
          <Input
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="market123!@"
          />
        </li>
        <li className="flex flex-col">
          <Input
            label="비밀번호 확인"
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="market123!@"
          />
        </li>
      </ul>
      <Button onClick={handleClickSignUp}>회원가입하기</Button>
    </form>
  );
}

export default SignUpForm;
