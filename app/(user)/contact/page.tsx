"use client";
import { motion } from "framer-motion";

function Contact() {
  const redirectUser = () => {
    window.location.href = "mailto:duparesnehdeep@gmail.com";
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="md:relative flex flex-col md:flex-row text-center mx-auto max-w-6xl px-10 justify-evenly items-center h-[80vh]"
    >
      <h3 className="tracking-[20px] absolute top-24 md:top-0 uppercase text-2xl text-dimwhite">
        Contact
      </h3>
      <h5 className="absolute top-40 md:top-12 text-dimwhite">
        Get in touch or shoot me an email directly on{" "}
        <span
          className="font-bold cursor-pointer hover:underline"
          onClick={redirectUser}
        >
          duparesnehdeep@gmail.com
        </span>
      </h5>

      <form className="space-y-3 mx-auto flex flex-col items-start">
        <input type="text" placeholder="Name" className="contact-field" />
        <input type="email" placeholder="Email" className="contact-field" />
        <input type="text" placeholder="Subject" className="contact-field" />
        <textarea
          placeholder="Message"
          className="contact-field scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full h-28 md:h-36"
        />
        <button className="bg-white hover:bg-dimwhite text-black py-3 px-10 rounded-md font-bold transition-all duration-300 ease-in-out">
          Send Message
        </button>
      </form>
    </motion.main>
  );
}

export default Contact;
