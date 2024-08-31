import { cn } from "@/lib/utils";
import { Home, LayoutTemplate, MessageSquareText, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navData = [
  { name: 'Início', path: '/', icon: <Home/> },
  { name: 'Sobre', path: '/about', icon: <UserRound/> },
  { name: 'Contato', path: '/contact', icon: <MessageSquareText/> },
  { name: 'Projetos', path: '/projects', icon: <LayoutTemplate/> }
]

export function Navigation (){ 
  const pathname = usePathname()
  
  return (
  <nav 
    className="flex flex-col items-center lg:justify-center gap-y-4 absolute h-max bottom-0 p-2 mt-auto lg:right-px z-50
    top-0 w-full lg:w-16 lg:max-w-md lg:h-screen bg-[#222]"
  >
    <div 
      className="flex w-full max-w-[100vh] items-center justify-around gap-y-10 px-4 rounded-full text-3xl h-16 py-8 backdrop-blur-sm bg-[#333]
      lg:flex-col lg:px-0 lg:justify-center lg:h-max lg:text-xl "
    > 
      {navData.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={cn(
              'relative flex items-center group transition-all duration-300',
              pathname === link.path && 'text-pallet-red'
            )}
          >
            <div className="absolute -bottom-4 right-0 lg:hidden lg:pr-16 lg:group-hover:flex lg:bottom-1">
              <div className={cn(
                `-right-[-17%] translate-x-1/2 relative flex text-white opacity-20
                items-center p-1.5 rounded lg:bg-pallet-red lg:opacity-100`,
              )}>
                <div className={cn(
                  "text-sm leading-none opacity-0 font-semibold capitalize lg:opacity-100 transition-opacity duration-500",
                   pathname !== link.path && "opacity-100"
                )}>
                  {link.name}
                </div>
              </div>
            </div>

            <div className={cn(
              '-translate-y-2 relative transition-transform duration-500',
              pathname === link.path && "top-0 translate-y-0"
            )}>{link.icon}</div>
          </Link>
        );
      })}
    </div>
  </nav>
  );
}
