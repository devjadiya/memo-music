"use client";

import { motion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface SlideInProps {
  children: React.ReactNode;
  direction: Direction;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  xOffset?: number;
}

const slideInVariants: Variants = {
  hidden: (custom: { direction: Direction; yOffset: number; xOffset: number }) => {
    switch (custom.direction) {
      case "up":
        return { opacity: 0, y: custom.yOffset };
      case "down":
        return { opacity: 0, y: -custom.yOffset };
      case "left":
        return { opacity: 0, x: custom.xOffset };
      case "right":
        return { opacity: 0, x: -custom.xOffset };
      default:
        return { opacity: 0 };
    }
  },
  visible: (custom: { duration: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      ease: "easeOut",
    },
  }),
};

export function SlideIn({
  children,
  direction,
  className,
  duration = 0.6,
  delay = 0,
  yOffset = 50,
  xOffset = 50,
}: SlideInProps) {
  return (
    <div className="overflow-hidden">
        <motion.div
            className={className}
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={{ direction, duration, delay, yOffset, xOffset }}
        >
            {children}
        </motion.div>
    </div>
  );
}
