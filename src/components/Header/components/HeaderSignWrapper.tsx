import Link from "next/link";

function HeaderSignWrapper() {
  return (
    <ul className="flex items-center ml-auto gap-x-4">
      <li>
        <Link href="/auth/sign-up">회원가입</Link>
      </li>
      <li>
        <button>로그인</button>
      </li>
    </ul>
  );
}

export default HeaderSignWrapper;
