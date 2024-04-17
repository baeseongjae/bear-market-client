import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
}

function ContainerButton({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const combinedClassName = `bg-primary-100 text-white font-semibold transition hover:bg-primary-100/60 rounded-lg ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export default ContainerButton;
