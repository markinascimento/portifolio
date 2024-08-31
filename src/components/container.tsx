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
      transition={{ duration: 3 }}
      className={cn(
        "w-full h-full overflow-y-auto p-4 lg:pr-16",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
