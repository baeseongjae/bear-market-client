import React from "react";
import Input from "../Input";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface PostFormProps {
  title: string;
  content: string;
  location: string;
  price: string;
  setTitle: SetState<string>;
  setContent: SetState<string>;
  setLocation: SetState<string>;
  setPrice: SetState<string>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel: string;
}

function PostForm({
  title,
  content,
  location,
  price,
  setTitle,
  setContent,
  setLocation,
  setPrice,
  onSubmit,
  buttonLabel,
}: PostFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col pb-12">
      <ul className="flex flex-col gap-y-4">
        <li className="flex flex-col">
          <label htmlFor="">글 제목</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
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
          <label htmlFor="">직거래 위치</label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </li>
        <li className="flex flex-col">
          <label htmlFor="">판매 가격</label>
          <Input value={price} onChange={(e) => setPrice(e.target.value)} />
        </li>
        <li className="flex flex-col">
          <label htmlFor="">이미지</label>
          <input type="file" />
        </li>
      </ul>
      <button
        type="submit"
        className="bg-violet-400 text-white font-semibold h-12 mt-10 transition rounded-lg hover:-translate-y-1 active:translate-y-0"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

export default PostForm;
