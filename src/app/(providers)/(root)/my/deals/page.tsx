"use client";

import API from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import PostCardsList from "@/components/PostCardsList";
import { useQuery } from "@tanstack/react-query";

function MyDealsPage() {
  const { data: data } = useQuery({
    queryKey: ["myDeals"],
    queryFn: API.deals.getMyDeals,
  });
  const myDeals = data?.myDeals;

  return (
    <Page>
      <section>
        <Heading>내가 쓴 판매글</Heading>
        <PostCardsList deals={myDeals} />
      </section>
    </Page>
  );
}

export default MyDealsPage;
