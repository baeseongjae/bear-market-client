import Heading from "@/components/Heading";
import Page from "@/components/Page";
import HrTag from "../_components/LogInModal/_components/HrTag";
import SocialLogInSection from "../_components/LogInModal/_components/SocialLogInSection";
import SignUpForm from "./_components/SignUpForm";

function SignUpPage() {
  return (
    <Page>
      <section className="max-w-[390px] lg:max-w-[440px] mx-auto my-12 rounded-lg">
        <Heading className="mb-20">회원가입</Heading>
        <SignUpForm />
        <HrTag />
        <SocialLogInSection />
      </section>
    </Page>
  );
}

export default SignUpPage;
