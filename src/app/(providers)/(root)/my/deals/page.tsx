"use client";

import API from "@/api/index.api";
import DealCardsList from "@/components/DealCardsList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useQuery } from "@tanstack/react-query";

function MyDealsPage() {
  const { data: data, isLoading } = useQuery({
    queryKey: ["myDeals"],
    queryFn: API.deals.getMyDeals,
  });
  const myDeals = data;

  return (
    <Page>
      {isLoading ? (
        <p>로딩중...</p>
      ) : (
        <section>
          <Heading>내가 쓴 판매글</Heading>
          {myDeals?.length ? (
            <DealCardsList deals={myDeals || []} />
          ) : (
            <p className="flex flex-col ">게시중인 판매글이 없습니다.</p>
          )}
        </section>
      )}
    </Page>
  );
}

export default MyDealsPage;
