import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "fade";

const variantsByDirection: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: 56 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -56 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 56 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface RevealProps {
  children: ReactNode;
  /** Which way the section animates in from. Defaults to a gentle rise. */
  direction?: Direction;
  /** Extra delay (seconds) before the animation starts, for staggering. */
  delay?: number;
  className?: string;
}

/**
 * Wraps a section so it fades/slides into place the first time it scrolls
 * into view, instead of just popping onto the page.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={variantsByDirection[direction]}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
