import API from "@/api/index.api";
import Page from "@/components/Page";
import formatPrice from "@/utils/formatPrice.util";
import ButtonWrapperInDealsDetail from "./_components/ButtonWrapperInDealsDetail";

async function DealDetailPage(props: { params: { dealId: string } }) {
  const dealId = Number(props.params.dealId);
  const data = await API.deals.getDeal(dealId);
  const deal = data.deal;
  console.log(deal);

  return (
    <Page>
      <section className="max-w-lg mx-auto">
        <h2 className="a11y-hidden">판매글 상세 페이지</h2>
        <div className="flex flex-col items-center">
          <div className="w-full h-72 bg-blue-300 rounded-xl"></div>
        </div>
        <div className="flex py-5">
          <div className="bg-violet-300 rounded-full w-12 h-12"></div>
          <div className="ml-4">
            <p>{deal.authorEmail}</p>
            <p>{deal.location}</p>
          </div>
        </div>
        <h6 className="pt-4 text-2xl">{deal.title}</h6>
        <p className="text-2xl font-bold pb-8">{formatPrice(deal.price)}</p>
        <p>{deal.content}</p>
        <ButtonWrapperInDealsDetail
          dealId={dealId}
          authorEmail={deal.authorEmail}
        />
      </section>
    </Page>
  );
}

export default DealDetailPage;
