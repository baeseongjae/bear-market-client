import HeaderLogo from "./components/HeaderLogo";
import HeaderMenu from "./components/HeaderMenu";
import HeaderSignWrapper from "./components/HeaderSignWrapper";

function Header() {
  return (
    <header className="bg-white border-b shadow-xl px-8 sticky z-10 top-0">
      <div className="max-w-screen-lg flex items-center mx-auto h-16">
        <HeaderLogo />
        <HeaderMenu />
        <HeaderSignWrapper />
      </div>
    </header>
  );
}

export default Header;
