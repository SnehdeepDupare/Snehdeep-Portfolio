import Gallery from "@/components/Gallery";
import { GithubIcon, TopRightArrow } from "@/components/Icons";
import PageWrapper from "@/components/PageWrapper";
import { RichTextComponents } from "@/components/RichTextComponents";
import urlFor from "@/sanity/lib/urlFor";
import { getProject } from "@/sanity/utils/getProject";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export const revalidate = 0;

async function ProjectPage({ params: { slug } }: Props) {
  const project = await getProject(slug);

  return (
    <PageWrapper>
      <main className="max-w-6xl mx-auto px-5">
        <section className="flex flex-col justify-between md:flex-row md:space-x-16">
          <div className="flex flex-col gap-y-5">
            <h1 className="font-bold text-5xl">{project.title}</h1>
            <p>{project.summary}</p>

            <div className="flex flex-col space-y-3">
              <h2 className="font-semibold text-3xl">Technlogies:</h2>
              <div className="flex flex-row space-x-5">
                {project.technologies.map((technology) => (
                  <div
                    key={technology._id}
                    className="bg-gray-800/60 p-3 rounded-xl"
                    title={technology.title}
                  >
                    <img
                      src={urlFor(technology.image).url()}
                      alt={technology.title}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Image
            src={urlFor(project.poster).url()}
            alt={project.title}
            height={400}
            width={700}
            className="h-full w-full md:max-w-[500px] aspect-video rounded-xl mt-4 md:mt-0"
          />
        </section>

        <section className="flex flex-col space-y-5 mt-5">
          <h2 className="font-semibold text-3xl">Project Description:</h2>
          <div>
            <PortableText
              value={project.description}
              components={RichTextComponents}
            />
          </div>
        </section>

        <section className="flex flex-row items-center space-x-5 mt-5">
          <div className="flex flex-row">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                className="bg-white text-black font-semibold rounded-lg px-4 sm:px-8 py-3 hover:bg-dimwhite transition-all duration-500 ease-in-out flex flex-row gap-x-2"
              >
                <GithubIcon />
                Get Code
              </a>
            )}
          </div>

          {project.linkToBuild && (
            <a
              href={project.linkToBuild}
              target="_blank"
              className="bg-white text-black font-semibold rounded-lg px-4 sm:px-8 py-3 hover:bg-dimwhite transition-all duration-500 ease-in-out flex flex-row gap-x-2"
            >
              Visit
              <TopRightArrow />
            </a>
          )}
        </section>

        <section className="flex flex-col space-y-5 mt-5">
          <h2 className="font-semibold text-2xl">Screenshots:</h2>
          <Gallery title={project?.title} images={project?.screenshots} />
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
    </PageWrapper>
  );
}

export default ProjectPage;
