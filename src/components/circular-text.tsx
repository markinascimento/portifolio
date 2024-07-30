// -> NextJS
import Image from "next/image";
import Link from "next/link";

// -> Images
import logo from "@/assets/icons/circle-persona.svg";

export function CircularText() {
  return (
    <div className="hidden bg-transparent items-center justify-center w-40 h-40 fixed bottom-0 left-0 lg:flex">
      <Image
        src={logo}
        alt="dwqdlkqwj"
        className="animate-spin-slow w-40 h-40"
      />

      <Link
        href="/contact"
        className="bg-pallet-secondary flex items-center justify-center absolute h-20 w-20 rounded-full"
      >
        <small className="text-zinc-100 font-semibold ">Contato</small>
      </Link>
    </div>
  );
}
