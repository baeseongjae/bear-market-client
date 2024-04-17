"use client";

import Input from "@/components/Input";
import { useSearch } from "@/contexts/search.context";
import { IoSearchSharp } from "react-icons/io5";

function HeaderSearchBar() {
  const { search, setSearch } = useSearch();

  return (
    <div className="flex relative ml-auto">
      <Input
        label=""
        placeholder="물품이나 동네를 검색해보세요"
        className="placeholder:text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-2 top-[17px] text-slate-300 hover:text-primary-100"
      >
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default HeaderSearchBar;
