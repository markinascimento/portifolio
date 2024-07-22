"use client";

// -> ReactJS
import { useCallback, useState } from "react";

// -> NextJS
import Image from "next/image";

// -> Icons lib
import { Award, CloudDownload, Home, Mail, User } from "lucide-react";

// -> Utils
import { cn } from "@/lib/utils";

// -> Components
import { MenuItem } from "./menu-item";

// -> Images
import closeMenuIcon from "@/assets/burguer-bitten-icon.svg";
import openMenuIcon from "@/assets/burguer-icon.svg";
import logo from "@/assets/logo-portifolio.svg";

export function MenuMobile() {
  const [isOpen, setOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <nav className="lg:hidden">
      <Image
        src={logo}
        alt="Logo"
        className="size-12 absolute top-3 left-3"
        priority
      />

      <button onClick={openSidebar} className="absolute right-3 top-3">
        <Image
          src={openMenuIcon}
          alt="Menu hamburguer icon"
          property=""
          className="w-6 h-6"
        />
      </button>

      <aside
        className={cn(
          "bg-pallet-secondary flex flex-col fixed w-[75vw] right-[-100%] h-full flex-1 duration-700 z-10",
          isOpen && "right-0"
        )}
      >
        <header className="flex w-full items-center justify-end pt-3 pr-3">
          <button type="button" onClick={closeSidebar}>
            <Image
              src={closeMenuIcon}
              alt="Menu hamburguer icon"
              property=""
              className="w-6 h-6"
            />
          </button>
        </header>

        <ul className="flex flex-col items-center w-full h-full space-y-6 mt-14">
          <button onClick={closeSidebar}>
            <MenuItem Icon={Home} name="Inicio" path="/" />
          </button>

          <button onClick={closeSidebar}>
            <MenuItem Icon={User} name="Sobre" path="/about" />
          </button>

          <button onClick={closeSidebar}>
            <MenuItem Icon={Award} name="Projetos" path="/projects" />
          </button>

          <button onClick={closeSidebar}>
            <MenuItem Icon={Mail} name="Contato" path="/contact" />
          </button>
        </ul>

        <footer className="p-4 mt-2">
          <section className="flex items-center justify-between mb-4 gap-2 bg-blue-500">
            <button className="bg-pallet-secondary w-12 h-12 rounded-full text-white hover:bg-pallet-red">
              Wha
            </button>
            <button className="bg-pallet-secondary w-12 h-12 rounded-full text-white hover:bg-pallet-red">
              Git
            </button>
            <button className="bg-pallet-secondary w-12 h-12 rounded-full text-white hover:bg-pallet-red">
              Lin
            </button>
            <button className="bg-pallet-secondary w-12 h-12 rounded-full text-white hover:bg-pallet-red">
              Ins
            </button>
          </section>

          <a href="#">
            <div className="flex items-center justify-center gap-2 w-full h-11 rounded-full bg-red-500 text-zinc-100">
              <CloudDownload className="size-5" strokeWidth={3} />
              <span className="font-semibold"> Download CV </span>
            </div>
          </a>
        </footer>
      </aside>
    </nav>
  );
}
