"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const handleClickSignUp = () => {};

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
      <Button onClick={handleClickSignUp} label="회원가입하기" />
    </form>
  );
}

export default SignUpForm;
