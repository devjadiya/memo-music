"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

interface StaggerListProps {
  children: React.ReactNode;
  className?: string;
  staggerDuration?: number;
  delay?: number;
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDuration: number, delay: number }) => ({
    opacity: 1,
    transition: {
      delay: custom.delay,
      when: "beforeChildren",
      staggerChildren: custom.staggerDuration,
    },
  }),
};

export const listItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.4,
        ease: "easeOut",
        },
    },
};

export function StaggerList({
  children,
  className,
  staggerDuration = 0.1,
  delay = 0,
}: StaggerListProps) {
  return (
    <motion.ul
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={{ staggerDuration, delay }}
    >
      {children}
    </motion.ul>
  );
}
