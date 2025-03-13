export default {
    name: "textContent",
    title: "Тексты",
    type: "document",
    fields: [
      {
        name: "key",
        title: "Ключ текста",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "content",
        title: "Контент",
        type: "object",
        fields: [
          { name: "en", title: "English", type: "text" },
          { name: "ru", title: "Русский", type: "text" }
        ],
      },
    ],
  };
  