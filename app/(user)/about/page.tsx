import { TopRightArrow } from "@/components/Icons";
import PageWrapper from "@/components/PageWrapper";
import ProfileWrapper from "@/components/ProfileWrapper";
import { RichTextComponents } from "@/components/RichTextComponents";
import urlFor from "@/sanity/lib/urlFor";
import { getInfo } from "@/sanity/utils/getInfo";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 0;

async function About() {
  const info = await getInfo();

  return (
    <PageWrapper>
      <main className="md:relative flex flex-col md:flex-row text-center mx-auto max-w-6xl px-10 justify-evenly items-center ">
        <h3 className="tracking-[20px] absolute top-24 md:top-0 uppercase text-2xl text-dimwhite">
          About
        </h3>

        <ProfileWrapper>
          <Image
            src={urlFor(info?.profilePic).url()}
            alt="Snehdeep Dupare"
            className="object-cover"
            fill={true}
            priority={true}
            sizes="100%"
          />
        </ProfileWrapper>

        <div className="px-0 md:px-10 mt-5 text-justify">
          <PortableText
            value={info?.aboutText}
            components={RichTextComponents}
          />
        </div>
      </main>

      <div className="mx-auto max-w-6xl px-10 mt-10 mb-24 md:mb-0">
        <a
          href={info?.resume}
          target="_blank"
          className="text-gray-400 hover:text-white hover:underline tracking-wide flex flex-row gap-x-3 "
        >
          Check My Resume
          <TopRightArrow />
        </a>
      </div>
    </PageWrapper>
  );
}

export default About;
