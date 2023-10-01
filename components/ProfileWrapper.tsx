"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const ProfileWrapper: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ProfileWrapper;
