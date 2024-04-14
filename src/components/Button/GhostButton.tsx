import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
}

function GhostButton({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const combinedClassName = `border border-pink-600 text-pink-600 font-semibold h-12 mt-10 transition hover:border-pink-400 hover:text-pink-400 rounded-lg ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export default GhostButton;
