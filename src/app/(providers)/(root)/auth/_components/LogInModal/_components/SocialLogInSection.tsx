import Image from "next/image";

function SocialLogInSection() {
  return (
    <section className="mx-auto max-w-[390px] lg:max-w-[440px]">
      <button
        type="button"
        className="bg-[#FEE500] text-[#392020] w-full px-6 rounded-lg font-bold h-12 transition hover:-translate-y-1 active:translate-y-0"
      >
        <div className="h-full flex items-center justify-center text-sm md:text-[15px]">
          <Image
            src="/assets/sign_up_page/kakaotalk.svg"
            alt="카카오톡"
            width={24}
            height={24}
          />
          <span>카카오로 계속하기</span>
        </div>
      </button>
    </section>
  );
}

export default SocialLogInSection;
