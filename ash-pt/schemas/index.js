import blogPost from "/schemas/blogposts"
import blogPost2 from "/schemas/blogposts2"
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

export {schemaTypes, blogPost, blogPost2, contentPages, testimonials}
