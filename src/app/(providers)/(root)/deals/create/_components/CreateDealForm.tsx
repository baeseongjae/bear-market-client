"use client";

import API from "@/api/index.api";
import DealForm from "@/components/DealForm";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

function CreateDealForm() {
  const { mutateAsync: createDeal } = useMutation({
    mutationFn: API.deals.createDeal,
  });
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<File>();

  const handleSubmitCreatePost: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    try {
      await createDeal({ title, content, location, price });
      alert("판매글 생성에 성공했습니다.");
      router.push("/");
    } catch (e) {
      alert("판매글 생성에 실패했습니다.");
    }
  };

  return (
    <DealForm
      title={title}
      content={content}
      location={location}
      price={price}
      setTitle={setTitle}
      setContent={setContent}
      setLocation={setLocation}
      setPrice={setPrice}
      onSubmit={handleSubmitCreatePost}
      buttonLabel="판매글 작성하기"
    />
  );
}

export default CreateDealForm;
