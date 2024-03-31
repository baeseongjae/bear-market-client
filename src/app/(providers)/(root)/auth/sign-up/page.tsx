"use client";

import Button from "@/components/Button/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const handleClickSignUp = () => {};

  return (
    <Page>
      <section className="max-w-lg mx-auto my-12 rounded-lg">
        <Heading>회원가입</Heading>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-y-4"
        >
          <ul className="flex flex-col gap-y-4">
            <li className="flex flex-col">
              <label htmlFor="email">이메일</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="market@gmail.com"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="password">비밀번호</label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="passwordCheck">비밀번호 확인</label>
              <Input
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </li>
          </ul>
          <Button onClick={handleClickSignUp} label="회원가입하기" />
        </form>
      </section>
    </Page>
  );
}

export default SignUpPage;
