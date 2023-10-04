import blogPost from "/schemas/blogposts"
import contentPages from "/schemas/contentPages"
import testimonials from "/schemas/testimonials"

const schemaTypes = [
  {
    name: 'content',
    type: 'document',
    title: 'Content',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'body',
        type: 'array',
        title: 'Body',
        of: [
          {
            type: 'block',
          },
        ],
      },
    ],
  },

]

export {schemaTypes, blogPost, contentPages, testimonials,}
