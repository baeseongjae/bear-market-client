import Image from "next/image";

interface IconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function Icon({ src, alt, width, height }: IconProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="contain"
        priority
      />
    </>
  );
}

export default Icon;
