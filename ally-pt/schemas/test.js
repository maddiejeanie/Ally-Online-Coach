const Test = {
    name: 'Test',
    type: 'document',
    title: 'Test',
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

  export default Test 