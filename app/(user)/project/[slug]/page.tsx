import { GithubIcon, TopRightArrow } from "@/components/Icons";
import urlFor from "@/sanity/lib/urlFor";
import { getProject } from "@/sanity/utils/getProject";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

async function ProjectPage({ params: { slug } }: Props) {
  const project = await getProject(slug);

  return (
    <main className="max-w-6xl mx-auto px-5">
      <section className="flex flex-col md:flex-row md:space-x-16">
        <div className="flex flex-col gap-y-5">
          <h1 className="font-bold text-3xl">{project.title}</h1>
          <p>{project.summary}</p>

          <div className="flex flex-col space-y-3">
            <h2 className="font-semibold text-2xl">Technlogies:</h2>
            <div className="flex flex-row space-x-5">
              {project.technologies.map((technology) => (
                <div
                  key={technology._id}
                  className="bg-gray-800/60 p-3 rounded-xl"
                  title={technology.title}
                >
                  <img
                    src={urlFor(technology.image).url()}
                    alt=""
                    className="h-10 w-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <img
          src={urlFor(project.poster).url()}
          className="w-full h-80 object-contain rounded-xl"
        />
      </section>

      <section className="flex flex-col space-y-5 mt-5">
        <h2 className="font-semibold text-2xl">Project Description:</h2>
        <div>
          <PortableText value={project.description} />
        </div>
      </section>

      <section className="flex flex-row space-x-5 mt-5">
        <div className="flex flex-row">
          <a
            href={project.githubLink}
            target="_blank"
            className="bg-white text-black font-semibold rounded-lg px-8 py-3 hover:bg-dimwhite transition-all duration-500 ease-in-out flex flex-row gap-x-2"
          >
            <GithubIcon />
            Get Code
          </a>
        </div>
        <a
          href={project.linkToBuild}
          target="_blank"
          className="bg-white text-black font-semibold rounded-lg px-8 py-3 hover:bg-dimwhite transition-all duration-500 ease-in-out flex flex-row gap-x-2"
        >
          Visit
          <TopRightArrow />
        </a>
      </section>

      <section className="flex flex-col space-y-5 mt-5">
        <h2 className="font-semibold text-2xl">Screenshots:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {project.screenshots.map((screenshot) => (
            <img
              key={screenshot._id}
              src={urlFor(screenshot.asset).url()}
              className=" object-contain rounded-xl"
            />
          ))}
        </div>
      </section>

      <section className="mt-24 mb-36 group">
        <Link href="/projects" className="flex gap-x-3">
          <p className="text-gray-400 group-hover:text-white group-hover:underline tracking-wide">
            Browse other Projects
          </p>
          <TopRightArrow />
        </Link>
      </section>
    </main>
  );
}

export default ProjectPage;
