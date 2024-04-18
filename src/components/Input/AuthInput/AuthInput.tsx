import { ComponentProps, useId } from "react";

interface AuthInputProps extends ComponentProps<"input"> {
  label: string;
  className?: string;
}

function AuthInput({ label, className, ...props }: AuthInputProps) {
  const id = useId();
  const { value } = props;

  return (
    <>
      <input
        id={id}
        className={`h-12 border border-slate-300 text-xs xs:text-[13px] md:text-sm lg:text-base
        focus:border-primary-100 outline-none transition rounded-lg pl-4 peer ${className}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute bg-white px-[6px] left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-sm transition-all duration-500
        peer-focus:text-primary-100 peer-focus:text-xs peer-focus:left-5 peer-focus:top-1 peer-focus:-translate-y-3/4
        overflow-hidden z-5 ${
          value ? "left-5 top-1 -translate-y-2/3 text-xs" : ""
        }`}
      >
        {label}
      </label>
    </>
  );
}

export default AuthInput;
