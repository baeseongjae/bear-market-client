import Heading from "@/components/Heading";
import Page from "@/components/Page";
import CreateDealForm from "./_components/CreateDealForm";

function CreateDealPage() {
  return (
    <Page>
      <section className="max-w-lg mx-auto">
        <Heading>판매글 작성하기</Heading>
        <CreateDealForm />
      </section>
    </Page>
  );
}

export default CreateDealPage;
