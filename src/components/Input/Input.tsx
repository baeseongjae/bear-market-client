import { ComponentProps, useId } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  const id = useId();
  const combinedClassName = `h-12 border border-slate-300 focus:border-pink-500 outline-none transition rounded-lg pl-4`;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={combinedClassName} {...props} />
    </>
  );
}

export default Input;
