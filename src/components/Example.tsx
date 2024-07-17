'use client'

import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../hooks/use-dimensions";
import { MenuToggle } from './MenuToggle';
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    // clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    clipPath: `circle(${height * 1 + 200}px at 100vw 40px`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 100vw 0px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 150,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);


  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="md:hidden"
    >
      <motion.div className="absolute inset-0 bg-zinc-900/10 backdrop-blur-xl w-full" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
