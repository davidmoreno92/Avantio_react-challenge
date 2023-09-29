import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const animations: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100, display: "none" },
};

type PageProps = {
  children: ReactNode;
};

export const AnimatedPage: React.FC<PageProps> = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      layout="position"
    >
      {children}
    </motion.div>
  );
};
