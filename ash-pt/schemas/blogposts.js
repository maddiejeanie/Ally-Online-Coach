
 const blogPost = {
    name: 'blogPost',
    title: 'blogPost',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 100,
        },
        validation: (Rule) => Rule.required(),
      },
    
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        options: {
          dateFormat: 'MMMM Do, YYYY',
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'image',
        options: {
          hotspot: true, // Enable hotspot for image cropping
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  
   export default blogPost