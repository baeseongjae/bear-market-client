import React, { useRef, useState } from "react";
import { SubmitButton } from "../Button";
import Input from "../Input";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface DealFormProps {
  title: string;
  content: string;
  location: string;
  price: string;
  image: File | null;
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
  setTitle,
  setContent,
  setLocation,
  setPrice,
  setImage,
  onSubmit,
  buttonLabel,
}: DealFormProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
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
  return (
    <form onSubmit={onSubmit} className="flex flex-col pb-12">
      <ul className="flex flex-col gap-y-4">
        <li className="flex flex-col">
          <Input
            label="글 제목"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </li>
        <li className="flex flex-col">
          <label htmlFor="">글 내용</label>
          <textarea
            name="content"
            cols={30}
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-slate-300 focus:border-violet-500 outline-none transition rounded-lg pl-4 py-3"
          />
        </li>
        <li className="flex flex-col">
          <Input
            label="직거래 위치"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </li>
        <li className="flex flex-col">
          <Input
            label="판매 가격"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </li>
        <li className="flex flex-col">
          <label htmlFor="image">이미지</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
          />
          {/* <div className="w-32 h-32 mx-auto relative">
            <div className="w-full h-full rounded-full bg-neutral-30 mx-auto flex relative overflow-hidden">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="이미지"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <button type="button" onClick={handleClickCameraIcon}>
              <Image
                src="/assets/create_deal_page/camera.svg"
                alt="카메라"
                width={36}
                height={36}
                className="absolute bottom-0 right-2"
              />
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleSelectImage}
                className="a11y-hidden"
              />
            </button>
          </div> */}
        </li>
      </ul>
      <SubmitButton type="submit">{buttonLabel}</SubmitButton>
    </form>
  );
}

export default DealForm;
