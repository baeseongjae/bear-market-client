import Heading from "@/components/Heading";
import Page from "@/components/Page";
import CreatePostForm from "./_components/CreatePostForm";

function CreateDealPage() {
  return (
    <Page>
      <section className="max-w-lg mx-auto">
        <Heading>판매글 작성하기</Heading>
        <CreatePostForm />
      </section>
    </Page>
  );
}

export default CreateDealPage;
