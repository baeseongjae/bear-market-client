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
  const [image, setImage] = useState<File | null>(null);

  const handleSubmitCreatePost: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("location", location);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }
      await createDeal(formData);
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
      image={image}
      setTitle={setTitle}
      setContent={setContent}
      setLocation={setLocation}
      setPrice={setPrice}
      setImage={setImage}
      onSubmit={handleSubmitCreatePost}
      buttonLabel="판매글 작성하기"
    />
  );
}

export default CreateDealForm;
