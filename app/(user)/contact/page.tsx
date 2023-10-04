"use client";
import { Github, Linkedin, Loader, TopRightArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const redirectUser = () => {
    window.location.href = "mailto:duparesnehdeep@gmail.com";
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

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

      if (res.status === 200) {
        toast.success("Message Sent!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error: any) {
      toast.error(`Error: ${error}`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
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
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact-field"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            className="contact-field scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full h-28 md:h-36"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            className="bg-white hover:bg-dimwhite text-black py-3 px-10 rounded-md font-bold transition-all duration-300 ease-in-out disabled:bg-dimwhite w-52 flex justify-center"
            disabled={loading}
            type="submit"
          >
            {loading ? <Loader /> : "Send Message"}
          </button>
        </form>
      </motion.main>

      <motion.div
        className="mx-auto max-w-6xl px-10 mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Link
          href="/"
          className="text-gray-400 hover:text-white hover:underline tracking-wide flex flex-row gap-x-3 "
        >
          Go Back to Home
          <TopRightArrow />
        </Link>

        <div className="mt-4 mb-24 md:0">
          <Github />
          <Linkedin />
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
