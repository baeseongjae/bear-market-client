import API from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import SortedDealCardsList from "./_components/SortedDealCardsList";

async function HomePage() {
  const deals = await API.deals.getDeals();

  return (
    <Page>
      <section>
        <Heading>전체 판매글</Heading>
        <SortedDealCardsList deals={deals} />
      </section>
    </Page>
  );
}
export const revalidate = 5; // 5초에 한번씩 업데이트

export default HomePage;
