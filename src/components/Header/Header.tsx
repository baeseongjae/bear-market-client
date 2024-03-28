import Link from "next/link";

function Header() {
  return (
    <header className="bg-white border-b shadow-xl px-8">
      <div className="max-w-screen-lg flex items-center mx-auto h-16">
        <h1 className="text-3xl font-black">
          <Link href="/">중고마켓</Link>
        </h1>
        <nav className="ml-20">
          <ul className="flex items-center gap-x-4">
            <li>
              <Link href="/">구입하기</Link>
            </li>
            <li>
              <Link href="/">판매하기</Link>
            </li>
            <li>
              <Link href="/">내 판매글</Link>
            </li>
          </ul>
        </nav>
        <ul className="flex items-center ml-auto gap-x-4">
          <li>
            <button>회원가입</button>
          </li>
          <li>
            <button>로그인</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
