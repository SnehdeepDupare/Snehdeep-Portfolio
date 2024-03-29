import { TopRightArrow } from "@/components/Icons";
import PageWrapper from "@/components/PageWrapper";
import urlFor from "@/sanity/lib/urlFor";
import { getProjects } from "@/sanity/utils/getProjects";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Snehdeep Dupare",
};

export const revalidate = 0;

async function Projects() {
  const projects = await getProjects();

  return (
    <PageWrapper>
      <main className="max-w-6xl mx-auto flex flex-col items-center px-10">
        <h3 className="tracking-[20px] uppercase text-2xl text-dimwhite">
          Projects
        </h3>

        <div className="space-y-5 mt-12 grid grid-cols-1 md:grid-cols-2 md:space-y-0 md:gap-5">
          {projects.map((project) => (
            <Link href={`/project/${project.slug}`} key={project._id}>
              <div className="relative flex flex-col group cursor-pointer rounded-xl overflow-hidden ">
                <Image
                  src={urlFor(project.poster).url()}
                  alt={project.title}
                  width={500}
                  height={100}
                  className="object-contain aspect-video group-hover:scale-105 duration-300 ease-in-out"
                />

                <div className="absolute bottom-0 bg-black w-full p-3 space-y-2 opacity-0  group-hover:opacity-80 transition-all ease-in-out duration-300 translate-y-10 group-hover:translate-y-0">
                  <p className="font-bold">{project.title}</p>
                  <p className="text-xs">Tech Stack used:</p>

                  <div className="flex flex-row gap-x-4">
                    {project.technologies.map((technology) => (
                      <img
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        alt={technology.title}
                        className="h-6 w-6 object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div className=" text-left mt-12 mb-36 group max-w-6xl mx-auto px-10 ">
        <Link href="/contact" className="flex gap-x-3">
          <p className="text-gray-400 group-hover:text-white group-hover:underline tracking-wide">
            Loved my work? Contact me now
          </p>
          <TopRightArrow />
        </Link>
      </div>
    </PageWrapper>
  );
}

export default Projects;
