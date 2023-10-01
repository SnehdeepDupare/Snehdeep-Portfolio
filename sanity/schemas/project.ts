export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the Project",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "summary",
      title: "Summary",
      type: "text",
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },

    {
      name: "screenshots",
      title: "Screenshots",
      description: "Screenshots of the Project",
      type: "array",
      of: [{ type: "image" }],
    },

    {
      name: "description",
      title: "Description",
      description: "Enter a brief description of the Project",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },

    {
      name: "linkToBuild",
      title: "Link to Build",
      type: "url",
    },
    {
      name: "githubLink",
      title: "Github Link of Build",
      type: "url",
    },
  ],
};
