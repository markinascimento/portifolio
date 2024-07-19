import { MenuMobile } from "@/components/menu-mobile";

import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src={logo} alt="Logo" className="size-12 m-2" priority />
      <MenuMobile />
    </div>
  );
}
