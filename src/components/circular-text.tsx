import logo from "@/assets/circle-persona.svg";
import Image from "next/image";

export function CircularText() {
  return (
    <div className="hidden bg-transparent items-center justify-center w-40 h-40 fixed bottom-0 left-0 lg:flex">
      <Image
        src={logo}
        alt="dwqdlkqwj"
        className="animate-spin-slow w-40 h-40"
      />

      <div className="bg-pallet-secondary flex items-center justify-center absolute h-20 w-20 rounded-full">
        <small className="text-zinc-100 font-semibold ">Contato</small>
      </div>
    </div>
  );
}
