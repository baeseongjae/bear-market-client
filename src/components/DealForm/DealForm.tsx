import React, { useEffect, useRef, useState } from "react";
import { FaFileImage } from "react-icons/fa";
import { SubmitButton } from "../Button";
import Input from "../Input";
import ImagePreview from "./ImagePreview/ImagePreview";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface DealFormProps {
  title: string;
  content: string;
  location: string;
  price: string;
  image: File | null;
  prevImageUrl: string | null;
  setTitle: SetState<string>;
  setContent: SetState<string>;
  setLocation: SetState<string>;
  setPrice: SetState<string>;
  setImage: SetState<File | null>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel: string;
}

function DealForm({
  title,
  content,
  location,
  price,
  image,
  prevImageUrl,
  setTitle,
  setContent,
  setLocation,
  setPrice,
  setImage,
  onSubmit,
  buttonLabel,
}: DealFormProps) {
  const [imageUrl, setImageUrl] = useState<string>(""); // 이미지 프리뷰
  const fileInputRef = useRef<HTMLInputElement>(null);
  const nextServerUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  // 기존 판매글에 저장된 이미지 세팅
  useEffect(() => {
    if (prevImageUrl) {
      setImageUrl(`${nextServerUrl}${prevImageUrl}`);
    }
  }, [prevImageUrl]);

  const handleClickCameraIcon = () => {
    fileInputRef.current?.click();
  };

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleClickRemoveImage = () => {
    URL.revokeObjectURL(imageUrl as string); //메모리 누수 방지를 위해 생성된 url 해제
    setImage(null);
    setImageUrl("");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col pb-12">
      <ul className="flex flex-col gap-y-4">
        <li className="flex flex-col gap-y-2">
          <label htmlFor="image">이미지 업로드</label>
          <input
            ref={fileInputRef}
            type="file"
            id="image"
            multiple
            accept="image/*" // 이미지 파일만 허용하도록 설정
            onChange={handleSelectImage}
            className="hidden"
          />
          <div className="relative">
            <div className={`flex items-center h-28 border-2 p-2 rounded-xl`}>
              <button
                type="button"
                onClick={handleClickCameraIcon}
                className="p-2 h-full w-1/5 text-4xl flex items-center justify-center border border-dashed border-slate-300 rounded-xl mr-2"
              >
                <FaFileImage />
              </button>
              {imageUrl ? (
                // 이미지 미리보기
                <ImagePreview
                  imageUrl={imageUrl}
                  handleClickRemoveImage={handleClickRemoveImage}
                  fileName={image?.name}
                />
              ) : (
                <p className="ml-10">이미지를 업로드해주세요.</p>
              )}
            </div>
          </div>
        </li>
        <li className="flex flex-col gap-y-2">
          <Input
            label="글 제목"
            type="text"
            value={title}
            placeholder="제목을 입력해주세요. (최소 3글자 이상)"
            onChange={(e) => setTitle(e.target.value)}
          />
        </li>
        <li className="flex flex-col gap-y-2">
          <label htmlFor="">글 내용</label>
          <textarea
            name="content"
            cols={30}
            rows={10}
            value={content}
            placeholder="내용을 입력해주세요..."
            onChange={(e) => setContent(e.target.value)}
            className="border border-slate-300 focus:border-primary-100 outline-none transition rounded-lg pl-4 py-3"
          />
        </li>
        <li className="flex flex-col gap-y-2">
          <Input
            label="직거래 위치"
            type="text"
            value={location}
            placeholder="시/구/동 순서로 입력해주세요.  예) 서울시 강남구 신사동"
            onChange={(e) => setLocation(e.target.value)}
          />
        </li>
        <li className="flex flex-col gap-y-2">
          <Input
            label="판매 가격"
            type="text"
            value={price}
            placeholder="가격을 입력해주세요.  예) 5000"
            onChange={(e) => setPrice(e.target.value)}
          />
        </li>
      </ul>
      <SubmitButton type="submit">{buttonLabel}</SubmitButton>
    </form>
  );
}

export default DealForm;
