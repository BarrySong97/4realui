"use client";
import { motion, Variants } from "framer-motion";
import { s, span } from "framer-motion/client";
import React from "react";

// --- SlotMachineText Component (HTML structure based) ---
interface SlotMachineTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  animationDuration?: number;
  animationEase?: string | number[]; // e.g., "easeOut", [0.6, 0.01, -0.05, 0.95]
  characterClassName?: string; // Optional class for the outer viewport span
}

const SlotMachineText: React.FC<SlotMachineTextProps> = ({
  text,
  className = "",
  staggerDelay = 0.05,
  animationDuration = 0.9,
  animationEase = "easeOut",
  characterClassName = "",
}) => {
  const characters = text.split("");

  return (
    <div className={`inline-flex ${className}`} aria-label={text}>
      {characters?.map((v, i) => {
        if (v === " ") {
          return <span key={i} className="w-4" />;
        }
        const delay = 0.5 + Math.random() * 0.6;
        return (
          <span
            key={i}
            className="flex flex-col gap-2 relative overflow-hidden"
          >
            <motion.span
              initial={{ y: 0 }}
              className="will-change-transform"
              animate={{ y: "-110%" }}
              transition={{
                delay: delay,
                duration: animationDuration,
                ease: [0.6, 0.01, -0.05, 0.95],
              }}
            >
              {v}
            </motion.span>
            <motion.span
              className="absolute will-change-transform"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: delay,
                duration: animationDuration,
                ease: [0.6, 0.01, -0.05, 0.95],
              }}
            >
              {v}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};

export default SlotMachineText;
