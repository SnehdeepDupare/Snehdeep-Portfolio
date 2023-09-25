"use client";
import Skill from "@/components/Skill";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="md:relative flex flex-col md:flex-row text-center mx-auto max-w-6xl px-10 justify-evenly items-center"
    >
      <div className="absolute top-24 md:top-0  z-[-10] md:z-auto">
        <h3 className="tracking-[20px] uppercase text-2xl text-dimwhite">
          Skills
        </h3>
        <p className="text-dimwhite">Here are some technlogies I love to use</p>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-14 md:mt-20">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.main>
  );
}

export default Skills;
