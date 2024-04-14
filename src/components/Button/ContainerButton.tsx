import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
}

function ContainerButton({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const combinedClassName = `bg-pink-600 text-white font-semibold h-12 mt-10 transition hover:bg-pink-400 rounded-lg ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export default ContainerButton;
