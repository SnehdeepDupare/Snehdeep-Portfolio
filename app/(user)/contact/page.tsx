"use client";
import { TopRightArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { FormEvent, useState } from "react";

function Contact() {
  const redirectUser = () => {
    window.location.href = "mailto:duparesnehdeep@gmail.com";
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/route", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
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

        <form
          className="space-y-3 mx-auto flex flex-col items-start mt-20 md:mt-0"
          onSubmit={handleForm}
        >
          <input
            type="text"
            placeholder="Name"
            className="contact-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact-field"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="contact-field scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full h-28 md:h-36"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-white hover:bg-dimwhite text-black py-3 px-10 rounded-md font-bold transition-all duration-300 ease-in-out"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </motion.main>

      <div className="mx-auto max-w-6xl px-10 mb-24">
        <Link
          href="/"
          className="text-gray-400 hover:text-white hover:underline tracking-wide flex flex-row gap-x-3 "
        >
          Go Back to Home
          <TopRightArrow />
        </Link>
      </div>
    </>
  );
}

export default Contact;
