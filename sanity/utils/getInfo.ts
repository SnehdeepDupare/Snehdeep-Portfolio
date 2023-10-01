import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Info } from "@/typings";

export const getInfo: () => Promise<Info> = async () => {
  try {
    const info = await client.fetch(
      groq`*[_type == "info"][0]{
        ...,
      "resume":resume.asset->url
    }`,
      {
        cache: "no-store",
      }
    );

    return info;
  } catch (error) {
    console.error("Error fetching info:", error);
    return [];
  }
};
