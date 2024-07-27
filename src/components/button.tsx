// -> ReactJS
import type { ComponentProps, ReactNode } from "react";

// -> Components
import { Spinner } from "./spinner";

// -> Types
interface IButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({ loading, children, disabled }: IButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className="flex w-full items-center justify-center gap-2 bg-pallet-red font-medium 
      h-10 rounded-lg text-zinc-100 outline-none border-2 border-transparent 
      focus:border-pallet-cyan lg:h-[52px] hover:opacity-50 transition-opacity
      disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading && <Spinner />}

      {children}
    </button>
  );
}
