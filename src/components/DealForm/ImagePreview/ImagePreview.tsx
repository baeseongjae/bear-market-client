import Image from "next/image";
import React from "react";

interface ImagePreviewProps {
  imageUrl: string;
  handleClickRemoveImage: React.MouseEventHandler;
  fileName?: string;
}

function ImagePreview({
  imageUrl,
  handleClickRemoveImage,
  fileName,
}: ImagePreviewProps) {
  return (
    <div className="border-2 w-24 h-[96px] flex flex-col justify-center border-slate-300 rounded-xl overflow-hidden">
      <div className="relative  overflow-hidden bg-white">
        <Image src={imageUrl} alt="Preview" width={80} height={80} />
        <button
          type="button"
          onClick={handleClickRemoveImage}
          className="absolute top-0 right-0 w-6 text-white bg-black rounded-full hover:bg-primary-100"
          aria-label="Remove image"
        >
          &times;
        </button>
      </div>
      <p className="text-xs text-center truncate">{fileName}</p>
    </div>
  );
}

export default ImagePreview;
