import { Github, Linkedin, TopRightArrow } from "@/components/Icons";
import PageWrapper from "@/components/PageWrapper";
import ContactForm from "@/components/ContactForm";

import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Snehdeep Dupare",
};

async function Contact() {
  const redirectUser = () => {
    window.location.href = "mailto:duparesnehdeep@gmail.com";
  };

  return (
    <PageWrapper>
      <main className="flex flex-col text-center mx-auto max-w-6xl px-10">
        <div>
          <h3 className="tracking-[20px] uppercase text-2xl text-dimwhite">
            Contact
          </h3>
          <h5 className="text-dimwhite mt-2">
            Get in touch or shoot me an email directly on{" "}
            <span
              className="font-bold cursor-pointer hover:underline"
              // onClick={redirectUser}
            >
              duparesnehdeep@gmail.com
            </span>
          </h5>
        </div>

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
