"use client";

// -> ReactJS
import type { ElementType } from "react";

// -> NextJS
import Link from "next/link";
import { usePathname } from "next/navigation";

// -> Utils
import { cn } from "@/lib/utils";

// -> Types
interface IMenuItemProps {
  name: string;
  path: string;
  Icon: ElementType;
}

export function MenuItem({ name, path, Icon }: IMenuItemProps) {
  const pathnameRendering = usePathname();

  const isActive = pathnameRendering === path;

  return (
    <li
      className={cn(
        "flex items-center justify-center min-h-9 px-4 rounded-full text-white",
        isActive
          ? "bg-pallet-red"
          : "bg-transparent hover:opacity-75 transition-opacity"
      )}
    >
      <Link href={path} className="flex gap-2 items-center">
        <Icon className="size-5" strokeWidth={2.5} />
        <span className="font-semibold"> {name} </span>
      </Link>
    </li>
  );
}
