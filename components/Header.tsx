"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import { Bars, Close } from "./Icons";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobView, setMobView] = useState(false);

  const toggleNavbar = () => {
    setMobView(!mobView);
  };

  return (
    <header className="fixed top-0 w-full py-10 z-20">
      <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-5">
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
          <ul className={`sm:flex hidden justify-end items-center flex-1`}>
            {navLinks.map((link) => {
              const isActive =
                (pathname.includes(link.route) && link.route.length > 1) ||
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
          <div className="sm:hidden flex flex-1 justify-end items-center ">
            <button className="md:hidden" onClick={toggleNavbar}>
              {mobView ? <Close /> : <Bars />}
            </button>

            <div
              className={`${
                !mobView ? "hidden" : "flex"
              } p-6 absolute top-20 right-0 my-2 w-full bg-transparent animate-appear backdrop-blur-sm`}
            >
              <ul
                className={`flex justify-end items-center flex-col flex-1 space-y-5`}
              >
                {navLinks.map((link) => {
                  const isActive =
                    (pathname.includes(link.route) && link.route.length > 1) ||
                    pathname === link.route;

                  return (
                    <Link
                      href={link.route}
                      key={link.label}
                      className={`navlink ${isActive && "text-white"}`}
                      onClick={() => setMobView(!mobView)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
