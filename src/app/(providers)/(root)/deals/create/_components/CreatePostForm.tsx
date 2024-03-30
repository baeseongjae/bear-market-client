"use client";

import Input from "@/components/Input";
import { useState } from "react";

function CreatePostForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [image, setImage] = useState<File>();

  const handleSubmitCreatePost = () => {
    // 폼 제출
    console.log(title, content);
  };

  return (
    <form onSubmit={handleSubmitCreatePost} className="flex flex-col pb-12">
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
        판매글 작성하기
      </button>
    </form>
  );
}

export default CreatePostForm;
