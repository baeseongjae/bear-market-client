import Link from "next/link";

function HeaderMenu() {
  return (
    <nav className="ml-20">
      <ul className="flex items-center gap-x-4">
        <li>
          <Link href="/">구입하기</Link>
        </li>
        <li>
          <Link href="/deals/create">판매하기</Link>
        </li>
        <li>
          <Link href="/my/deals">내 판매글</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
