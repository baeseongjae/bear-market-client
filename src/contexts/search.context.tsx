"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type SearchContextValue = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const initialSearchValue = {
  search: "",
  setSearch: () => {},
};

const SearchContext = createContext<SearchContextValue>(initialSearchValue);

export const useSearch = () => useContext(SearchContext);

export function SearchProvider({ children }: PropsWithChildren) {
  const [search, setSearch] = useState("");

  const value = {
    search,
    setSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
