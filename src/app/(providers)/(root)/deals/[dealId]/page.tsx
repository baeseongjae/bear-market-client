import API from "@/api/index.api";
import Page from "@/components/Page";
import formatPrice from "@/utils/formatPrice.util";
import Link from "next/link";

async function PostDetailPage(props: { params: { dealId: string } }) {
  const dealId = Number(props.params.dealId);
  const data = await API.deals.getDeal(dealId);
  const deal = data.deal;

  return (
    <Page>
      <section className="max-w-lg mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full h-72 bg-blue-300 rounded-xl"></div>
        </div>
        <div className="flex py-5">
          <div className="bg-violet-300 rounded-full w-12 h-12"></div>
          <div className="ml-4">
            <p>{deal.authorId}</p>
            <p>{deal.location}</p>
          </div>
        </div>
        <h6 className="pt-4 text-2xl">{deal.title}</h6>
        <p className="text-2xl font-bold pb-8">{formatPrice(deal.price)}</p>
        <p>{deal.content}</p>
        <div className="flex justify-end gap-x-8">
          <Link
            href={`./${dealId}/edit`}
            className="bg-violet-500 text-white px-3 py-2 rounded-md hover:bg-violet-400 inline-block mt-4"
          >
            글 수정하기
          </Link>
          <button className="bg-violet-500 text-white px-3 py-2 rounded-md hover:bg-violet-400 inline-block mt-4">
            글 삭제하기
          </button>
        </div>
      </section>
    </Page>
  );
}

export default PostDetailPage;
