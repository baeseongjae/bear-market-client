import { ComponentProps, useId } from "react";

interface AuthInputProps extends ComponentProps<"input"> {
  label: string;
  className?: string;
}

function AuthInput({ label, className, ...props }: AuthInputProps) {
  const id = useId();
  const { value } = props;
  console.log(value);

  return (
    <>
      <input
        id={id}
        className={`h-12 border border-slate-300 text-xs xs:text-[13px] md:text-sm lg:text-sm
        focus:border-primary-100 outline-none transition rounded-lg pl-4 peer ${className}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute bg-white text-xs xs:text-[13px] md:text-sm lg:text-sm px-[6px] left-4 top-1/2 -translate-y-1/2 text-neutral-400 transition-all duration-500
        peer-focus:text-primary-100 ${
          value !== "" ? "text-xs absolute left-5 -top-[2px]" : ""
        } peer-focus:text-xs peer-focus:left-5 peer-focus:-top-[2px]
        overflow-hidden z-5 `}
      >
        {label}
      </label>
    </>
  );
}

export default AuthInput;
