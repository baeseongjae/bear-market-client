import Heading from "@/components/Heading";
import Page from "@/components/Page";
import EditDealForm from "./_components/EditDealForm";

function EditDealPage() {
  return (
    <Page>
      <section className="max-w-lg mx-auto">
        <Heading>판매글 수정하기</Heading>
        <EditDealForm />
      </section>
    </Page>
  );
}

export default EditDealPage;
