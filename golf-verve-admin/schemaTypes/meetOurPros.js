export default {
  name: 'meetOurPros',
  title: 'Meet Our Pros / Встречайте Наших Про (Home Page)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
