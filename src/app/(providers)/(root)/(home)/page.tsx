import API from "@/api/index.api";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";

async function HomePage() {
  const data = await API.deals.getDeals();
  const deals = data?.deals;

  return (
    <Page>
      <section>
        <h2>전체 판매글</h2>
        <ProductCardsList deals={deals} />
      </section>
    </Page>
  );
}

export default HomePage;
