import Link from "next/link";
import { GiBearFace } from "react-icons/gi";

function HeaderLogo() {
  return (
    <h1 className="text-3xl font-black">
      <Link
        href="/"
        className="flex gap-x-1 text-primary-100 rounded-lg outline-primary-100"
      >
        <span className="text-[58px] lg:text-2xl">
          <GiBearFace />
        </span>
        <span className="hidden lg:block">베어마켓</span>
      </Link>
    </h1>
  );
}

export default HeaderLogo;
