import { PropsWithChildren } from "react";

interface HeadingProps {
  className?: string;
}

function Heading({ children, className }: PropsWithChildren<HeadingProps>) {
  return (
    <h2 className={`text-3xl font-bold my-12 ${className}`}>{children}</h2>
  );
}

export default Heading;
