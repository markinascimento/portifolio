// -> ReactJS
import type { ReactNode } from "react";

// -> NextJS
import Link from "next/link";

// -> Types
interface ISocialButtonLinkProps {
  link: string;
  children: ReactNode;
}

export function SocialButtonLink({ link, children }: ISocialButtonLinkProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center justify-center w-10 h-10 bg-pallet-white rounded-full lg:w-12 lg:h-12"
    >
      {children}
    </Link>
  );
}
