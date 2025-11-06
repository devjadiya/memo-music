"use client";

import { motion, type Variants } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { duration: number; delay: number }) => ({
    opacity: 1,
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      ease: "easeInOut",
    },
  }),
};

export function FadeIn({
  children,
  className,
  duration = 0.5,
  delay = 0,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
