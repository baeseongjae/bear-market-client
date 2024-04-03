"use client";

import DealForm from "@/components/DealForm";
import { useState } from "react";

function EditDealForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<File>();

  const handleSubmitCreatePost = () => {
    // 폼 제출
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
      buttonLabel="판매글 수정하기"
    />
  );
}

export default EditDealForm;
