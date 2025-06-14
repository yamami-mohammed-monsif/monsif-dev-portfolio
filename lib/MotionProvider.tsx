// Optimized Framer Motion components for better performance
// Uses LazyMotion to load only essential animation features
// Reduces initial bundle size by using the domAnimation feature set

import { LazyMotion, domAnimation, m } from "motion/react";
import { memo } from "react";

type MotionProviderProps = {
  children: React.ReactNode;
};

export const MotionProvider = memo(({ children }: MotionProviderProps) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
));

MotionProvider.displayName = "MotionProvider";

export { m as motion };
export { AnimatePresence } from "motion/react";
