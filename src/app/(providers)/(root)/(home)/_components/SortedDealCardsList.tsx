"use client";

import DealCardsList from "@/components/DealCardsList";
import { useSearch } from "@/contexts";
import { Deal } from "@/types/Deal.type";
import { useEffect, useMemo, useState } from "react";

function SortedDealCardsList({ deals }: { deals: Deal[] }) {
  const orderBys = ["최신순", "조회순", "관심순"];
  const [orderBy, setOrderBy] = useState<string>("최신순");
  const [dealData, setDealData] = useState<Deal[]>(deals);
  const { search } = useSearch();
  // const { data: deals } = useQueryDeals();

  const sortedAndFilteredDeals = useMemo(() => {
    // *0. props데이터 복사본 생성
    let sortedDealData: Deal[] = deals ? [...deals] : [];

    // *1. 정렬 로직
    switch (orderBy) {
      case "최신순":
        sortedDealData.sort(
          (a, b) => Number(b.createdAt) - Number(a.createdAt)
        ); // 최신순
        break;
      case "조회순":
        sortedDealData.sort((a, b) => b.views - a.views); // 조회순
        break;
      case "관심순":
        sortedDealData.sort((a, b) => b.interest - a.interest); // 관심순
        break;
    }

    // *2. 검색어 기반 필터링
    return search
      ? sortedDealData.filter((deal) =>
          deal.title.toLowerCase().includes(search.toLowerCase())
        )
      : sortedDealData;
  }, [orderBy, search, deals]);

  useEffect(() => {
    setDealData(sortedAndFilteredDeals);
  }, [sortedAndFilteredDeals]);

  const handleClickSortButton: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    const target = e.currentTarget.textContent as string;
    setOrderBy(() => target);
  };

  return (
    <>
      <ul className="flex items-center justify-end pr-4 gap-x-2 mb-3">
        {orderBys.map((label) => (
          <li key={label}>
            <button
              onClick={handleClickSortButton}
              className={`border shadow-md border-slate-300 text-neutral-400 rounded-3xl px-3 py-2 hover:ease-in duration-200 hover:border-primary-100 hover:text-primary-100 outline-primary-100 ${
                orderBy === label ? "selected hover:selected" : ""
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <DealCardsList deals={dealData} />
    </>
  );
}

export default SortedDealCardsList;
