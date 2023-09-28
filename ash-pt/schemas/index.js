import blogPost from "/schemas/blogposts"

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

export {schemaTypes, blogPost}
