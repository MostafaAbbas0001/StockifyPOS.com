"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  duration = 0.5
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.2 });
  
  // Define initial animation properties based on direction
  const getInitialProps = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 20 };
      case "down":
        return { opacity: 0, y: -20 };
      case "left":
        return { opacity: 0, x: 20 };
      case "right":
        return { opacity: 0, x: -20 };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 20 };
    }
  };

  // Define animation target based on direction
  const getAnimateProps = () => {
    if (!isInView) return getInitialProps();
    
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "none":
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialProps()}
      animate={getAnimateProps()}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for a professional easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
