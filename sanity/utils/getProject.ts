import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Project } from "@/typings";

export async function getProject(slug: string): Promise<Project> {
  const project = client.fetch(
    groq`*[_type == 'project' && slug.current == $slug ][0]{
        ...,
        "slug": slug.current,
        technologies[]->,
      }`,
    {
      slug,
    }
  );

  return project;
}
