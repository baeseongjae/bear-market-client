"use client";

import API from "@/api/index.api";
import DealForm from "@/components/DealForm";
import { Deal } from "@/types/Deal.type";
import { createFormData } from "@/utils/createFormData.util";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";

function EditDealForm({ dealId }: { dealId: number }) {
  const queryClient = useQueryClient();

  const {
    data: dealData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["deal", dealId],
    queryFn: () => API.deals.getDeal(dealId),
  });

  const { mutateAsync: updateDeal } = useMutation<
    Deal,
    Error,
    { formData: FormData; dealId: number }
  >({
    mutationFn: ({ formData, dealId }) =>
      API.deals.updateDeal(formData, dealId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["deal", dealId],
      }); // 'deal' 쿼리 캐시 무효화
      router.push("/my/deals");
    },
  });

  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const originalDeal = dealData;

  // 마운트 될때 이전 상태값 세팅
  useEffect(() => {
    if (originalDeal) {
      setTitle(originalDeal.title);
      setContent(originalDeal.content);
      setLocation(originalDeal.location);
      setPrice(originalDeal.price);
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
      alert("판매글 수정에 성공했습니다.");
    } catch (e) {
      alert("판매글 수정에 실패했습니다.");
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
