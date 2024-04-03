"use client";

import API from "@/api/index.api";
import DealForm from "@/components/DealForm";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  const handleSubmitCreatePost = () => {
    // 폼 제출
    // createDeal({ title, content, location, price });
    console.log(title, content);
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
