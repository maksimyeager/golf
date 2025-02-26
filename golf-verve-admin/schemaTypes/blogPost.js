export default {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Название",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Картинка",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "date",
        title: "Дата",
        type: "datetime",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Описание",
        type: "text",
        validation: (Rule) => Rule.max(500),
      },
    ],
  };
  