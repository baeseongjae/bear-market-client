"use client";

import useQueryDeal from "@/react-query/deal/useQueryDeal";
import ButtonWrapperInDealsDetail from "./ButtonWrapperInDealsDetail";

interface InterestAndViewsInDetailProps {
  views: number;
  interest: number;
  dealId: number;
  authorEmail: string;
}

function InterestAndViewsInDetail({
  views,
  interest,
  dealId,
  authorEmail,
}: InterestAndViewsInDetailProps) {
  const { data: deal } = useQueryDeal({ dealId });

  return (
    <div className="flex justify-between items-center text-neutral-400 text-xs md:text-sm pb-10">
      <div className="flex gap-x-1 items-center">
        <span>관심 {deal ? deal.interest : interest}</span>
        <span>∙</span>
        <span>조회 {deal ? deal.views : views}</span>
      </div>
      <ButtonWrapperInDealsDetail dealId={dealId} authorEmail={authorEmail} />
    </div>
  );
}

export default InterestAndViewsInDetail;
