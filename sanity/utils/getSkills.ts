import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Skill } from "@/typings";

export const getSkills: () => Promise<Skill[]> = async () => {
  try {
    const skills = await client.fetch(groq`*[_type == 'skill']`);

    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};
