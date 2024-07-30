// -> ReactJs
import { ReactNode } from "react";

// -> Motion lib
import { motion } from "framer-motion";

// -> Utils
import { cn } from "@/lib/utils";

// -> Types
interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
      className={cn(
        "flex flex-col items-center justify-center w-full h-[88vh] lg:flex-row",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
