import API from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import SortedDealCardsList from "./_components/SortedDealCardsList";

async function HomePage() {
  const deals = await API.deals.getDeals();

  return (
    <Page>
      <section>
        <Heading className="mb-3">전체 판매글</Heading>
        {/* <p className="text-xl">테스트용 이메일: bae@naver.com</p> */}
        {/* <p className="text-xl">테스트용 패스워드: bae123</p> */}
        <SortedDealCardsList deals={deals} />
      </section>
    </Page>
  );
}
export const revalidate = 5; // 5초에 한번씩 업데이트

export default HomePage;
