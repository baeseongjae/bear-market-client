import Heading from "@/components/Heading";
import Page from "@/components/Page";
import EditPostForm from "./_components/EditPostForm";

function EditDealPage() {
  return (
    <Page>
      <section className="max-w-lg mx-auto">
        <Heading>판매글 수정하기</Heading>
        <EditPostForm />
      </section>
    </Page>
  );
}

export default EditDealPage;
