import logo from "@/assets/logo-portifolio.svg";
import Image from 'next/image';

export function MenuDesktop() {
  return (
    <nav className="hidden w-full max-w-[1304px] m-auto px-3 mt-4 lg:flex">
      <Image 
        src={logo} 
        alt="Logo" 
        className="size-12" 
        priority 
      />


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
    </nav>
  )
}
