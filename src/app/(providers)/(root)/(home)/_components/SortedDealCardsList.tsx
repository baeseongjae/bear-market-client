"use client";

import DealCardsList from "@/components/DealCardsList";
import { Deal } from "@/types/Deal.type";
import { useEffect, useState } from "react";

function SortedDealCardsList({ deals }: { deals: Deal[] }) {
  const orderBys = ["최신순", "조회순", "관심순"];
  const [orderBy, setOrderBy] = useState<string>("최신순");
  const [dealData, setDealData] = useState<Deal[]>([]);

  useEffect(() => {
    let sortedDealData = [...deals];
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
    setDealData(sortedDealData);
    console.log(orderBy);
  }, [orderBy]);

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
              className={`border border-neutral-600 text-neutral-600 rounded-3xl px-3 py-2 hover:border-pink-500 hover:text-pink-500 outline-pink-500 ${
                orderBy === label ? "selected hover:text-white" : ""
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
