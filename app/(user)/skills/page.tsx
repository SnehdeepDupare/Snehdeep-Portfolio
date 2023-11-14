import { TopRightArrow } from "@/components/Icons";
import PageWrapper from "@/components/PageWrapper";
import urlFor from "@/sanity/lib/urlFor";
import { getSkills } from "@/sanity/utils/getSkills";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

async function Skills() {
  const skills = await getSkills();

  return (
    <PageWrapper>
      <main className="md:relative flex flex-col md:flex-row text-center mx-auto max-w-6xl px-10 justify-evenly items-center">
        <div className="absolute top-24 md:top-0">
          <h3 className="tracking-[20px] uppercase text-2xl text-dimwhite">
            Skills
          </h3>
          <p className="text-dimwhite">
            Here are some technlogies I love to use
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-14 md:mt-20">
          {skills.map((skill) => (
            <div key={skill._id} className="flex flex-col items-center">
              <div className="relative h-14 w-14 md:w-16 md:h-16 mb-2 ">
                <Image
                  src={urlFor(skill.image).url()}
                  alt={skill.title}
                  fill={true}
                  sizes="100%"
                  className="border rounded-full object-contain"
                />
              </div>
              <p className="text-sm">{skill.title}</p>
            </div>
          ))}
        </div>
      </main>

      <div className="mx-auto max-w-6xl px-10 mt-10 mb-24 md:mb-0 ">
        <Link
          href="/projects"
          className="text-gray-400 hover:text-white hover:underline tracking-wide flex flex-row gap-x-3 "
        >
          Take a look at my Projects
          <TopRightArrow />
        </Link>
      </div>
    </PageWrapper>
  );
}

export default Skills;
