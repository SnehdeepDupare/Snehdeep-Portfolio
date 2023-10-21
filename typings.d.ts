import { PortableTextBlock } from "sanity";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Info extends SanityBody {
  _type: "info";
  aboutText: string;
  title: string;
  profilePic: Image;
  resume: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Screenshot extends SanityBody {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  slug: string;
  poster: Image;
  summary: string;
  linkToBuild: string;
  githubLink: string;
  technologies: Technology[];
  screenshots: Screenshot[];
  description: PortableTextBlock[];
}
