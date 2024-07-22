// -> ReactJS
import type { ComponentProps, ReactNode } from "react";

// -> Types
interface IButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function Button({ children }: IButtonProps) {
  return (
    <button
      className="flex w-full max-w-[468px] items-center justify-center bg-pallet-red font-medium 
      h-10 rounded-lg text-zinc-100 outline-none border-2 border-transparent 
      focus:border-pallet-cyan lg:h-[52px] hover:opacity-80 transition-opacity"
    >
      {children}
    </button>
  );
}
