export default {
  name: 'ourPros',
  title: 'Our Pros / Наши Про',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'ID',
      type: 'slug',
      options: {
        source: 'title', // Генерировать ID из названия
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'array',
      of: [{type: 'text'}],
      validation: (Rule) => Rule.max(10), // Ограничение по количеству элементов
    },
    {
      name: 'shortDescription',
      title: 'Краткое Описание',
      type: 'text',
      validation: (Rule) => Rule.required(), // Ограничение по количеству элементов
    },
    {
      name: 'price',
      title: 'Цена',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Дата',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Местоположение',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
