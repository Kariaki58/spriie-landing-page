"use client";

import { motion, type Variants } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function MotionWrapper({ children, className, id, variants = defaultVariants }: MotionWrapperProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
