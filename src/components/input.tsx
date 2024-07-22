import { forwardRef, type ComponentProps } from "react";

interface IInputProps extends ComponentProps<"input"> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        type="text"
        className="bg-pallet-secondary w-full max-w-[468px] font-medium h-10 rounded-lg lg:h-[52px]
      outline-none border-2 border-transparent focus:border-pallet-cyan px-4 text-zinc-100"
      />
    );
  }
);

Input.displayName = "Input";
