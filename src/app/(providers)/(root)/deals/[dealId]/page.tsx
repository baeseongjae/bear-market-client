import API from "@/api/index.api";
import Page from "@/components/Page";
import formatPrice from "@/utils/formatPrice.util";
import { useTimeDiff } from "@/utils/useTimeDiff";
import Image from "next/image";
import InterestAndViewsInDetail from "./_components/InterestAndViewsInDetail";

async function DealDetailPage(props: { params: { dealId: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "";
  const dealId = Number(props.params.dealId);
  const deal = await API.deals.getDeal(dealId);
  const imageUrl = `${baseUrl}${deal.imgSrc}`;

  return (
    <Page>
      <section className="max-w-lg mx-auto mb-10">
        <h2 className="a11y-hidden">판매글 상세 페이지</h2>
        <div className="flex flex-col items-center">
          <div
            className={`w-full h-72 rounded-xl flex justify-center border border-neutral-300 shadow-xl ${
              deal.imgSrc ? "bg-white" : "bg-primary-100"
            }`}
          >
            {deal.imgSrc && (
              <Image
                src={`${imageUrl}`}
                width={300}
                height={300}
                alt={deal.title}
                className="h-full rounded-xl"
              />
            )}
          </div>
        </div>
        <div className="flex py-5">
          <div className="bg-violet-300 rounded-full w-12 h-12"></div>
          <div className="ml-4">
            <p>{deal.authorEmail}</p>
            <p>{deal.location}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <h6 className="pt-4 text-2xl font-bold">{deal.title}</h6>
          <p className="text-xs text-neutral-400">
            {useTimeDiff(deal.createdAt)}
          </p>
          <p className="text-lg text-primary-100 font-bold pb-6">
            {formatPrice(deal.price)}
          </p>
          <p>{deal.content}</p>
        </div>
        <InterestAndViewsInDetail
          views={deal.views}
          interest={deal.interest}
          dealId={dealId}
          authorEmail={deal.authorEmail}
        />
      </section>
    </Page>
  );
}

export default DealDetailPage;
