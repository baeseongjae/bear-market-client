import { ComponentProps, useId } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  className?: string;
}

function Input({ label, className, ...props }: InputProps) {
  const id = useId();
  const combinedClassName = `h-12 border border-slate-300 focus:border-primary-100 outline-none transition rounded-lg pl-4 ${className}`;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={combinedClassName} {...props} />
    </>
  );
}

export default Input;
