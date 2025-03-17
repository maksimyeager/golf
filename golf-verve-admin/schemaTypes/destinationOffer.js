export default {
  name: 'destinationOffer',
  title: 'Destination Offer / Офферы Направлений',
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
      name: 'key',
      title: 'Ключ (Страна)',
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
      name: 'price',
      title: 'Цена',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Местоположение',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'locationTrans',
      title: 'Местоположение с переводом',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'Location (English)'},
        {name: 'ru', type: 'string', title: 'Местоположение (Русский)'},
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
