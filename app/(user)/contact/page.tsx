import { Github, Linkedin, TopRightArrow } from "@/components/Icons";
import PageWrapper from "@/components/PageWrapper";
import ContactForm from "@/components/ContactForm";
import ContactHeading from "@/components/ContactHeading";

import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Snehdeep Dupare",
};

async function Contact() {
  return (
    <PageWrapper>
      <main className="flex flex-col text-center mx-auto max-w-6xl px-10">
        <ContactHeading />

        <ContactForm />
      </main>

      <div className="mx-auto max-w-6xl px-10 mt-5 mb-24">
        <Link
          href="/"
          className="text-gray-400 hover:text-white hover:underline tracking-wide flex flex-row gap-x-3 "
        >
          Go Back to Home
          <TopRightArrow />
        </Link>

        <div className="mt-2 mb-24 ">
          <Github />
          <Linkedin />
        </div>
      </div>
    </PageWrapper>
  );
}

export default Contact;
