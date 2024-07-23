// -> ReactJS
import { forwardRef, type ComponentProps } from "react";

// -> Utils
import { cn } from "@/lib/utils";

// -> Types
interface ITextareaProps extends ComponentProps<"textarea"> {
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, ...rest }, ref) => {
    return (
      <textarea
        {...rest}
        ref={ref}
        className={cn(
          `bg-pallet-secondary w-full font-medium min-h-28 resize-none rounded-lg lg:h-[52px]
          outline-none border-2 border-transparent focus:border-pallet-cyan p-4 text-zinc-100`,
          className
        )}
      />
    );
  }
);

Textarea.displayName = "Textarea";
