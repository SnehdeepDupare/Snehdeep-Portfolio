"use client";
import { Github, Linkedin } from "@/components/Icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col mt-32 md:mt-48 max-w-6xl mx-auto px-10 ">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-semibold uppercase tracking-widest text-4xl md:text-5xl mb-5 md:mb-10"
      >
        I am Snehdeep Dupare
      </motion.h3>

      <div className="space-y-5 text-sm md:text-base">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-justify"
        >
          Motivated and dedicated individual with a strong foundation in
          programming languages like React, Java. Seeking an entry level
          position in an organization where I can apply my knowledge and skills
          to contribute to the success of the company. Eager to learn and grow
          in a collaborative and challenging environment that fosters growth and
          professional development.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-justify"
        >
          Motivated and dedicated individual with a strong foundation in
          programming languages like React, Java. Seeking an entry level
          position in an organization where I can apply my knowledge and skills
          to contribute to the success of the company. Eager to learn and grow
          in a collaborative and challenging environment that fosters growth and
          professional development.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-justify"
        >
          Motivated and dedicated individual with a strong foundation in
          programming languages like React, Java. Seeking an entry level
          position in an organization where I can apply my knowledge and skills
          to contribute to the success of the company. Eager to learn and grow
          in a collaborative and challenging environment that fosters growth and
          professional development.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-4"
      >
        <Github />
        <Linkedin />
      </motion.div>
    </main>
  );
}
