"use client";
import { Github, Linkedin, TopRightArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const nameElement = document.getElementById("name");
    let interval: NodeJS.Timeout | null = null;
    let timeout: NodeJS.Timeout | null = null;

    const scrambleText = (target: HTMLElement) => {
      let iteration = 0;

      clearInterval(interval as NodeJS.Timeout);

      interval = setInterval(() => {
        if (!target.dataset.value) return;

        target.innerText = target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return target.dataset.value![index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= target.dataset.value.length) {
          clearInterval(interval as NodeJS.Timeout);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const applyEffect = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        // For non-mobile devices
        if (nameElement) {
          nameElement.addEventListener("mouseover", (event) => {
            const target = event.target as HTMLElement;
            scrambleText(target);
          });
        }
      }
      // Run the effect after 600ms on page load for all devices
      if (nameElement) {
        timeout = setTimeout(() => {
          scrambleText(nameElement);
        }, 600);
      }
    };

    applyEffect();

    return () => {
      if (nameElement && window.matchMedia("(min-width: 768px)").matches) {
        nameElement.removeEventListener("mouseover", (event) => {
          const target = event.target as HTMLElement;
          scrambleText(target);
        });
      }
      if (interval) {
        clearInterval(interval);
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [letters]);

  return (
    <main className="flex flex-col mt-14 md:mt-24 max-w-6xl mx-auto px-10 md:px-24">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold uppercase tracking-widest text-4xl md:text-5xl mb-5 md:mb-10"
      >
        I am{" "}
        <span id="name" data-value="Snehdeep Dupare">
          Snehdeep Dupare
        </span>
      </motion.h3>

      <section className="space-y-5 text-sm tracking-wide leading-8 md:leading-9">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-justify"
        >
          Welcome to my digital space! I'm your friendly neighbourhood frontend
          developer, web developer who loves to transform zeros and ones into
          rich and interactive experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
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
      </section>

      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="text-left mt-5"
      >
        <Link
          href="/about"
          className="text-gray-400 hover:text-white hover:underline tracking-wide flex flex-row gap-x-3 "
        >
          See more About me
          <TopRightArrow />
        </Link>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-4 mb-24 md:0"
      >
        <Github />
        <Linkedin />
      </motion.div>
    </main>
  );
}
