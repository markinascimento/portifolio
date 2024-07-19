"use client";

// -> ReactJS
import { useCallback, useState } from "react";

// -> NextJS
import Image from 'next/image';

// -> Icons lib
import { CloudDownload, Home } from "lucide-react";

// -> Utils
import { cn } from "@/lib/utils";

// -> Components
import { MenuItem } from "./menu-item";

// -> Images
import closeMenuIcon from '@/assets/burguer-bitten-icon.svg';
import openMenuIcon from '@/assets/burguer-icon.svg';
import logo from "@/assets/logo-portifolio.svg";

export function MenuMobile() {
  const [isOpen, setOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setOpen(true)
  }, [])

  const closeSidebar = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <nav className="lg:hidden">
      <Image 
        src={logo} 
        alt="Logo" 
        className="size-12 absolute top-3 left-3" 
        priority 
      />

      <button
          onClick={openSidebar}
          className="absolute right-3 top-3"
        >
          <Image 
            src={openMenuIcon} 
            alt="Menu hamburguer icon" 
            property="" 
            className="w-6 h-6"
          />
      </button>

      <aside
        className={cn(
          'bg-pallet-secondary flex flex-col fixed w-[75vw] right-[-100%] h-full flex-1 duration-700 z-10',
          isOpen && 'right-0'
        )}
      >
        <header className='flex w-full items-center justify-end pt-3 pr-3'>
          <button type="button" onClick={closeSidebar}>
            <Image 
              src={closeMenuIcon} 
              alt="Menu hamburguer icon" 
              property="" 
              className="w-6 h-6"
            />
          </button>
        </header>

        <ul className='flex flex-col items-center w-full h-full space-y-6 mt-14'>
          <MenuItem Icon={Home} name="Inicio" path="/" />
          <MenuItem Icon={Home} name="Sobre" path="/about" />
          <MenuItem Icon={Home} name="Projetos" path="/projects" />
          <MenuItem Icon={Home} name="Contate-me" path="/contact" />
        </ul>

        <footer className="p-4 mt-2">
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