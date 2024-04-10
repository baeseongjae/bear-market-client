"use client";

import API from "@/api/index.api";
import DealCardsList from "@/components/DealCardsList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

function MyInterestsPage() {
  const queryClient = useQueryClient();
  const { isLoggedIn } = useAuth();

  const { data: myInterests, isLoading } = useQuery({
    queryKey: ["myInterests"],
    queryFn: API.deals.getMyInterests,
    enabled: isLoggedIn,
  });
  const {
    mutate: getMyInterestedDeals,
    data: myInterestedDeals,
    isPending,
  } = useMutation({
    mutationFn: API.deals.getMyInterestedDeals,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["myInterests"] }),
  });

  const dealIds = useMemo(() => {
    return myInterests?.map((interest) => interest.dealId);
  }, [myInterests]);

  useEffect(() => {
    if (dealIds) {
      getMyInterestedDeals({ dealIds });
    }
  }, [dealIds]);

  return (
    <Page>
      {isPending ? (
        <p>로딩중...</p>
      ) : (
        <section>
          <Heading>내 관심 판매글</Heading>
          <DealCardsList deals={myInterestedDeals || []} />
        </section>
      )}
    </Page>
  );
}

export default MyInterestsPage;
