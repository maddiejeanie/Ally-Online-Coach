const contentPages = {
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
  }

  export default contentPages 