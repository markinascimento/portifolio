"use client";

// -> ReactJS
import { useEffect } from "react";

// -> Motion lib
import { motion, stagger, useAnimate } from "framer-motion";

// -> Utils
import { cn } from "@/lib/utils";

// -> Types
interface ITextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
}

export function TextGenerateEffect({
  words,
  className,
  filter,
}: ITextGenerateEffectProps) {
  const [scope, animate] = useAnimate();

  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter]);

  return (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className={cn("opacity-0", className)}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {`${word} `}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
