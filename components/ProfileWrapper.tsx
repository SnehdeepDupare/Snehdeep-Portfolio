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
      viewport={{ once: true }}
      className="flex-shrink-0 h-48 w-48 md:rounded-lg md:h-96 md:w-64 xl:h-[450px] xl:w-[350px] relative mt-10 rounded-full overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default ProfileWrapper;
