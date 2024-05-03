"use client";

import DealCardsList from "@/components/DealCardsList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useAuth } from "@/contexts";
import useQueryMyDeals from "@/react-query/my/useQueryMyDeals";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

function MyDealsPage() {
  const { data: data, isLoading } = useQueryMyDeals();
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const myDeals = data;

  useEffect(() => {
    if (!isLoggedIn) {
      toast.info("로그인이 필요한 페이지입니다.");
      router.push("/");
    }
  }, [isLoggedIn]);

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
