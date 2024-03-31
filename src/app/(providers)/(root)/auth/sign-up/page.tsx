import Heading from "@/components/Heading";
import Page from "@/components/Page";
import SignUpForm from "./_components/SignUpForm";

function SignUpPage() {
  return (
    <Page>
      <section className="max-w-lg mx-auto my-12 rounded-lg">
        <Heading>회원가입</Heading>
        <SignUpForm />
      </section>
    </Page>
  );
}

export default SignUpPage;
