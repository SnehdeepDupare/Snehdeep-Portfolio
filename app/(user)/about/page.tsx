// "use client";
import urlFor from "@/sanity/lib/urlFor";
import { getInfo } from "@/sanity/utils/getInfo";
// import { motion } from "framer-motion";

export const revalidate = 0;

async function About() {
  const info = await getInfo();

  return (
    <main
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.2 }}
      className="md:relative flex flex-col md:flex-row text-center mx-auto max-w-6xl px-10 justify-evenly items-center"
    >
      <h3 className="tracking-[20px] absolute top-24 md:top-0 uppercase text-2xl z-[-10] md:z-auto text-dimwhite">
        About
      </h3>

      <img
        // initial={{
        //   x: -100,
        //   opacity: 0,
        // }}
        // whileInView={{
        //   x: 0,
        //   opacity: 1,
        // }}
        // transition={{
        //   duration: 1.2,
        // }}
        src={urlFor(info?.profilePic).url()}
        alt="profile"
        className="rounded-full h-48 w-48 md:rounded-lg md:h-96 md:w-64 xl:h-[450px] xl:w-[350px] flex-shrink-0 object-cover mt-10"
      />

      <p className="px-0 md:px-10 mt-5 md:mt-0">
        {info?.aboutText}

        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        doloremque commodi magnam, eaque accusamus ut assumenda. Veritatis unde
        fugit sequi eos corrupti saepe provident nobis nulla debitis? Eaque quae
        omnis itaque magni dolore corrupti aperiam accusamus facilis unde nemo
        eligendi at similique, minima sit cupiditate quidem ex consectetur saepe
        totam! Nisi quidem soluta cupiditate adipisci praesentium in omnis
        beatae dolorem officia tempora eos nulla, quam tempore nam repudiandae
        aut debitis voluptatem. Omnis sed ratione nesciunt optio suscipit
        consectetur nam in necessitatibus provident ut */}
      </p>
    </main>
  );
}

export default About;
