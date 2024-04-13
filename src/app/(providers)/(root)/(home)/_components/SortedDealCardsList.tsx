"use client";

import DealCardsList from "@/components/DealCardsList";
import { Deal } from "@/types/Deal.type";
import { useEffect, useState } from "react";

function SortedDealCardsList({ deals }: { deals: Deal[] }) {
  const orderBys = ["date", "views", "interest"];
  const [orderBy, setOrderBy] = useState<string>("date");
  const [dealData, setDealData] = useState<Deal[]>([]);

  useEffect(() => {
    let sortedDealData = [...deals];
    switch (orderBy) {
      case "date":
        sortedDealData.sort(
          (a, b) => Number(b.createdAt) - Number(a.createdAt)
        ); // 최신순
        break;
      case "views":
        sortedDealData.sort((a, b) => b.views - a.views); // 조회순
        break;
      case "interest":
        sortedDealData.sort((a, b) => b.interest - a.interest); // 관심순
        break;
    }
    setDealData(sortedDealData);
    console.log(orderBy);
  }, [orderBy]);

  return (
    <>
      <ul className="flex items-center justify-end pr-4">
        <li>
          <button
            onClick={() => setOrderBy(orderBys[0])}
            className="bg-red-400 px-2"
          >
            최신순
          </button>
          |
        </li>
        <li>
          <button
            onClick={() => setOrderBy(orderBys[1])}
            className="bg-red-400 px-2"
          >
            조회순
          </button>
          |
        </li>
        <li>
          <button
            onClick={() => setOrderBy(orderBys[2])}
            className="bg-red-400 px-2"
          >
            관심순
          </button>
        </li>
      </ul>
      <DealCardsList deals={dealData} />
    </>
  );
}

export default SortedDealCardsList;
