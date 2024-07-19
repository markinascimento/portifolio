"use client";

// -> NextJS
import Image from "next/image";

// -> Motion lib
import { motion, useCycle } from "framer-motion";

// -> Components
import { MenuItem } from "./MenuItem";

// -> Icons
import burguerIcon from "@/assets/burguer-icon.svg";

const sidebarOptions = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 1 + 200}px at 100vw 40px`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100vw 0px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 150,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export function MenuMobile() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={0}
      className="absolute top-0 bottom-0 right-0 w-[70vw] md:hidden"
    >
      <motion.div
        className="absolute inset-0 bg-indigo-600 backdrop-blur-sm w-full"
        variants={sidebarOptions}
      >
        <motion.ul
          className="flex flex-col w-full max-w-[80%] mt-16 space-y-4 pl-6 m-auto"
          variants={variants}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <MenuItem key={i} />
          ))}
        </motion.ul>
      </motion.div>

      <button
        type="button"
        onClick={() => toggleOpen()}
        className="flex items-center justify-center bg-transparent rounded-full w-12 h-12 
        hover:opacity-50 transition-opacity absolute top-3 right-2.5"
      >
        <Image src={burguerIcon} alt="" width={24} height={24} priority />
      </button>
    </motion.nav>
  );
}
