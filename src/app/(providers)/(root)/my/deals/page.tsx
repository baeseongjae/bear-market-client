"use client";

import DealCardsList from "@/components/DealCardsList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useRequireLogIn } from "@/hooks/useRequireLogIn";
import useQueryMyDeals from "@/react-query/my/useQueryMyDeals";

function MyDealsPage() {
  const { data: data, isLoading } = useQueryMyDeals();
  const myDeals = data;
  useRequireLogIn();

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
