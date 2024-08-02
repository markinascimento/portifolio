"use client";

import { motion } from "framer-motion";

interface iSkillProps {
  name: string;
  y: string;
  x: string;
}

const Skill = ({ name, x, y }: iSkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-pallet-red text-white
      px-10 py-4 cursor-pointer"
      whileHover={{ scale: 1.15 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

export function Skills() {
  return (
    <>
      <div
        className="w-full  bg-red-500 relative flex items-center justify-center rounded-full 
        bg-circular-light"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-pallet-red text-white
          px-10 py-4 cursor-pointer"
          whileHover={{ scale: 1.15 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="-10vw" />
        <Skill name="CSS" x="-5vw" y="10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="15vw" />
        <Skill name="Web Design" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="20vw" />
        <Skill name="Firebase" x="-25vw" y="19vw" />
      </div>
    </>
  );
}
