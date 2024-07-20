'use client'

// -> NextJS
import Image from 'next/image';

// -> Icons lib
import { Award, Home, Mail, User } from "lucide-react";

// -> Components
import { MenuItem } from "./menu-item";

// -> Images
import logo from "@/assets/logo-portifolio.svg";

export function MenuDesktop() {
  return (
    <header className="hidden w-full max-w-[1304px] m-auto px-3 mt-4 lg:flex lg:gap-4 lg:items-center">
      <Image 
        src={logo} 
        alt="Logo" 
        className="size-12" 
        priority 
      />

      <nav className="flex items-center justify-center gap-4 w-full h-12">
        <MenuItem Icon={Home} name="Inicio" path="/" />
        <MenuItem Icon={User} name="Sobre" path="/about" />
        <MenuItem Icon={Award} name="Projetos" path="/projects" />
        <MenuItem Icon={Mail} name="Contato" path="/contact" />
      </nav>




      {/* <aside
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
      </aside> */}
    </header>
  )
}
