import API from "@/api/index.api";
import { SubmitButton } from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function LogInModal() {
  const auth = useAuth();
  const modal = useModal();
  const { mutateAsync: logIn } = useMutation({ mutationFn: API.auth.logIn });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClickLogIn = async () => {
    if (!email.trim()) return alert("이메일을 입력해 주세요");
    if (!password.trim()) return alert("비밀번호를 입력해 주세요");

    try {
      await logIn({ email, password });
      auth.setIsLoggedIn(true);
      alert("로그인 성공!");
      modal.close();
    } catch (e) {
      alert("로그인 실패!");
    }
  };

  return (
    <Modal>
      <Heading className="text-center my-4 mb-8">로그인</Heading>
      <form
        className="flex flex-col gap-y-4 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <ul className="flex flex-col gap-y-3">
          <li className="flex flex-col gap-y-1">
            <Input
              label="이메일"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li className="flex flex-col gap-y-1">
            <Input
              label="패스워드"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>

        <SubmitButton onClick={handleClickLogIn}>로그인하기</SubmitButton>
      </form>
    </Modal>
  );
}

export default LogInModal;
