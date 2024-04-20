"use client";

import Input from "@/components/Input";
import { useSearch } from "@/contexts";
import { IoSearchSharp } from "react-icons/io5";

function HeaderSearchBar() {
  const { search, setSearch } = useSearch();

  return (
    <div className="flex relative ml-auto">
      <Input
        label=""
        placeholder="물품이나 동네를 검색해보세요"
        className="placeholder:text-sm hidden md:inline-block h-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="inline-block md:absolute md:right-2 md:top-4 text-3xl md:text-xl text-slate-300 hover:text-primary-100"
      >
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default HeaderSearchBar;
