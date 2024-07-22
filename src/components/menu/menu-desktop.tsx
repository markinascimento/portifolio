"use client";

// -> NextJS
import Image from "next/image";

// -> Icons lib
import { Award, Home, Mail, User } from "lucide-react";

// -> Components
import { MenuItem } from "./menu-item";

// -> Images
import logo from "@/assets/logo-portifolio.svg";

export function MenuDesktop() {
  return (
    <header className="hidden w-full max-w-[1304px] m-auto px-3 mt-4 lg:flex lg:gap-4 lg:items-center">
      <Image src={logo} alt="Logo" className="size-12" priority />

      <nav className="flex items-center justify-center gap-4 w-full h-12">
        <MenuItem Icon={Home} name="Inicio" path="/" />
        <MenuItem Icon={User} name="Sobre" path="/about" />
        <MenuItem Icon={Award} name="Projetos" path="/projects" />
        <MenuItem Icon={Mail} name="Contato" path="/contact" />
      </nav>
    </header>
  );
}
