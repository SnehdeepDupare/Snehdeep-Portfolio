export default {
  name: "info",
  title: "Info",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Name",
      type: "string",
    },
    {
      name: "profilePic",
      title: "Profile Pic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "aboutText",
      title: "About",
      description: "Give a brief description of yourself",
      type: "text",
    },
    {
      name: "resume",
      title: "Resume",
      description: "Upload Resume in PDF Format only!",
      type: "file",
    },
  ],
};
