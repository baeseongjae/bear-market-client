"use client";

import DealForm from "@/components/DealForm";
import useMutationUpdateDeal from "@/react-query/deal/useMutationUpdateDeal";
import useQueryDeal from "@/react-query/deal/useQueryDeal";
import { createFormData } from "@/utils/createFormData.util";
import { FormEventHandler, useEffect, useState } from "react";
import { toast } from "react-toastify";

function EditDealForm({ dealId }: { dealId: number }) {
  const { data: dealData, isLoading, isError } = useQueryDeal({ dealId });
  const { mutateAsync: updateDeal } = useMutationUpdateDeal({ dealId });

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>("");

  const originalDeal = dealData;

  // 마운트 될때 이전 상태값 세팅
  useEffect(() => {
    if (originalDeal) {
      setTitle(originalDeal.title);
      setContent(originalDeal.content);
      setLocation(originalDeal.location);
      setPrice(originalDeal.price);
      if (originalDeal.imgSrc) {
        setImageUrl(originalDeal.imgSrc);
      }
    }
  }, [originalDeal]);

  const handleSubmitUpdateDeal: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    // 폼 제출
    event.preventDefault();

    const updateDealFormData = { title, content, location, price, image };
    try {
      const formData = createFormData(updateDealFormData);
      await updateDeal({ formData, dealId });
      toast.success("판매글 수정에 성공했습니다.");
    } catch (e) {
      toast.error("판매글 수정에 실패했습니다.");
    }
  };

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>Error loading deal</div>;

  return (
    <DealForm
      title={title}
      content={content}
      location={location}
      price={price}
      image={image}
      prevImageUrl={imageUrl}
      setTitle={setTitle}
      setContent={setContent}
      setLocation={setLocation}
      setPrice={setPrice}
      setImage={setImage}
      onSubmit={handleSubmitUpdateDeal}
      buttonLabel="판매글 수정하기"
    />
  );
}

export default EditDealForm;
