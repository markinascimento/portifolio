// -> ReactJS
import { forwardRef, type ComponentProps } from "react";

// -> Utils
import { cn } from "@/lib/utils";

// -> Components
import { FormError } from "./form-error";

// -> Types
interface IInputProps extends ComponentProps<"input"> {
  error?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ error, className, ...rest }, ref) => {
    return (
      <div className="w-full flex flex-col gap-px">
        <input
          {...rest}
          ref={ref}
          type="text"
          className={cn(
            `bg-pallet-secondary w-full font-medium h-10 rounded-lg lg:h-[52px]
            outline-none border-2 border-transparent focus:border-pallet-cyan px-4 text-zinc-100`,
            error && "border-red-700 text-red-700",
            className
          )}
        />

        {error && <FormError message={error} />}
      </div>
    );
  }
);

Input.displayName = "Input";
