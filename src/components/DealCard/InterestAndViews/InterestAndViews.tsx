"use client";

import useQueryDeal from "@/react-query/deal/useQueryDeal";
import ButtonWrapperByUser from "./ButtonWrapperByUser";

interface InterestAndViewsProps {
  views: number;
  interest: number;
  dealId: number;
  authorEmail: string;
}

function InterestAndViews({
  views,
  interest,
  dealId,
  authorEmail,
}: InterestAndViewsProps) {
  const { data: deal } = useQueryDeal({ dealId });

  return (
    <div className="flex gap-x-1 items-center text-neutral-400 text-xs md:text-sm">
      <span>관심 {deal ? deal.interest : interest}</span>
      <span>∙</span>
      <span>조회 {deal ? deal.views : views}</span>
      <ButtonWrapperByUser dealId={dealId} authorEmail={authorEmail} />
    </div>
  );
}

export default InterestAndViews;
