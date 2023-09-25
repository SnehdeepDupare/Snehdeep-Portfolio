import { type SchemaTypeDefinition } from "sanity";

import skill from "./schemas/skill";
import project from "./schemas/project";
import info from "./schemas/info";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [info, skill, project],
};
