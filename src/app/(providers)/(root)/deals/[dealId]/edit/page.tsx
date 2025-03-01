import Heading from "@/components/Heading";
import Page from "@/components/Page";
import EditDealForm from "./_components/EditDealForm";

function EditDealPage(props: { params: { dealId: string } }) {
  const dealId = Number(props.params.dealId);

  return (
    <Page>
      <section className="max-w-lg mx-auto">
        <Heading>판매글 수정하기</Heading>
        <EditDealForm dealId={dealId} />
      </section>
    </Page>
  );
}

export default EditDealPage;
