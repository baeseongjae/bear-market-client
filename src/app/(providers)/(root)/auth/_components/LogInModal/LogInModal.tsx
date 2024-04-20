import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import "react-toastify/dist/ReactToastify.css";
import { HrTag, LogInForm, SocialLogInSection } from "./_components";

function LogInModal({ pathToGo }: { pathToGo?: string }) {
  return (
    <Modal className="px-5 py-[27px] lg:px-5 lg:max-w-[390px] text-neutral-90">
      <Heading className="text-center my-4 mb-8 text-xl xs:text-xl md:text-[22px] lg:text-2xl">
        로그인
      </Heading>
      <LogInForm pathToGo={pathToGo} />
      <HrTag />
      <SocialLogInSection />
    </Modal>
  );
}

export default LogInModal;
