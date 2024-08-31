"use client";

// -> NextJS
import { Sora } from "next/font/google";
import { usePathname } from "next/navigation";

// -> Query lib
import { QueryClient, QueryClientProvider } from "react-query";

// -> Motion lib

// -> Toast lib

// -> Utils
import { cn } from "@/lib/utils";

// -> Styles CSS
import { Navigation } from "@/components/navigation";
import "./globals.css";

// -> Components

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
          "w-full max-w-[1268px] h-full overflow-hidden bg-[#222] text-zinc-100 relative mx-auto",
          soraFont.className
        )}
      >
        <QueryClientProvider client={queryClient}>
          <div className="w-full h-[90vh] lg:h-full lg:pr-16">
            {children}
          </div>

          <Navigation />
        </QueryClientProvider>
      </body>
    </html>
  );
}

// <html lang="pt-BR" className="h-full w-full">
// <body
//   className={cn(
//     "flex flex-col flex-1 w-full h-full overflow-y-hidden bg-background",
//     soraFont.className
//   )}
// >
//   <QueryClientProvider client={queryClient}>
//     <main className="bg-red-500 w-full h-[90vh]">
//       <Toaster />

//       <Meteors number={20} />

//       {children}

//       <Navigation />
//     </main>
//   </QueryClientProvider>
// </body>
// </html>