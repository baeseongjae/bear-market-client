import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
}

function SubmitButton({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const combinedClassName = `bg-primary-100 bg-rose-500/90 text-white font-semibold h-12 mt-10 border-3 outline-primary-100 transition hover:-translate-y-1 active:translate-y-0 rounded-lg ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export default SubmitButton;
