"use client";
import { TopRightArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import Link from "next/link";

function Projects() {
  const pro = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl mx-auto flex flex-col items-center px-10"
      >
        <h3 className="tracking-[20px] uppercase text-2xl text-dimwhite">
          Projects
        </h3>

        <div className="space-y-5 mt-12 grid grid-cols-1 md:grid-cols-2 md:space-y-0 md:gap-5 z-[-10] md:z-auto">
          {pro.map((p) => (
            <div
              key={p}
              className="relative flex flex-col group cursor-pointer rounded-xl overflow-hidden"
            >
              <img
                src="/sd-profile.jpg"
                alt="Project Image"
                className="h-96 w-96 object-fill"
              />

              <div className="absolute bottom-0 bg-black w-full p-3 space-y-2 opacity-0  group-hover:opacity-80 transition-all ease-in-out duration-300 translate-y-10 group-hover:translate-y-0">
                <p className="font-bold">Project Name</p>
                <p className="text-xs">Tech Stack used:</p>

                <div className="flex flex-row gap-x-4">
                  <img src="/react.png" alt="" className="h-6 w-6" />
                  <img src="/react.png" alt="" className="h-6 w-6" />
                  <img src="/react.png" alt="" className="h-6 w-6" />
                  <img src="/react.png" alt="" className="h-6 w-6" />
                  <img src="/react.png" alt="" className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.main>

      <div className="mt-12 mb-36 group max-w-6xl mx-auto px-10 lg:pl-36">
        <Link href="/contact" className="flex gap-x-3">
          <p className="text-gray-400 group-hover:text-white group-hover:underline tracking-wide">
            Loved my work? Contact me now
          </p>
          <TopRightArrow />
        </Link>
      </div>
    </>
  );
}

export default Projects;
