import API from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import PostCardsList from "@/components/PostCardsList";

async function HomePage() {
  const data = await API.deals.getDeals();
  const deals = data?.deals;

  return (
    <Page>
      <section>
        <Heading>전체 판매글</Heading>
        <PostCardsList deals={deals} />
      </section>
    </Page>
  );
}

export default HomePage;
