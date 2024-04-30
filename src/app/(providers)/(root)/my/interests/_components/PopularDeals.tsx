"use client";

import DealCardsList from "@/components/DealCardsList";
import { useSearch } from "@/contexts";
import useQueryDeals from "@/react-query/deal/useQueryDeals";
import { Deal } from "@/types/Deal.type";
import { useEffect, useState } from "react";

function PopularDeals() {
  const { data: data } = useQueryDeals();
  const [sortedDeals, setSortedDeals] = useState<Deal[]>([]);
  const { search } = useSearch();

  useEffect(() => {
    let sortedData: Deal[] = [];

    // *1. 인기순(조회+관심) 정렬
    if (data) {
      sortedData = [...data].sort(
        (a, b) => b.views + b.interest - (a.views + a.interest)
      );
    }

    // *2. 검색어 필터링
    let filteredSortedDealData = search
      ? sortedData.filter((deal) =>
          deal.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
      : sortedData;

    setSortedDeals(filteredSortedDealData);
  }, [data, search]);

  return <DealCardsList deals={sortedDeals} />;
}

export default PopularDeals;
