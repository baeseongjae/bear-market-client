import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  label: string;
  className?: string;
}

function Button({ label, className, ...props }: ButtonProps) {
  const combinedClassName = `bg-violet-500 text-white font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0 rounded-lg ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {label}
    </button>
  );
}

export default Button;
