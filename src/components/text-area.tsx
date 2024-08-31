// -> ReactJS
import { forwardRef, type ComponentProps } from "react";

// -> Utils
import { cn } from "@/lib/utils";

// -> Components
import { FormError } from "./form-error";

// -> Types
interface ITextareaProps extends ComponentProps<"textarea"> {
  error?: string;
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ error, className, ...rest }, ref) => {
    return (
      <div className="w-full flex flex-col gap-px">
        <textarea
          {...rest}
          ref={ref}

          className={cn(
            `bg-[#333] w-full font-medium min-h-28 resize-none rounded-lg lg:h-[52px]
            outline-none border-2 border-transparent focus:border-zinc-100 p-4 text-zinc-100`,
            error && "border-red-700 text-red-700",
            className
          )}
        />

        {error && <FormError message={error} />}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
