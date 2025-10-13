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

export async function generateMetadata({ params: { slug } }: Props) {
  const project = await getProject(slug);

  return {
    title: `${project.title} | Snehdeep Dupare`,
  };
}

export const revalidate = 0;

async function ProjectPage({ params: { slug } }: Props) {
  const project = await getProject(slug);

  return (
    <PageWrapper>
      <section className="grid gap-6 md:grid-cols-2 items-start">
        <div className="flex flex-col gap-5 order-2 md:order-1">
          <h1 className="font-bold text-4xl md:text-5xl">{project.title}</h1>
          <p className="text-base leading-7">{project.summary}</p>

          <div className="space-y-3">
            <h2 className="font-semibold text-xl">Technologies:</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((t) => (
                <div
                  key={t._id}
                  className="bg-gray-800/60 p-3 rounded-xl"
                  title={t.title}
                >
                  <img
                    src={urlFor(t.image).url()}
                    alt={t.title}
                    className="size-8 md:size-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full md:max-w-[520px] md:min-w-[420px] aspect-[16/9] overflow-hidden rounded-2xl order-1 md:order-2">
          <Image
            src={urlFor(project.poster).url()}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 520px, (min-width: 768px) 420px, 100vw"
          />
        </div>
      </section>

      <section className="flex flex-col mt-5">
        <h2 className="text-3xl font-semibold tracking-tight">
          Project Description:
        </h2>
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

      <section className="my-24">
        <Link
          href="/projects"
          className="flex gap-x-3 text-gray-400 hover:text-white hover:underline tracking-wide"
        >
          Browse other Projects
          <TopRightArrow />
        </Link>
      </section>
    </PageWrapper>
  );
}

export default ProjectPage;
