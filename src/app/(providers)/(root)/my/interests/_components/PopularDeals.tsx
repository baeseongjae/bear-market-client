"use client";

import API from "@/api/index.api";
import DealCardsList from "@/components/DealCardsList";
import { Deal } from "@/types/Deal.type";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function PopularDeals() {
  const { data: data, isLoading } = useQuery({
    queryKey: ["deals"],
    queryFn: API.deals.getDeals,
  });
  const [sortedDeals, setSortedDeals] = useState<Deal[]>([]);

  useEffect(() => {
    if (data) {
      const sortedData = [...data].sort(
        (a, b) => b.views + b.interest - (a.views + a.interest)
      );
      setSortedDeals(sortedData);
    }
  }, [data]);

  return <DealCardsList deals={sortedDeals} />;
}

export default PopularDeals;
