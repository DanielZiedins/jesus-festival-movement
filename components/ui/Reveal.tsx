"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /**
   * Animate on mount instead of on scroll-into-view. Use for content above the
   * fold — it must never depend on an IntersectionObserver firing, or a hero
   * can sit invisible if the observer is starved.
   */
  immediate?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  immediate = false,
}: Props) {
  const reduce = useReducedMotion();
  const to = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      {...(immediate
        ? { animate: to }
        : { whileInView: to, viewport: { once: true, margin: "-80px" } })}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
