"use client";
import { Github, Linkedin } from "@/components/Icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col mt-14 md:mt-24 max-w-6xl mx-auto px-10 md:px-24">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-semibold uppercase tracking-widest text-4xl md:text-5xl mb-5 md:mb-10"
      >
        I am Snehdeep Dupare
      </motion.h3>

      <div className="space-y-5 text-sm tracking-wide leading-8 md:leading-9">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-justify"
        >
          Welcome to my digital space! I'm your friendly neighbourhood frontend
          developer, web developer who loves to transform zeros and ones into
          rich and interactive experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-justify"
        >
          My{" "}
          <span className="font-bold uppercase hover:underline hover:underline-offset-2">
            <Link href="/projects">projects</Link>
          </span>{" "}
          are just an excuse to satisfy my curiosity about new technologies and
          understand how web is moving forward. Outside work you may find me
          reading astronomy books or learning a new{" "}
          <span className="font-bold uppercase hover:underline hover:underline-offset-2">
            <Link href="/skills">skill.</Link>
          </span>{" "}
          Anyways you can{" "}
          <span className="font-bold uppercase hover:underline hover:underline-offset-2">
            <Link href="/contact">Contact me.</Link>
          </span>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-4"
      >
        <Github />
        <Linkedin />
      </motion.div>
    </main>
  );
}
