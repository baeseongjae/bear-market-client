import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

function Input({ ...props }: InputProps) {
  const combinedClassName = `h-12 border border-slate-300 focus:border-violet-500 outline-none transition rounded-lg pl-4`;

  return <input type="text" className={combinedClassName} {...props} />;
}

export default Input;
