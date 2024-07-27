"use client";

// -> NextJS
import { Sora } from "next/font/google";
import { usePathname } from "next/navigation";

// -> Query lib
import { QueryClient, QueryClientProvider } from "react-query";

// -> Motion lib
import { AnimatePresence, motion } from "framer-motion";

// -> Toast lib
import { Toaster } from "react-hot-toast";

// -> Utils
import { cn } from "@/lib/utils";

// -> Styles CSS
import "./globals.css";

// -> Components
import { MenuDesktop } from "@/components/menu/menu-desktop";
import { MenuMobile } from "@/components/menu/menu-mobile";
import { Meteors } from "@/components/meteors";
import { TransitionPageSlider } from "@/components/transition-page-slider";

const soraFont = Sora({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const queryClient = new QueryClient();

  return (
    <html lang="pt-BR" className="h-full w-full">
      <body
        className={cn(
          "flex flex-col flex-1 w-full h-full bg-background lg:gap-2",
          soraFont.className
        )}
      >
        <QueryClientProvider client={queryClient}>
          <Toaster />

          <section className="w-full min-h-16">
            <MenuMobile />
            <MenuDesktop />
          </section>

          <section className="flex w-full max-w-[1304px] h-[89vh] m-auto overflow-x-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={pathname}>
                <div className="w-screen h-full relative">
                  <Meteors number={20} />

                  {children}
                </div>

                <TransitionPageSlider position="bottom" />
                <TransitionPageSlider position="top" />
              </motion.div>
            </AnimatePresence>
          </section>
        </QueryClientProvider>
      </body>
    </html>
  );
}
