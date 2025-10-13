"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import { Bars, Close } from "./Icons";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.36, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delay: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="py-10 z-20">
      <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-5 md:px-10">
        {/* Left */}
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-bold font-baskervville text-3xl">
            <Link href="/">SD.</Link>
          </h1>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex items-center"
        >
          <ul className={`md:flex hidden justify-end items-center flex-1`}>
            {navLinks.map((link) => {
              const isActive =
                (pathname?.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;

              return (
                <Link
                  href={link.route}
                  key={link.label}
                  className={`navlink ${isActive && "text-white"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </ul>

          {/* Mobile View */}
          <button className="md:hidden" onClick={toggleNavbar}>
            <Bars />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed h-screen bg-black w-full left-0 top-0 z-20 py-10 px-5 origin-top"
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="flex items-center justify-between">
                  <h1 className="font-bold font-baskervville text-3xl">
                    <Link href="/" onClick={toggleNavbar}>
                      SD.
                    </Link>
                  </h1>

                  <button onClick={toggleNavbar}>
                    <Close />
                  </button>
                </div>

                <motion.div
                  className="flex flex-col items-center justify-center space-y-8 mt-16"
                  variants={containerVariants}
                  initial="initial"
                  animate="open"
                  exit="initial"
                >
                  {navLinks.map((link) => {
                    const isActive =
                      (pathname?.includes(link.route) &&
                        link.route.length > 1) ||
                      pathname === link.route;

                    return (
                      <div className="overflow-hidden">
                        <motion.div variants={linkVariants}>
                          <Link
                            href={link.route}
                            key={link.label}
                            className={`navlink ${
                              isActive && "text-white"
                            } text-lg uppercase font-bold`}
                            onClick={toggleNavbar}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
