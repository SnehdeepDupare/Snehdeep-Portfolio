"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.4,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
