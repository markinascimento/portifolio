'use client'

// -> NextJS
import { Sora } from "next/font/google";
import { usePathname } from "next/navigation";

// -> Motion lib
import { AnimatePresence, motion } from "framer-motion";

// -> Utils
import { cn } from "@/lib/utils";

// -> Styles CSS
import "./globals.css";

// -> Types

// -> Components
import { MenuDesktop } from "@/components/menu/menu-desktop";
import { MenuMobile } from "@/components/menu/menu-mobile";
import { TransitionPageSlider } from "@/components/transition-page-slider";

const soraFont = Sora({ subsets: ["latin"], weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()

  return (
    <html lang="pt-BR" className="h-full w-full">
      <body 
        className={cn(
          'flex flex-col flex-1 w-full h-full bg-background lg:gap-2',
          soraFont.className
        )}
      >
          <section className="w-full min-h-16">
            <MenuMobile />
            <MenuDesktop />
          </section>

          <section className="flex w-full max-w-[1304px] h-[89vh] px-3 m-auto">
            <AnimatePresence mode="wait">
              <motion.div key={pathname}>
                {children}
                <TransitionPageSlider position="bottom" />
                <TransitionPageSlider position="top" />
              </motion.div>
            </AnimatePresence> 
          </section>
      </body>
    </html>
  );
}
