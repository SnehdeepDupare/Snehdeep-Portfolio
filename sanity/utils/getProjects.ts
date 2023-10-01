import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Project } from "@/typings";

export const getProjects: () => Promise<Project[]> = async () => {
  try {
    const projects = client.fetch(
      groq`*[_type == 'project']{
        ...,
        "slug": slug.current,
        technologies[]->,       
      }| order(_createdAt desc)`,
      {
        cache: "no-store",
      }
    );

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
