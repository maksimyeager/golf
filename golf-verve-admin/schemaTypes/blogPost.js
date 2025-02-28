export default {
  name: "blogPost",
  title: "Blog Post / Блоги",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "ID",
      type: "slug",
      options: {
        source: "title", // Генерировать ID из названия
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Картинка",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "secondaryImage",
      title: "Вторая Картинка",
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
    {
      name: "secondaryDescription",
      title: "Второе Описание",
      type: "text",
      validation: (Rule) => Rule.max(500),
    },
  ],
};
