import API from "@/api/index.api";
import DealCardsList from "@/components/DealCardsList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";

async function HomePage() {
  const data = await API.deals.getDeals();
  const deals = data?.deals;

  return (
    <Page>
      <section>
        <Heading>전체 판매글</Heading>
        <DealCardsList deals={deals} />
      </section>
    </Page>
  );
}
export const revalidate = 5; // 5초에 한번씩 업데이트

export default HomePage;
