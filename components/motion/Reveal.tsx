"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";
import { motionTokens } from "@/lib/motion-tokens";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: motionTokens.duration.slow,
        ease: motionTokens.ease.emphasized,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
