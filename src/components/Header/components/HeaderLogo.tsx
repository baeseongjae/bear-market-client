import Link from "next/link";

function HeaderLogo() {
  return (
    <h1 className="text-3xl font-black">
      <Link href="/">중고마켓</Link>
    </h1>
  );
}

export default HeaderLogo;
